/**
 * 多语言博客数据管理器
 * 统一管理不同语言的博客数据，支持按需加载
 */

// 导入英文博客数据（默认语言，立即加载）
import { blogData as enBlogData } from './blogData.js'

// 其他语言的博客数据缓存
const blogDataCache = new Map()
blogDataCache.set('en', enBlogData)

// 多语言博客数据加载器（按需加载）
const blogDataLoaders = {
    zh: () => import('./blogData-zh.js').then(module => module.blogData),
    ja: () => import('./blogData-ja.js').then(module => module.blogData),
    pt: () => import('./blogData-pt.js').then(module => module.blogData),
    fr: () => import('./blogData-fr.js').then(module => module.blogData),
    de: () => import('./blogData-de.js').then(module => module.blogData),
    es: () => import('./blogData-es.js').then(module => module.blogData),
    he: () => import('./blogData-he.js').then(module => module.blogData),
    mi: () => import('./blogData-mi.js').then(module => module.blogData),
    tr: () => import('./blogData-tr.js').then(module => module.blogData),
    gn: () => import('./blogData-gn.js').then(module => module.blogData)
}

/**
 * 获取指定语言的博客数据（支持按需加载）
 * @param {string} locale - 语言代码，默认为英文
 * @returns {Promise<Array>} 博客数据数组的Promise
 */
export async function getBlogData(locale = 'en') {
    // 如果已缓存，直接返回
    if (blogDataCache.has(locale)) {
        return blogDataCache.get(locale)
    }

    // 如果支持该语言，按需加载
    if (blogDataLoaders[locale]) {
        try {
            const data = await blogDataLoaders[locale]()
            blogDataCache.set(locale, data)
            return data
        } catch (error) {
            console.warn(`Failed to load blog data for locale: ${locale}`, error)
            return blogDataCache.get('en') // 回退到英文
        }
    }

    // 回退到英文
    return blogDataCache.get('en')
}

/**
 * 根据地址栏参数获取博客文章（支持按需加载）
 * @param {string} addressBar - 博客文章的地址栏参数
 * @param {string} locale - 语言代码，默认为英文
 * @returns {Promise<Object|null>} 博客文章对象或null的Promise
 */
export async function getBlogByAddressBar(addressBar, locale = 'en') {
    const blogData = await getBlogData(locale)
    return blogData.find(blog => blog.addressBar === addressBar) || null
}

/**
 * 获取所有语言的博客数据（同步版本，仅返回已缓存的数据）
 * @returns {Object} 包含已缓存语言博客数据的对象
 */
export function getAllBlogData() {
    const result = {}
    for (const [locale, data] of blogDataCache.entries()) {
        result[locale] = data
    }
    return result
}

/**
 * 检查指定语言是否有博客数据
 * @param {string} locale - 语言代码
 * @returns {boolean} 是否有博客数据
 */
export function hasBlogData(locale) {
    return blogDataLoaders.hasOwnProperty(locale) || locale === 'en'
}

/**
 * 获取支持博客功能的语言列表
 * @returns {Array} 支持博客功能的语言代码数组
 */
export function getSupportedBlogLocales() {
    return ['en', ...Object.keys(blogDataLoaders)]
}

// 默认导出英文博客数据（同步版本）
export const blogData = enBlogData

// 导出博客数据加载器
export { blogDataLoaders }

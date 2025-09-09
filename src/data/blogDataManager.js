/**
 * 多语言博客数据管理器
 * 统一管理不同语言的博客数据
 */

import { blogData as enBlogData } from './blogData.js'
import { blogData as zhBlogData } from './blogData-zh.js'
import { blogData as jaBlogData } from './blogData-ja.js'
import { blogData as ptBlogData } from './blogData-pt.js'
import { blogData as frBlogData } from './blogData-fr.js'
import { blogData as deBlogData } from './blogData-de.js'
import { blogData as esBlogData } from './blogData-es.js'
import { blogData as heBlogData } from './blogData-he.js'
import { blogData as miBlogData } from './blogData-mi.js'
import { blogData as trBlogData } from './blogData-tr.js'
import { blogData as gnBlogData } from './blogData-gn.js'


// 多语言博客数据映射
const blogDataMap = {
    en: enBlogData,
    zh: zhBlogData,
    ja: jaBlogData,
    pt: ptBlogData,
    fr: frBlogData,
    de: deBlogData,
    es: esBlogData,
    he: heBlogData,
    mi: miBlogData,
    tr: trBlogData,
    gn: gnBlogData
}

/**
 * 获取指定语言的博客数据
 * @param {string} locale - 语言代码，默认为英文
 * @returns {Array} 博客数据数组
 */
export function getBlogData(locale = 'en') {
    return blogDataMap[locale] || blogDataMap['en']
}

/**
 * 根据地址栏参数获取博客文章
 * @param {string} addressBar - 博客文章的地址栏参数
 * @param {string} locale - 语言代码，默认为英文
 * @returns {Object|null} 博客文章对象或null
 */
export function getBlogByAddressBar(addressBar, locale = 'en') {
    const blogData = getBlogData(locale)
    return blogData.find(blog => blog.addressBar === addressBar) || null
}

/**
 * 获取所有语言的博客数据
 * @returns {Object} 包含所有语言博客数据的对象
 */
export function getAllBlogData() {
    return blogDataMap
}

/**
 * 检查指定语言是否有博客数据
 * @param {string} locale - 语言代码
 * @returns {boolean} 是否有博客数据
 */
export function hasBlogData(locale) {
    return blogDataMap.hasOwnProperty(locale) && blogDataMap[locale].length > 0
}

/**
 * 获取支持博客功能的语言列表
 * @returns {Array} 支持博客功能的语言代码数组
 */
export function getSupportedBlogLocales() {
    return Object.keys(blogDataMap).filter(locale => hasBlogData(locale))
}

// 默认导出英文博客数据
export const blogData = getBlogData('en')

// 导出所有博客数据
export { blogDataMap }

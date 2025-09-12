/**
 * 统一SEO配置文件 - 集中管理所有SEO相关配置和工具函数
 */

// 网站基础配置
export const siteConfig = {
    // 网站基本信息
    name: 'Wplace Tools',
    url: 'https://wplacetools.org',
    logo: '/favicon.ico',
    description: 'Professional pixel art conversion tools that transform your creative ideas into stunning pixel art masterpieces with unlimited possibilities.',
    language: 'en',
    contact: 'jasonzim904@gmail.com',

    // 默认图片
    defaultImage: '/favicon.ico',
    defaultImageAlt: 'Wplace Tools - Professional Pixel Art Conversion Tools',

    // 图片尺寸
    imageDimensions: {
        width: 1200,
        height: 630
    },

    // 语言设置
    locale: 'en_US',

    // 主题色
    themeColor: '#00bcd4'
}

// 社交媒体配置
export const socialMediaConfig = {
    // 主要社交媒体平台
    platforms: {
        facebook: {
            name: 'Facebook',
            url: 'https://www.facebook.com/people/Wplacetools/61579447006276/',
            icon: 'facebook',
            color: '#1877f2',
            description: 'Follow us on Facebook for updates and community discussions'
        },
        twitter: {
            name: 'Twitter/X',
            url: 'https://x.com/jasonzim163713/status/1960269890113376575',
            icon: 'twitter',
            color: '#1da1f2',
            description: 'Follow us on Twitter for the latest news and updates'
        },
        instagram: {
            name: 'Instagram',
            url: '#', // 待添加
            icon: 'instagram',
            color: '#e4405f',
            description: 'Follow us on Instagram for visual content and behind-the-scenes'
        },
        linkedin: {
            name: 'LinkedIn',
            url: '#', // 待添加
            icon: 'linkedin',
            color: '#0077b5',
            description: 'Connect with us on LinkedIn for professional networking'
        }
    },

    // 获取所有有效的社交媒体链接
    getActivePlatforms() {
        return Object.entries(this.platforms)
            .filter(([key, platform]) => platform.url !== '#')
            .reduce((acc, [key, platform]) => {
                acc[key] = platform;
                return acc;
            }, {});
    },

    // 获取社交媒体链接数组（用于结构化数据）
    getSocialLinks() {
        return Object.values(this.platforms)
            .filter(platform => platform.url !== '#')
            .map(platform => platform.url);
    },

    // 获取社交媒体名称数组
    getSocialNames() {
        return Object.values(this.platforms)
            .filter(platform => platform.url !== '#')
            .map(platform => platform.name);
    }
}

// 默认SEO设置
export const defaultSEO = {
    title: 'Wplace Tools - Professional Pixel Art Conversion Tools',
    description: 'Transform your creative ideas into stunning pixel art with Wplace Tools. Professional image and text conversion tools for pixel art creation.',
    keywords: 'wplace tools, pixel art, image conversion, text to pixel art, wplace pixel art, wplace image to pixel art, wplace text to pixel art'
}

// 默认社交媒体设置
export const defaultSocial = {
    siteName: 'Wplace Tools',
    type: 'website',
    image: '/favicon.ico',
    imageAlt: 'Wplace Tools - Professional Pixel Art Conversion Tools',
    twitterCard: 'summary_large_image',
    twitterSite: '@jasonzim163713',
    twitterCreator: '@jasonzim163713'
}

// 搜索引擎配置
export const searchEngineConfig = {
    google: {
        userAgent: 'Googlebot',
        crawlDelay: 0,
        allow: ['/'],
        disallow: ['/admin/', '/api/']
    },
    bing: {
        userAgent: 'Bingbot',
        crawlDelay: 1,
        allow: ['/'],
        disallow: ['/admin/', '/api/']
    },
    yahoo: {
        userAgent: 'Slurp',
        crawlDelay: 1,
        allow: ['/'],
        disallow: ['/admin/', '/api/']
    }
}

// 社交媒体爬虫配置
export const socialBotConfig = {
    facebook: {
        userAgent: 'facebookexternalhit',
        crawlDelay: 0,
        allow: ['/']
    },
    twitter: {
        userAgent: 'Twitterbot',
        crawlDelay: 0,
        allow: ['/']
    },
    linkedin: {
        userAgent: 'LinkedInBot',
        crawlDelay: 1,
        allow: ['/']
    }
}

// 恶意爬虫配置
export const maliciousBotConfig = {
    ahrefs: {
        userAgent: 'AhrefsBot',
        crawlDelay: 10,
        allow: ['/'],
        disallow: ['/admin/', '/api/']
    },
    semrush: {
        userAgent: 'SemrushBot',
        crawlDelay: 10,
        allow: ['/'],
        disallow: ['/admin/', '/api/']
    },
    mj12: {
        userAgent: 'MJ12bot',
        crawlDelay: 10,
        allow: ['/'],
        disallow: ['/admin/', '/api/']
    }
}

// 禁止访问的路径
export const disallowedPaths = [
    '/admin/',
    '/api/',
    '/_nuxt/',
    '/node_modules/',
    '/.git/',
    '/src/',
    '/temp/',
    '/cache/',
    '/logs/',
    '/config/'
]

// 禁止访问的文件类型
export const disallowedFiles = [
    '*.json$',
    '*.xml$',
    '*.txt$',
    '*.log$',
    '*.sql$'
]

// 允许访问的静态资源
export const allowedAssets = [
    '/images/',
    '/css/',
    '/js/',
    '/favicon.ico',
    '/public/',
    '/assets/'
]

// 允许访问的页面类型
export const allowedPageTypes = [
    '*.html$',
    '*.htm$',
    '*.php$',
    '*.asp$',
    '*.aspx$'
]

import { blogData as enBlogData } from '../data/blogData.js'

// 获取所有路由列表（用于vite插件配置）
export function getAllRoutes() {
    const staticRoutes = [
        '/',
        '/pixel-art-generator',
        '/text-to-pixel-art',
        '/color-converter',
        '/wplace-extension',
        '/about',
        '/blog',
        '/privacy-policy',
        '/terms-of-use',
        '/copyright'
    ]

    // 支持的语言列表（排除默认语言en）
    const supportedLanguages = ['zh', 'ja', 'pt', 'fr', 'de', 'es', 'he', 'mi', 'tr', 'gn']

    // 生成所有语言的多语言路由
    const multiLangRoutes = []
    supportedLanguages.forEach(lang => {
        multiLangRoutes.push(
            `/${lang}/`,
            `/${lang}/pixel-art-generator`,
            `/${lang}/text-to-pixel-art`,
            `/${lang}/color-converter`,
            `/${lang}/wplace-extension`,
            `/${lang}/about`,
            `/${lang}/blog`,
            `/${lang}/privacy-policy`,
            `/${lang}/terms-of-use`,
            `/${lang}/copyright`
        )
    })

    // 生成博客详情页路由（默认语言）
    const blogRoutes = enBlogData.map(blog => `/blog/${blog.addressBar}`)

    // 生成所有语言的博客详情页路由（仅使用英文博客数据，其他语言按需加载）
    const multiLangBlogRoutes = []
    supportedLanguages.forEach(lang => {
        const langBlogRoutes = enBlogData.map(blog => `/${lang}/blog/${blog.addressBar}`)
        multiLangBlogRoutes.push(...langBlogRoutes)
    })

    return [...staticRoutes, ...multiLangRoutes, ...blogRoutes, ...multiLangBlogRoutes]
}

// Sitemap配置
export const sitemapConfig = {
    hostname: 'https://wplacetools.org',
    dynamicRoutes: getAllRoutes(),
    readable: true,
    exclude: ['/404', '/error', '/admin', '/api'],
    outDir: 'dist',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8
}

// SEO工具函数
/**
 * 设置页面TDK和社交媒体标签
 * @param {Object} seo - SEO对象，包含title, description, keywords
 * @param {string} canonicalUrl - 规范URL（可选）
 */
export function setPageSEO(seo = {}, canonicalUrl = null) {
    const { title, description, keywords } = { ...defaultSEO, ...seo }

    // 设置页面标题
    document.title = title

    // 设置meta description
    setMetaTag('description', description)

    // 设置meta keywords
    setMetaTag('keywords', keywords)

    // 设置canonical URL
    if (canonicalUrl) {
        setCanonicalUrl(canonicalUrl)
    }

    // 统一设置社交媒体标签
    setSocialTags(title, description, seo.image)
}

/**
 * 设置社交媒体标签
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 * @param {string} image - 页面图片（可选）
 * @param {string} type - 内容类型，默认为website
 */
export function setSocialTags(title, description, image = null, type = 'website') {
    // Open Graph标签
    setMetaTag('og:title', title)
    setMetaTag('og:description', description)
    setMetaTag('og:type', type)
    setMetaTag('og:url', window.location.href)
    setMetaTag('og:image', image || defaultSocial.image)
    setMetaTag('og:image:alt', defaultSocial.imageAlt)
    setMetaTag('og:site_name', defaultSocial.siteName)
    setMetaTag('og:locale', 'en_US')

    // Twitter Card标签
    setMetaTag('twitter:card', defaultSocial.twitterCard)
    setMetaTag('twitter:site', defaultSocial.twitterSite)
    setMetaTag('twitter:creator', defaultSocial.twitterCreator)
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', image || defaultSocial.image)
    setMetaTag('twitter:image:alt', defaultSocial.imageAlt)
}

/**
 * 设置meta标签
 * @param {string} name - meta标签的name或property属性
 * @param {string} content - meta标签的content属性
 */
function setMetaTag(name, content) {
    // 先查找已存在的标签
    let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)

    if (!metaTag) {
        // 如果不存在，创建新标签
        metaTag = document.createElement('meta')
        // 判断是property还是name属性
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
            metaTag.setAttribute('property', name)
        } else {
            metaTag.setAttribute('name', name)
        }
        document.head.appendChild(metaTag)
    }

    // 更新content属性
    metaTag.setAttribute('content', content)
}

/**
 * 设置canonical URL
 * @param {string} url - 规范URL
 */
export function setCanonicalUrl(url) {
    let canonicalLink = document.querySelector('link[rel="canonical"]')

    if (!canonicalLink) {
        // 如果不存在，创建新标签
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
    }

    // 更新href属性
    canonicalLink.setAttribute('href', url)
}

/**
 * 重置为默认SEO设置
 */
export function resetToDefaultSEO() {
    setPageSEO(defaultSEO)
}

// 生成robots.txt内容
export function generateRobotsTxt() {
    let robotsTxt = `# ${siteConfig.name} - Robots.txt\n`
    robotsTxt += `# 允许所有搜索引擎爬虫访问\n`
    robotsTxt += `User-agent: *\n`
    robotsTxt += `Allow: /\n\n`

    // 禁止访问的路径
    robotsTxt += `# 禁止爬取开发和临时文件\n`
    disallowedPaths.forEach(path => {
        robotsTxt += `Disallow: ${path}\n`
    })

    // 禁止访问的文件类型
    robotsTxt += `\n# 禁止爬取敏感文件\n`
    disallowedFiles.forEach(file => {
        robotsTxt += `Disallow: ${file}\n`
    })

    // 允许访问的静态资源
    robotsTxt += `\n# 允许爬取静态资源\n`
    allowedAssets.forEach(asset => {
        robotsTxt += `Allow: ${asset}\n`
    })

    // 允许访问的页面类型
    robotsTxt += `\n# 允许爬取主要页面类型\n`
    allowedPageTypes.forEach(type => {
        robotsTxt += `Allow: ${type}\n`
    })

    // Sitemap
    robotsTxt += `\n# 站点地图位置\n`
    robotsTxt += `Sitemap: ${sitemapConfig.hostname}/sitemap.xml\n\n`

    // 爬取延迟
    robotsTxt += `# 爬取延迟（秒）- 对搜索引擎友好\n`
    robotsTxt += `Crawl-delay: 1\n\n`

    // 搜索引擎特定配置
    robotsTxt += `# 特定搜索引擎配置\n`
    Object.entries(searchEngineConfig).forEach(([name, engine]) => {
        robotsTxt += `User-agent: ${engine.userAgent}\n`
        robotsTxt += `Allow: ${engine.allow.join(', ')}\n`
        robotsTxt += `Crawl-delay: ${engine.crawlDelay}\n`
        engine.disallow.forEach(path => {
            robotsTxt += `Disallow: ${path}\n`
        })
        robotsTxt += '\n'
    })

    // 社交媒体爬虫
    robotsTxt += `# 社交媒体爬虫\n`
    Object.entries(socialBotConfig).forEach(([name, bot]) => {
        robotsTxt += `User-agent: ${bot.userAgent}\n`
        robotsTxt += `Allow: ${bot.allow.join(', ')}\n`
        robotsTxt += `Crawl-delay: ${bot.crawlDelay}\n\n`
    })

    // 恶意爬虫
    robotsTxt += `# 禁止恶意爬虫\n`
    Object.entries(maliciousBotConfig).forEach(([name, bot]) => {
        robotsTxt += `User-agent: ${bot.userAgent}\n`
        robotsTxt += `Crawl-delay: ${bot.crawlDelay}\n`
        bot.disallow.forEach(path => {
            robotsTxt += `Disallow: ${path}\n`
        })
        robotsTxt += '\n'
    })

    // 网站信息
    robotsTxt += `# 网站信息\n`
    robotsTxt += `# 最后更新: ${new Date().getFullYear()}年\n`
    robotsTxt += `# 网站: ${siteConfig.url}\n`
    robotsTxt += `# 联系: ${siteConfig.contact}\n`

    return robotsTxt
}

// 导出默认配置
export default {
    siteConfig,
    socialMediaConfig,
    defaultSEO,
    defaultSocial,
    searchEngineConfig,
    socialBotConfig,
    maliciousBotConfig,
    disallowedPaths,
    disallowedFiles,
    allowedAssets,
    allowedPageTypes,
    sitemapConfig,
    getAllRoutes,
    setPageSEO,
    setSocialTags,
    setCanonicalUrl,
    resetToDefaultSEO,
    generateRobotsTxt
}

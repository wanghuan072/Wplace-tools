/**
 * 结构化数据工具 - 生成JSON-LD格式的Schema.org数据
 */

import { socialMediaConfig, siteConfig } from './seo.js'

// 网站基础信息
const siteInfo = {
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    sameAs: socialMediaConfig.getSocialLinks()
}

/**
 * 生成网站组织信息结构化数据
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteInfo.name,
        url: siteInfo.url,
        logo: siteInfo.logo,
        description: siteInfo.description,
        sameAs: siteInfo.sameAs,
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: `${siteInfo.url}/about`
        }
    }
}

/**
 * 生成网站结构化数据
 */
export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteInfo.name,
        url: siteInfo.url,
        description: siteInfo.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteInfo.url}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    }
}

/**
 * 生成面包屑导航结构化数据
 * @param {Array} breadcrumbs - 面包屑数组，格式：[{name: 'Home', url: '/'}, {name: 'Tools', url: '/tools'}]
 */
export function generateBreadcrumbSchema(breadcrumbs) {
    const itemListElement = breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteInfo.url}${item.url}`
    }))

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement
    }
}

/**
 * 生成工具应用结构化数据 (SoftwareApplication)
 * @param {Object} tool - 工具对象
 */
export function generateToolSchema(tool) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: tool.title,
        description: tool.seo?.description || tool.description,
        image: tool.imageUrl,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web Browser',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
        },
        author: {
            '@type': 'Organization',
            name: siteInfo.name
        },
        publisher: {
            '@type': 'Organization',
            name: siteInfo.name,
            logo: {
                '@type': 'ImageObject',
                url: siteInfo.logo
            }
        },
        datePublished: tool.publishDate || new Date().toISOString(),
        dateModified: tool.publishDate || new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteInfo.url}${tool.url}`
        },
        genre: 'Pixel Art Tool',
        platform: 'Web Browser',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '500'
        }
    }
}

/**
 * 生成博客文章结构化数据 (Article)
 * @param {Object} blog - 博客对象
 */
export function generateArticleSchema(blog) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.title,
        description: blog.description,
        image: blog.imageUrl,
        author: {
            '@type': 'Organization',
            name: siteInfo.name
        },
        publisher: {
            '@type': 'Organization',
            name: siteInfo.name,
            logo: {
                '@type': 'ImageObject',
                url: siteInfo.logo
            }
        },
        datePublished: blog.publishDate,
        dateModified: blog.publishDate,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteInfo.url}/blog/${blog.addressBar}`
        },
        articleSection: 'Pixel Art & Creative Tools'
    }
}

/**
 * 生成工具列表结构化数据 (ItemList)
 * @param {Array} tools - 工具数组
 * @param {string} listName - 列表名称
 */
export function generateToolListSchema(tools, listName = 'Wplace Tools Collection') {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: listName,
        numberOfItems: tools.length,
        itemListElement: tools.map((tool, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tool.title,
            url: `${siteInfo.url}${tool.url}`
        }))
    }
}

/**
 * 生成FAQ结构化数据
 * @param {Array} faqs - FAQ数组，格式：[{question: 'Q', answer: 'A'}]
 */
export function generateFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }
}

/**
 * 在页面中插入结构化数据
 * @param {Object} schema - 结构化数据对象
 */
export function insertStructuredData(schema) {
    // 移除已存在的结构化数据
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())

    // 创建新的结构化数据脚本
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)
}

/**
 * 插入多个结构化数据
 * @param {Array} schemas - 结构化数据数组
 */
export function insertMultipleStructuredData(schemas) {
    // 清除已存在的结构化数据
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())

    // 插入新的结构化数据
    schemas.forEach(schema => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(schema, null, 2)
        document.head.appendChild(script)
    })
}

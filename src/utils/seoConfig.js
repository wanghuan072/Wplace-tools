// SEO配置文件
export const seoConfig = {
    // 网站基本信息
    site: {
        name: 'Wplace Tools',
        url: 'https://wplacetools.org',
        description: 'Professional pixel art conversion tools for creative professionals',
        language: 'en',
        contact: 'jasonzim904@gmail.com'
    },

    // 社交媒体配置
    social: {
        twitter: '@jasonzim163713',
        facebook: 'https://www.facebook.com/people/Wplacetools/61579447006276/',
        instagram: 'wplacetools',
        linkedin: 'wplacetools'
    },

    // 搜索引擎配置
    searchEngines: {
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
    },

    // 社交媒体爬虫配置
    socialBots: {
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
    },

    // 恶意爬虫配置
    maliciousBots: {
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
    },

    // 禁止访问的路径
    disallowedPaths: [
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
    ],

    // 禁止访问的文件类型
    disallowedFiles: [
        '*.json$',
        '*.xml$',
        '*.txt$',
        '*.log$',
        '*.sql$'
    ],

    // 允许访问的静态资源
    allowedAssets: [
        '/images/',
        '/css/',
        '/js/',
        '/favicon.ico',
        '/public/',
        '/assets/'
    ],

    // 允许访问的页面类型
    allowedPageTypes: [
        '*.html$',
        '*.htm$',
        '*.php$',
        '*.asp$',
        '*.aspx$'
    ],

    // Sitemap配置
    sitemap: {
        hostname: 'https://wplacetools.org',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
    }
}

// 生成robots.txt内容
export function generateRobotsTxt() {
    const config = seoConfig

    let robotsTxt = `# ${config.site.name} - Robots.txt\n`
    robotsTxt += `# 允许所有搜索引擎爬虫访问\n`
    robotsTxt += `User-agent: *\n`
    robotsTxt += `Allow: /\n\n`

    // 禁止访问的路径
    robotsTxt += `# 禁止爬取开发和临时文件\n`
    config.disallowedPaths.forEach(path => {
        robotsTxt += `Disallow: ${path}\n`
    })

    // 禁止访问的文件类型
    robotsTxt += `\n# 禁止爬取敏感文件\n`
    config.disallowedFiles.forEach(file => {
        robotsTxt += `Disallow: ${file}\n`
    })

    // 允许访问的静态资源
    robotsTxt += `\n# 允许爬取静态资源\n`
    config.allowedAssets.forEach(asset => {
        robotsTxt += `Allow: ${asset}\n`
    })

    // 允许访问的页面类型
    robotsTxt += `\n# 允许爬取主要页面类型\n`
    config.allowedPageTypes.forEach(type => {
        robotsTxt += `Allow: ${type}\n`
    })

    // Sitemap
    robotsTxt += `\n# 站点地图位置\n`
    robotsTxt += `Sitemap: ${config.sitemap.hostname}/sitemap.xml\n\n`

    // 爬取延迟
    robotsTxt += `# 爬取延迟（秒）- 对搜索引擎友好\n`
    robotsTxt += `Crawl-delay: 1\n\n`

    // 搜索引擎特定配置
    robotsTxt += `# 特定搜索引擎配置\n`
    Object.entries(config.searchEngines).forEach(([name, engine]) => {
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
    Object.entries(config.socialBots).forEach(([name, bot]) => {
        robotsTxt += `User-agent: ${bot.userAgent}\n`
        robotsTxt += `Allow: ${bot.allow.join(', ')}\n`
        robotsTxt += `Crawl-delay: ${bot.crawlDelay}\n\n`
    })

    // 恶意爬虫
    robotsTxt += `# 禁止恶意爬虫\n`
    Object.entries(config.maliciousBots).forEach(([name, bot]) => {
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
    robotsTxt += `# 网站: ${config.site.url}\n`
    robotsTxt += `# 联系: ${config.site.contact}\n`

    return robotsTxt
}

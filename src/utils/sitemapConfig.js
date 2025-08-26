import { blogData } from '../data/blogData.js'

// 获取所有路由列表（用于vite插件配置）
export function getAllRoutes() {
    const staticRoutes = [
        '/',
        '/pixel-art-generator',
        '/text-to-pixel-art',
        '/wplace-extension',
        '/about',
        '/blog',
        '/privacy-policy',
        '/terms-of-use',
        '/copyright'
    ]

    // 生成博客详情页路由
    const blogRoutes = blogData.map(blog => `/blog/${blog.addressBar}`)

    return [...staticRoutes, ...blogRoutes]
}

// 站点地图配置
export const sitemapConfig = {
    hostname: 'https://wplacetools.org',
    dynamicRoutes: getAllRoutes(),
    readable: true,
    exclude: ['/404', '/error'],
    outDir: 'dist'
}

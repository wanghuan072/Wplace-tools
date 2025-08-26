/**
 * SEO配置文件 - 集中管理域名等配置信息
 * 后期只需要修改这里的配置，即可批量更新所有SEO相关设置
 */

export const seoConfig = {
    // 网站基础信息
    domain: 'https://wplacetools.org', // 后期批量替换为实际域名

    // 网站信息
    siteName: 'Wplace Tools',
    siteDescription: 'Professional pixel art conversion tools that transform your creative ideas into stunning pixel art masterpieces with unlimited possibilities.',

    // 社交媒体账号
    social: {
        twitter: '@jasonzim163713',
        facebook: 'wplacetools',
        instagram: 'wplacetools'
    },

    // 联系信息
    contact: {
        email: 'jasonzim904@gmail.com',
        support: 'https://wplacetools.org/about'
    },

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

// 导出默认配置
export default seoConfig

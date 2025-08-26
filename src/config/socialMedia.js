// 社交媒体配置文件
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

// 导出默认配置
export default socialMediaConfig;

# 配置文件目录

## 概述
`src/config/` 目录包含了项目的所有配置文件，经过整合后，所有SEO相关的配置都集中在这里。

## 文件结构

### `seo.js` - 统一SEO配置文件
这是主要的配置文件，包含了以下所有配置：

#### 网站基础配置 (`siteConfig`)
- 网站名称、URL、描述、语言等基本信息
- 默认图片和主题色设置
- 联系信息

#### 社交媒体配置 (`socialMediaConfig`)
- Facebook、Twitter、Instagram、LinkedIn等平台配置
- 每个平台的图标、颜色、描述
- 动态获取有效平台的工具函数

#### SEO设置 (`defaultSEO`, `defaultSocial`)
- 默认的页面标题、描述、关键词
- 社交媒体标签的默认设置

#### 搜索引擎配置
- Google、Bing、Yahoo等搜索引擎的爬虫配置
- 社交媒体爬虫配置
- 恶意爬虫限制配置

#### 访问控制配置
- 禁止访问的路径和文件类型
- 允许访问的静态资源和页面类型

#### Sitemap配置 (`sitemapConfig`)
- 站点地图生成配置
- 动态路由配置（包括博客页面）
- 排除页面配置

#### SEO工具函数
- `setPageSEO()` - 设置页面SEO标签
- `setSocialTags()` - 设置社交媒体标签
- `setCanonicalUrl()` - 设置规范URL
- `generateRobotsTxt()` - 生成robots.txt内容
- `getAllRoutes()` - 获取所有路由列表

## 使用方法

### 导入配置
```javascript
import { 
    siteConfig, 
    socialMediaConfig, 
    defaultSEO,
    setPageSEO,
    generateRobotsTxt 
} from '@/config/seo.js'
```

### 使用网站配置
```javascript
console.log(siteConfig.name) // "Wplace Tools"
console.log(siteConfig.url)  // "https://wplacetools.org"
```

### 使用社交媒体配置
```javascript
const activePlatforms = socialMediaConfig.getActivePlatforms()
const socialLinks = socialMediaConfig.getSocialLinks()
```

### 设置页面SEO
```javascript
setPageSEO({
    title: '页面标题',
    description: '页面描述',
    keywords: '关键词1,关键词2'
}, 'https://example.com/canonical-url')
```

### 生成robots.txt
```javascript
const robotsContent = generateRobotsTxt()
```

## 优势

1. **集中管理**: 所有SEO相关配置都在一个文件中
2. **易于维护**: 修改配置只需要编辑一个文件
3. **类型安全**: 使用ES6模块导出，支持IDE智能提示
4. **功能完整**: 包含了SEO、社交媒体、爬虫控制等所有功能
5. **工具函数**: 提供了完整的SEO工具函数库

## 注意事项

- 修改配置后，需要重新构建项目才能生效
- robots.txt文件现在由配置文件自动生成
- 社交媒体链接为空（`#`）的平台不会显示在页面上
- 所有配置都支持环境变量覆盖（可在vite.config.js中配置）

## 最终目录结构

经过整合后，项目的目录结构如下：

```
src/
├── config/
│   ├── seo.js              # 统一SEO配置文件（包含所有配置和工具函数）
│   ├── structuredData.js   # 结构化数据生成工具
│   └── README.md           # 配置文件说明文档
```

> **注意**: 原来的 `src/utils/` 目录已被删除，所有配置文件都统一放在 `src/config/` 目录中。

### 文件说明

- **`src/config/seo.js`**: 包含所有SEO相关配置和工具函数
  - 网站基础配置
  - 社交媒体配置
  - SEO设置和工具函数
  - 搜索引擎和爬虫配置
  - Sitemap配置
  - robots.txt生成

- **`src/config/structuredData.js`**: 专门的结构化数据生成工具
  - 生成Schema.org格式的JSON-LD数据
  - 支持组织、网站、面包屑、工具等结构化数据
  - 使用统一的配置信息

### 目录整合说明

为了简化项目结构，我们将所有配置文件都统一放在 `src/config/` 目录中：

1. **SEO配置**: `seo.js` - 包含所有SEO相关配置和工具函数
2. **结构化数据**: `structuredData.js` - 专门的结构化数据生成工具
3. **文档说明**: `README.md` - 详细的配置说明和使用指南

这样的组织方式有以下优势：
- **集中管理**: 所有配置都在一个目录中
- **易于维护**: 不需要在多个目录间切换
- **清晰结构**: 配置文件按功能分类，逻辑清晰
- **简化导入**: 统一的导入路径，减少路径复杂度

### 整合完成

✅ 删除了重复的配置文件
✅ 统一了所有SEO相关配置
✅ 将所有配置文件集中到一个目录
✅ 删除了空的utils目录
✅ 简化了导入路径和维护工作
✅ 优化了项目目录结构

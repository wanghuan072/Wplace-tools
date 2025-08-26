import { createRouter, createWebHistory } from 'vue-router'
import { setPageSEO, resetToDefaultSEO, setCanonicalUrl } from '../utils/seo.js'
import {
  insertMultipleStructuredData,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateToolSchema,
  generateArticleSchema,
  generateToolListSchema
} from '../utils/structuredData.js'
import { blogData } from '../data/blogData.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        seo: {
          title: 'Wplace Tools - Professional Pixel Art Conversion Tools',
          description: 'Transform your creative ideas into stunning pixel art with Wplace Tools. Professional image and text conversion tools for pixel art creation.',
          keywords: 'wplace tools, pixel art, image conversion, text to pixel art, wplace pixel art, wplace image to pixel art, wplace text to pixel art'
        }
      }
    },
    {
      path: '/pixel-art-generator',
      name: 'pixelArtGenerator',
      component: () => import('@/views/PixelArtGeneratorPage.vue'),
      meta: {
        seo: {
          title: 'Image to Pixel Art Converter - Wplace Tools',
          description: 'Convert any image to beautiful pixel art with Wplace Tools. Professional image processing with customizable settings and high-quality output.',
          keywords: 'image to pixel art, pixel art converter, image pixelation, wplace image to pixel art, pixel art generator'
        }
      }
    },
    {
      path: '/text-to-pixel-art',
      name: 'textToPixelArt',
      component: () => import('@/views/TextToPixelArtPage.vue'),
      meta: {
        seo: {
          title: 'Text to Pixel Art Converter - Wplace Tools',
          description: 'Create stunning pixel art text with Wplace Tools. Customizable fonts, styles, and colors for unique text effects.',
          keywords: 'text to pixel art, pixel art text, text pixelation, wplace text to pixel art, pixel text generator'
        }
      }
    },
    {
      path: '/wplace-extensions',
      name: 'wplaceExtensions',
      component: () => import('@/views/WplacePluginsView.vue'),
      meta: {
        seo: {
          title: 'Wplace Extensions - Official and Community Extensions',
          description: 'Discover official and community extensions for Wplace.live. Enhance your creative workflow with powerful extensions.',
          keywords: 'wplace extensions, wplace plugins, wplace tools, browser extensions, creative tools'
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        seo: {
          title: 'About Us - Wplace Tools',
          description: 'Learn about Wplace Tools - our mission to provide professional pixel art conversion tools and creative solutions.',
          keywords: 'about wplace tools, pixel art tools, creative software, about us'
        }
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
      meta: {
        seo: {
          title: 'Wplace Tools Blog - Pixel Art Tips & Guides',
          description: 'Discover expert tips, guides, and insights for pixel art creation with Wplace Tools. Learn from professionals.',
          keywords: 'wplace tools blog, pixel art blog, creative guides, pixel art tips, wplace blog'
        }
      }
    },
    {
      path: '/blog/:addressBar',
      name: 'blogDetail',
      component: () => import('@/views/BlogDetailView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: () => import('@/views/PrivacyPolicyView.vue'),
      meta: {
        seo: {
          title: 'Privacy Policy - Wplace Tools',
          description: 'Privacy Policy for Wplace Tools. Learn how we collect, use, and protect your personal information.',
          keywords: 'privacy policy, data protection, wplace tools, user privacy'
        }
      }
    },
    {
      path: '/terms-of-use',
      name: 'termsOfUse',
      component: () => import('@/views/TermsOfUseView.vue'),
      meta: {
        seo: {
          title: 'Terms of Use - Wplace Tools',
          description: 'Terms of Use for Wplace Tools. Learn about the rules and guidelines for using our creative platform.',
          keywords: 'terms of use, terms of service, wplace tools, user agreement'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('@/views/CopyrightView.vue'),
      meta: {
        seo: {
          title: 'Copyright Information - Wplace Tools',
          description: 'Copyright information for Wplace Tools. Learn about intellectual property rights and usage guidelines.',
          keywords: 'copyright, intellectual property, wplace tools, trademark, fair use'
        }
      }
    },
  ],
})

// 全局路由守卫 - 处理基础SEO
router.beforeEach((to, from, next) => {
  // 设置canonical URL
  const canonicalUrl = `https://wplacetools.org${to.path}`
  setCanonicalUrl(canonicalUrl)

  // 先准备要应用的 SEO（只在最后统一 setPageSEO 一次）
  let seoToApply = null

  // 生成基础结构化数据
  const schemas = [generateOrganizationSchema(), generateWebsiteSchema()]

  // 博客详情页 - 生成面包屑与实体 Schema，并应用博客 SEO
  if (to.name === 'blogDetail' && to.params?.addressBar) {
    const blog = blogData.find(b => b.addressBar === to.params.addressBar)
    if (blog) {
      schemas.push(
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: blog.title, url: `/blog/${blog.addressBar}` }
        ]),
        generateArticleSchema(blog)
      )
      if (blog.seo) {
        seoToApply = blog.seo
      }
    }
  }

  // 工具页面 - 生成面包屑与工具 Schema
  if (to.name === 'pixelArtGenerator') {
    schemas.push(
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Image to Pixel Art', url: '/pixel-art-generator' }
      ]),
      generateToolSchema({
        title: 'Image to Pixel Art Converter',
        description: 'Convert any image to beautiful pixel art with customizable settings',
        url: '/pixel-art-generator',
        imageUrl: '/favicon.ico'
      })
    )
  }

  if (to.name === 'textToPixelArt') {
    schemas.push(
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Text to Pixel Art', url: '/text-to-pixel-art' }
      ]),
      generateToolSchema({
        title: 'Text to Pixel Art Converter',
        description: 'Create stunning pixel art text with customizable fonts and styles',
        url: '/text-to-pixel-art',
        imageUrl: '/favicon.ico'
      })
    )
  }

  // 兜底：若以上未设置，则使用路由 meta.seo 或默认
  if (!seoToApply) {
    if (to.meta?.seo) {
      seoToApply = to.meta.seo
    } else {
      // 使用默认 SEO
      seoToApply = null
    }
  }

  if (seoToApply) {
    setPageSEO(seoToApply, canonicalUrl)
  } else {
    resetToDefaultSEO()
    setCanonicalUrl(canonicalUrl)
  }

  // 插入结构化数据（会清空既有 JSON-LD 后再插入）
  insertMultipleStructuredData(schemas)

  next()
})

export default router

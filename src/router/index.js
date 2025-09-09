import { createRouter, createWebHistory } from 'vue-router'
import { setPageSEO, resetToDefaultSEO, setCanonicalUrl } from '../config/seo.js'
import {
  insertMultipleStructuredData,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateToolSchema,
  generateArticleSchema,
  generateToolListSchema
} from '../config/structuredData.js'
import { blogData } from '../data/blogData.js'
import { supportedLocales, defaultLocale, i18n } from '../locales/index.js'
import { nextTick } from 'vue'

// Helper function to get translated meta tags
const getMeta = (titleKey, descriptionKey, keywordsKey = 'meta.defaultKeywords') => {
  return {
    title: () => i18n.global.t(titleKey),
    description: () => i18n.global.t(descriptionKey),
    keywords: () => i18n.global.t(keywordsKey),
  }
}

const nonDefaultLangs = supportedLocales.filter((lang) => lang.code !== defaultLocale)
const langParamRegex = nonDefaultLangs.map(lang => lang.code).join('|')

// 基础路由配置
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: getMeta('meta.home.title', 'meta.home.description', 'meta.home.keywords')
  },
  {
    path: '/color-converter',
    name: 'colorConverter',
    component: () => import('@/views/ColorConverterPage.vue'),
    meta: getMeta('meta.colorConverter.title', 'meta.colorConverter.description', 'meta.colorConverter.keywords')
  },
  {
    path: '/pixel-art-generator',
    name: 'pixelArtGenerator',
    component: () => import('@/views/PixelArtGeneratorPage.vue'),
    meta: getMeta('meta.pixelArtGenerator.title', 'meta.pixelArtGenerator.description', 'meta.pixelArtGenerator.keywords')
  },
  {
    path: '/text-to-pixel-art',
    name: 'textToPixelArt',
    component: () => import('@/views/TextToPixelArtPage.vue'),
    meta: getMeta('meta.textToPixelArt.title', 'meta.textToPixelArt.description', 'meta.textToPixelArt.keywords')
  },
  {
    path: '/wplace-extension',
    name: 'wplaceExtensions',
    component: () => import('@/views/WplacePluginsView.vue'),
    meta: getMeta('meta.wplaceExtension.title', 'meta.wplaceExtension.description', 'meta.wplaceExtension.keywords')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: getMeta('meta.about.title', 'meta.about.description', 'meta.about.keywords')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    meta: getMeta('meta.blog.title', 'meta.blog.description', 'meta.blog.keywords')
  },
  {
    path: '/blog/:addressBar',
    name: 'blogDetail',
    component: () => import('@/views/BlogDetailView.vue'),
    meta: getMeta('meta.blog.title', 'meta.blog.description')
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: () => import('@/views/PrivacyPolicyView.vue'),
    meta: getMeta('meta.privacyPolicy.title', 'meta.privacyPolicy.description', 'meta.privacyPolicy.keywords')
  },
  {
    path: '/terms-of-use',
    name: 'termsOfUse',
    component: () => import('@/views/TermsOfUseView.vue'),
    meta: getMeta('meta.termsOfUse.title', 'meta.termsOfUse.description', 'meta.termsOfUse.keywords')
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: () => import('@/views/CopyrightView.vue'),
    meta: getMeta('meta.copyright.title', 'meta.copyright.description', 'meta.copyright.keywords')
  },
  // 多语言路由（带语言前缀）
  {
    path: `/:lang(${langParamRegex})/`,
    name: 'home-lang',
    component: () => import('@/views/HomeView.vue'),
    props: true,
    meta: getMeta('meta.home.title', 'meta.home.description', 'meta.home.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/color-converter`,
    name: 'colorConverter-lang',
    component: () => import('@/views/ColorConverterPage.vue'),
    props: true,
    meta: getMeta('meta.colorConverter.title', 'meta.colorConverter.description', 'meta.colorConverter.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/pixel-art-generator`,
    name: 'pixelArtGenerator-lang',
    component: () => import('@/views/PixelArtGeneratorPage.vue'),
    props: true,
    meta: getMeta('meta.pixelArtGenerator.title', 'meta.pixelArtGenerator.description', 'meta.pixelArtGenerator.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/text-to-pixel-art`,
    name: 'textToPixelArt-lang',
    component: () => import('@/views/TextToPixelArtPage.vue'),
    props: true,
    meta: getMeta('meta.textToPixelArt.title', 'meta.textToPixelArt.description', 'meta.textToPixelArt.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/wplace-extension`,
    name: 'wplaceExtensions-lang',
    component: () => import('@/views/WplacePluginsView.vue'),
    props: true,
    meta: getMeta('meta.wplaceExtension.title', 'meta.wplaceExtension.description', 'meta.wplaceExtension.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/about`,
    name: 'about-lang',
    component: () => import('@/views/AboutView.vue'),
    props: true,
    meta: getMeta('meta.about.title', 'meta.about.description', 'meta.about.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/blog`,
    name: 'blog-lang',
    component: () => import('@/views/BlogView.vue'),
    props: true,
    meta: getMeta('meta.blog.title', 'meta.blog.description', 'meta.blog.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/blog/:addressBar`,
    name: 'blogDetail-lang',
    component: () => import('@/views/BlogDetailView.vue'),
    props: true,
    meta: getMeta('meta.blog.title', 'meta.blog.description')
  },
  {
    path: `/:lang(${langParamRegex})/privacy-policy`,
    name: 'privacyPolicy-lang',
    component: () => import('@/views/PrivacyPolicyView.vue'),
    props: true,
    meta: getMeta('meta.privacyPolicy.title', 'meta.privacyPolicy.description', 'meta.privacyPolicy.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/terms-of-use`,
    name: 'termsOfUse-lang',
    component: () => import('@/views/TermsOfUseView.vue'),
    props: true,
    meta: getMeta('meta.termsOfUse.title', 'meta.termsOfUse.description', 'meta.termsOfUse.keywords')
  },
  {
    path: `/:lang(${langParamRegex})/copyright`,
    name: 'copyright-lang',
    component: () => import('@/views/CopyrightView.vue'),
    props: true,
    meta: getMeta('meta.copyright.title', 'meta.copyright.description', 'meta.copyright.keywords')
  }
]

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
  routes: routes,
})

// 全局路由守卫 - 处理多语言和SEO
router.beforeEach((to, from, next) => {
  const paramsLang = to.params.lang
  const pathFirstPart = to.path.split('/')[1]
  const storedLang = localStorage.getItem('locale')
  let targetLang = defaultLocale

  // 1. Check URL parameter
  if (paramsLang && supportedLocales.find(l => l.code === paramsLang)) {
    targetLang = paramsLang
  }
  // 2. Check first path segment
  else if (supportedLocales.find(l => l.code === pathFirstPart) && pathFirstPart !== defaultLocale) {
    targetLang = pathFirstPart
  }
  // 3. Check localStorage
  else if (storedLang && supportedLocales.find(l => l.code === storedLang)) {
    targetLang = storedLang
  }
  // 4. Fallback to default

  // Update i18n locale if needed
  if (i18n.global.locale.value !== targetLang) {
    i18n.global.locale.value = targetLang
    localStorage.setItem('locale', targetLang)
  }

  // --- URL Prefix Handling ---
  const requiresPrefix = targetLang !== defaultLocale
  const pathStartsWithCorrectLang = pathFirstPart === targetLang
  const pathHasAnyLangPrefix = supportedLocales.find(l => l.code === pathFirstPart)

  // Scenario 1: Add prefix redirect
  if (requiresPrefix && !pathStartsWithCorrectLang) {
    let newPath = ''
    if (pathHasAnyLangPrefix) {
      newPath = to.path.substring(('/' + pathFirstPart).length) || '/'
    } else {
      newPath = to.path
    }
    newPath = '/' + targetLang + newPath
    const query = to.query ? '?' + new URLSearchParams(to.query).toString() : ''
    const hash = to.hash || ''
    const fullRedirectPath = newPath + query + hash
    return next(fullRedirectPath)
  }

  // Scenario 2: Remove prefix redirect
  if (!requiresPrefix && pathHasAnyLangPrefix) {
    const toPathWithoutLang = to.path.substring(('/' + pathFirstPart).length) || '/'
    const query = to.query ? '?' + new URLSearchParams(to.query).toString() : ''
    const hash = to.hash || ''
    const fullRedirectPath = toPathWithoutLang + query + hash
    if (to.fullPath !== fullRedirectPath) {
      return next(fullRedirectPath)
    }
  }

  // --- Update Meta Tags and SEO ---
  nextTick(() => {
    const routeWithMeta = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title)

    if (routeWithMeta) {
      const meta = routeWithMeta.meta
      const pageTitle = meta.title ? meta.title() : 'Wplace Tools'
      const pageDescription = meta.description ? meta.description() : i18n.global.t('meta.defaultDescription')
      const pageKeywords = meta.keywords ? meta.keywords() : i18n.global.t('meta.defaultKeywords')

      // Update document title and meta tags
      document.title = pageTitle
      setPageSEO({
        title: pageTitle,
        description: pageDescription,
        keywords: pageKeywords
      }, `https://wplacetools.org${to.path}`)
    }
  })

  next()
})

export default router
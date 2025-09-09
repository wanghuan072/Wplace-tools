/**
 * 多语言配置文件
 */
import { createI18n } from 'vue-i18n'
import en from './en.js'
import zh from './zh.js'
import ja from './ja.js'
import pt from './pt.js'
import fr from './fr.js'
import de from './de.js'
import es from './es.js'
import he from './he.js'
import mi from './mi.js'
import tr from './tr.js'
import gn from './gn.js'

// 支持的语言列表
export const supportedLocales = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'mi', name: 'Te Reo Māori', flag: '🇳🇿' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'gn', name: 'Avañe\'ẽ', flag: '🇵🇾' }
]

// 默认语言
export const defaultLocale = 'en'

// 语言包
const messages = {
    en,
    zh,
    ja,
    pt,
    fr,
    de,
    es,
    he,
    mi,
    tr,
    gn
}

// 创建i18n实例
export const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages,
    globalInjection: true, // 全局注入 $t 函数
    silentTranslationWarn: true, // 静默翻译警告
    silentFallbackWarn: true // 静默回退警告
})

// 获取浏览器语言
export function getBrowserLocale() {
    const browserLocale = navigator.language || navigator.languages[0]
    const locale = browserLocale.split('-')[0]
    return supportedLocales.find(l => l.code === locale) ? locale : defaultLocale
}

// 设置语言
export function setLocale(locale) {
    if (supportedLocales.find(l => l.code === locale)) {
        i18n.global.locale.value = locale
        localStorage.setItem('locale', locale)
        document.documentElement.lang = locale
        return true
    }
    return false
}

// 获取当前语言
export function getCurrentLocale() {
    return i18n.global.locale.value
}

// 初始化语言设置
export function initLocale() {
    // 优先使用本地存储的语言设置
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && supportedLocales.find(l => l.code === savedLocale)) {
        setLocale(savedLocale)
    } else {
        // 否则使用浏览器语言
        const browserLocale = getBrowserLocale()
        setLocale(browserLocale)
    }
}

export default i18n

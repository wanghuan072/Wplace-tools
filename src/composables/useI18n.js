/**
 * 国际化组合式函数
 */
import { ref, computed, watch } from 'vue'
import { useI18n as useVueI18n } from 'vue-i18n'
import { supportedLocales, defaultLocale, setLocale } from '@/locales'

export function useI18n() {
    const { locale, t } = useVueI18n()

    // 当前语言 - 使用ref而不是computed，以便支持v-model
    const currentLocale = ref(locale.value)

    // 支持的语言列表
    const availableLocales = ref(supportedLocales)

    // 切换语言
    const changeLocale = (newLocale) => {
        if (supportedLocales.find(l => l.code === newLocale)) {
            // 直接更新全局i18n（如果可用）
            if (window.$i18n && window.$i18n.global && window.$i18n.global.locale) {
                window.$i18n.global.locale.value = newLocale
            }

            // 更新本地状态
            setLocale(newLocale)
            locale.value = newLocale
            currentLocale.value = newLocale

            // 保存到本地存储
            localStorage.setItem('locale', newLocale)

            // 更新HTML lang属性
            document.documentElement.lang = newLocale

            // 处理URL重定向
            const router = window.$router
            if (router) {
                const currentRoute = router.currentRoute.value
                const currentPath = currentRoute.path

                // 构建新的路径
                let newPath = currentPath

                // 移除当前语言前缀
                supportedLocales.forEach(l => {
                    if (l.code !== defaultLocale && currentPath.startsWith(`/${l.code}/`)) {
                        newPath = currentPath.replace(`/${l.code}`, '')
                    }
                })

                // 添加新语言前缀（如果不是默认语言）
                if (newLocale !== defaultLocale) {
                    newPath = `/${newLocale}${newPath}`
                }

                // 导航到新路径
                if (newPath !== currentPath) {
                    router.push(newPath)
                }
            }
        }
    }

    // 初始化语言
    const initLocale = () => {
        // 优先使用本地存储的语言
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale && supportedLocales.find(l => l.code === savedLocale)) {
            setLocale(savedLocale)
            locale.value = savedLocale
            currentLocale.value = savedLocale
            localStorage.setItem('locale', savedLocale)
            document.documentElement.lang = savedLocale
            return
        }

        // 使用浏览器语言
        const browserLocale = navigator.language.split('-')[0]
        if (supportedLocales.find(l => l.code === browserLocale)) {
            setLocale(browserLocale)
            locale.value = browserLocale
            currentLocale.value = browserLocale
            localStorage.setItem('locale', browserLocale)
            document.documentElement.lang = browserLocale
            return
        }

        // 使用默认语言
        setLocale(defaultLocale)
        locale.value = defaultLocale
        currentLocale.value = defaultLocale
        localStorage.setItem('locale', defaultLocale)
        document.documentElement.lang = defaultLocale
    }


    // 监听locale变化，同步更新currentLocale
    const updateCurrentLocale = () => {
        currentLocale.value = locale.value
    }

    // 同步当前语言状态
    const syncLocale = () => {
        if (window.$i18n && window.$i18n.global && window.$i18n.global.locale) {
            const globalLocale = window.$i18n.global.locale.value
            if (globalLocale && currentLocale.value !== globalLocale) {
                currentLocale.value = globalLocale
                locale.value = globalLocale
            }
        }
    }

    return {
        currentLocale,
        availableLocales,
        changeLocale,
        initLocale,
        syncLocale,
        t
    }
}

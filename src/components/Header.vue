<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <router-link to="/" class="logo-link">
                        <img src="/images/logo.png" alt="Wplace Tools" class="logo-icon">
                        <span class="logo-text">Wplace Tools</span>
                    </router-link>
                </div>

                <!-- 桌面端导航 -->
                <nav class="navigation desktop-nav">
                    <router-link to="/" class="nav-link" active-class="active">{{ t('home') }}</router-link>
                    <router-link to="/pixel-art-generator" class="nav-link" active-class="active">{{
                        t('imageToPixelArt') }}</router-link>
                    <router-link to="/text-to-pixel-art" class="nav-link" active-class="active">{{ t('textToPixelArt')
                        }}</router-link>
                    <router-link to="/color-converter" class="nav-link" active-class="active">{{ t('color')
                        }}</router-link>
                    <router-link to="/wplace-extension" class="nav-link" active-class="active">{{ t('extension')
                        }}</router-link>

                    <!-- 语言切换器 -->
                    <div class="language-selector">
                        <select v-model="currentLocale" @change="handleLanguageChange" class="language-select">
                            <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
                                {{ locale.name }} ({{ locale.code.toUpperCase() }})
                            </option>
                        </select>
                    </div>
                </nav>

                <!-- 移动端菜单按钮 -->
                <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </div>

        <!-- 移动端滑出菜单 -->
        <div class="mobile-menu-overlay" :class="{ 'active': isMobileMenuOpen }" @click="closeMobileMenu"></div>
        <nav class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
            <div class="mobile-menu-header">
                <span>{{ t('menu') }}</span>
                <button class="close-btn" @click="closeMobileMenu">×</button>
            </div>
            <div class="mobile-menu-links">
                <router-link to="/" class="mobile-nav-link" active-class="active" @click="closeMobileMenu">{{ t('home')
                    }}</router-link>
                <router-link to="/pixel-art-generator" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">{{ t('imageToPixelArt') }}</router-link>
                <router-link to="/text-to-pixel-art" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">{{ t('textToPixelArt') }}</router-link>
                <router-link to="/color-converter" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">{{ t('color') }}</router-link>
                <router-link to="/wplace-extension" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">{{ t('extension') }}</router-link>

                <!-- 移动端语言切换器 -->
                <div class="mobile-language-selector">
                    <label>{{ t('language') }}:</label>
                    <select v-model="currentLocale" @change="handleLanguageChange" class="mobile-language-select">
                        <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
                            {{ locale.name }} ({{ locale.code.toUpperCase() }})
                        </option>
                    </select>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUpdated, watch } from 'vue'
import { useI18n } from '@/composables/useI18n'

const isMobileMenuOpen = ref(false)
const { currentLocale, availableLocales, changeLocale, initLocale, syncLocale, t } = useI18n()

// 监听路由变化，同步语言状态
watch(() => window.$router?.currentRoute?.value?.path, () => {
    syncLocale()
}, { immediate: true })

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}

const handleLanguageChange = (event) => {
    const newLocale = event.target.value
    changeLocale(newLocale)
}

const updateMobileMenuState = () => {
    const isMobile = window.innerWidth < 768;
    // 仅在离开移动端时强制关闭，避免小屏自动展开
    if (!isMobile) {
        isMobileMenuOpen.value = false;
    }
};

onMounted(() => {
    // 初始化语言
    initLocale()

    // 同步语言状态
    syncLocale()

    // 初始化移动端菜单状态
    isMobileMenuOpen.value = false
    updateMobileMenuState()

    // 监听窗口大小变化
    window.addEventListener('resize', updateMobileMenuState)
})

onUpdated(() => {
    // 组件更新后检查移动端菜单状态
    updateMobileMenuState()
})
</script>

<style scoped>
.header {
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 9999;
    width: 100%;
    min-height: 70px;
    overflow: hidden;
    /* 防止横向滚动 */
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    max-width: 100%;
    /* 确保不超出容器 */
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    /* 防止logo被压缩 */
}

.logo-link {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #333;
    font-weight: 700;
    font-size: 20px;
}

.logo img {
    width: 30px;
    height: 30px;
}

.logo-text {
    font-size: 20px;
}

/* 桌面端导航 */
.navigation {
    display: flex;
    gap: 20px;
    /* 减少间距 */
    align-items: center;
    flex-shrink: 0;
    /* 防止导航被压缩 */
}

.nav-link {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    font-size: 14px;
    /* 稍微减小字体 */
    padding: 6px 12px;
    /* 减少内边距 */
    border-radius: 6px;
    transition: all 0.3s ease;
    white-space: nowrap;
    /* 防止文字换行 */
}

.nav-link:hover {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
}

.nav-link.active {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
    display: none;
    /* 默认隐藏，只在移动端显示 */
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* 移动端滑出菜单 */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.mobile-menu-overlay.active {
    opacity: 1;
    visibility: visible;
}

.mobile-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background: white;
    z-index: 10001;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
    right: 0;
}

.mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.mobile-menu-header h3 {
    margin: 0;
    color: #333;
    font-size: 18px;
}

.close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-btn:hover {
    color: #333;
}

.mobile-menu-links {
    padding: 20px;
}

.mobile-nav-link {
    display: block;
    text-decoration: none;
    color: #666;
    font-weight: 500;
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: color 0.3s ease;
}

.mobile-nav-link:hover {
    color: #00bcd4;
}

.mobile-nav-link.active {
    color: #00bcd4;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .desktop-nav {
        display: none !important;
    }

    .mobile-menu-btn {
        display: flex !important;
    }

    .logo-text {
        font-size: 18px;
    }

    .logo img {
        width: 28px;
        height: 28px;
    }

    /* 确保Header在移动端也能正确显示 */
    .header {
        position: sticky;
        top: 0;
        z-index: 9999;
        width: 100%;
        background: white;
    }
}

/* 确保Header在所有屏幕尺寸下都能正确显示 */
@media (min-width: 769px) {
    .mobile-menu-btn {
        display: none !important;
    }

    .desktop-nav {
        display: flex !important;
    }
}

/* 默认样式 - 确保基础布局正确 */


.language-select {
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Color Emoji', sans-serif;
    min-width: 140px;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

.language-select:hover {
    border-color: #00bcd4;
    color: #00bcd4;
}

.language-select:focus {
    outline: none;
    border-color: #00bcd4;
    box-shadow: 0 0 0 2px rgba(0, 188, 212, 0.1);
}

/* 移动端语言切换器 */
.mobile-language-selector {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;
}

.mobile-language-selector label {
    display: block;
    margin-bottom: 10px;
    color: #666;
    font-weight: 500;
    font-size: 16px;
}

.mobile-language-select {
    width: 100%;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 12px;
    font-size: 16px;
    color: #666;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Color Emoji', sans-serif;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}
</style>
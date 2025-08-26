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

                <!-- 移动端菜单按钮 -->
                <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>

                <!-- 桌面端导航 -->
                <nav class="navigation desktop-nav">
                    <router-link to="/" class="nav-link" active-class="active">Home</router-link>
                    <router-link to="/pixel-art-generator" class="nav-link" active-class="active">Image to Pixel
                        Art</router-link>
                    <router-link to="/text-to-pixel-art" class="nav-link" active-class="active">Text to Pixel
                        Art</router-link>
                    <router-link to="/wplace-extensions" class="nav-link" active-class="active">Wplace
                        Extensions</router-link>
                </nav>
            </div>
        </div>

        <!-- 移动端滑出菜单 -->
        <div class="mobile-menu-overlay" :class="{ 'active': isMobileMenuOpen }" @click="closeMobileMenu"></div>
        <nav class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
            <div class="mobile-menu-header">
                <span>Menu</span>
                <button class="close-btn" @click="closeMobileMenu">×</button>
            </div>
            <div class="mobile-menu-links">
                <router-link to="/" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">Home</router-link>
                <router-link to="/pixel-art-generator" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">Image to Pixel Art</router-link>
                <router-link to="/text-to-pixel-art" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">Text to Pixel Art</router-link>
                <router-link to="/wplace-extensions" class="mobile-nav-link" active-class="active"
                    @click="closeMobileMenu">Wplace Extensions</router-link>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    console.log('Mobile menu toggled:', isMobileMenuOpen.value)
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    console.log('Mobile menu closed')
}

onMounted(() => {
    console.log('Header component mounted')
    console.log('Screen width:', window.innerWidth)
    console.log('Desktop nav element:', document.querySelector('.desktop-nav'))
    console.log('Mobile menu btn element:', document.querySelector('.mobile-menu-btn'))
})

onUpdated(() => {
    console.log('Header component updated')
    console.log('Screen width:', window.innerWidth)
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
.desktop-nav {
    gap: 30px;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
}

.nav-link.active {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
}
</style>
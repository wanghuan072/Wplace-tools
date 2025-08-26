<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- 品牌信息区域 -->
                <div class="footer-section brand-section">
                    <div class="brand-info">
                        <div class="brand-logo">
                            <img src="/images/logo.png" alt="Wplace Tools" class="logo-icon">
                            <span class="brand-title">Wplace Tools</span>
                        </div>
                        <p class="brand-description">Professional pixel art conversion tools that transform your
                            creative ideas into stunning pixel art masterpieces with unlimited possibilities.</p>
                        <div class="social-links">
                            <a v-for="(platform, key) in socialPlatforms" :key="key" :href="platform.url"
                                target="_blank" rel="noopener" class="social-btn" :title="platform.name"
                                :style="{ '--hover-color': platform.color }">
                                <svg v-if="key === 'facebook'" width="16" height="16" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <svg v-else-if="key === 'twitter'" width="16" height="16" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <svg v-else-if="key === 'instagram'" width="16" height="16" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                                </svg>
                                <svg v-else-if="key === 'linkedin'" width="16" height="16" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 快速链接 -->
                <div class="footer-section">
                    <h4 class="footer-subtitle">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/pixel-art-generator">Image to Pixel Art</router-link></li>
                        <li><router-link to="/text-to-pixel-art">Text to Pixel Art</router-link></li>
                        <li><router-link to="/wplace-extension">Wplace Extension</router-link></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                    </ul>
                </div>

                <!-- 法律信息 -->
                <div class="footer-section">
                    <h4 class="footer-subtitle">LEGAL</h4>
                    <ul class="footer-links">
                        <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                        <li><router-link to="/terms-of-use">Terms of Use</router-link></li>
                        <li><router-link to="/copyright">Copyright</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li><a href="mailto:jasonzim904@gmail.com">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="copyright">© 2025 wplacetools.org. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
import { socialMediaConfig } from '../config/socialMedia.js'

export default {
    name: 'Footer',
    data() {
        return {
            socialPlatforms: socialMediaConfig.getActivePlatforms()
        }
    }
}
</script>

<style scoped>
.footer {
    background: #1a1a1a;
    color: white;
    padding: 60px 0 20px;
    border-top: 1px solid #333;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

.footer-section h4 {
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    color: #8b5cf6;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* 品牌区域样式 */
.brand-section {
    width: 40%;
    grid-column: 1;
}

.brand-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 5px;
}

.brand-logo img {
    width: 30px;
    height: 30px;
}

.brand-title {
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.brand-description {
    color: #ccc;
    line-height: 1.6;
    font-size: 14px;
    margin: 0;
}

.social-links {
    display: flex;
    gap: 12px;
    margin-top: 10px;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #333;
    border-radius: 6px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
    border: 1px solid #444;
}

.social-btn:hover {
    background: var(--hover-color, #00bcd4);
    border-color: var(--hover-color, #00bcd4);
    transform: translateY(-2px);
}

/* 链接列表样式 */
.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 15px;
}

.footer-links a {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
    line-height: 1.4;
}

.footer-links a:hover {
    color: #00bcd4;
}

/* 底部版权区域 */
.footer-bottom {
    border-top: 1px solid #333;
    padding-top: 20px;
    text-align: center;
}

.copyright {
    color: #999;
    font-size: 14px;
    margin: 0;
}

@media (max-width: 768px) {
    .footer {
        padding: 20px 0;
    }

    .brand-title {
        font-size: 18px;
    }

    .brand-description {
        font-size: 12px;
    }

    .footer-section h4 {
        margin-bottom: 10px;
    }

    .footer-links li {
        font-size: 12px;
        margin-bottom: 5px;
    }

    .brand-info {
        gap: 10px;
    }

    .footer-content {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 0;
    }

    .footer-section {
        width: 100%;
    }

    .footer-bottom {
        padding-top: 10px;
    }
}
</style>

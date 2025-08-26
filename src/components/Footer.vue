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
                            <a href="#" class="social-btn" title="Facebook">
                                <span>f</span>
                            </a>
                            <a href="#" class="social-btn" title="Twitter">
                                <span>🐦</span>
                            </a>
                            <a href="#" class="social-btn" title="Instagram">
                                <span>📷</span>
                            </a>
                            <a href="#" class="social-btn" title="Share">
                                <span>📤</span>
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
                        <li><router-link to="/wplace-extensions">Wplace Extensions</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
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
                        <li><a href="mailto:kadiyamobi89@gmail.com">Contact Us</a></li>
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
export default {
    name: 'Footer'
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
    background: #00bcd4;
    border-color: #00bcd4;
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

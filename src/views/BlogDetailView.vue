<template>
    <div class="blog-detail-view">
        <div v-if="blog" class="blog-detail-container">
            <!-- 博客头部信息 - Hero Section -->
            <section class="blog-hero-section">
                <div class="hero-background">
                    <img :src="blog.imageUrl" :alt="blog.imageAlt" class="hero-bg-image">
                    <div class="hero-overlay"></div>
                </div>
                <div class="container">
                    <div class="blog-hero-content">
                        <div class="blog-meta">
                            <span class="publish-date">{{ formatDate(blog.publishDate) }}</span>
                        </div>
                        <h1 class="blog-title">{{ blog.title }}</h1>
                        <p class="blog-description">{{ blog.description }}</p>
                    </div>
                </div>
            </section>

            <!-- 博客内容 -->
            <section class="blog-content-section">
                <div class="container">
                    <div class="blog-content-wrapper">
                        <article class="blog-article">
                            <div v-html="blog.detailsHtml" class="blog-content-html"></div>
                        </article>

                        <!-- 相关链接 -->
                        <div class="blog-actions">
                            <router-link to="/blog" class="back-to-blog-btn">
                                <span class="arrow">←</span>
                                {{ t('backToBlog') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- 404 页面 -->
        <div v-else class="blog-not-found">
            <div class="container">
                <div class="not-found-content">
                    <h1>{{ t('blogPostNotFound') }}</h1>
                    <p>{{ t('blogPostNotFoundDesc') }}</p>
                    <router-link to="/blog" class="back-to-blog-btn">
                        {{ t('backToBlog') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBlogByAddressBar } from '@/data/blogDataManager.js'
import { useI18n } from '@/composables/useI18n'

export default {
    name: 'BlogDetailView',
    setup() {
        const { currentLocale, t } = useI18n()
        return { currentLocale, t }
    },
    data() {
        return {
            blog: null
        }
    },
    mounted() {
        this.loadBlog()
        // 定期检查语言变化
        this.localeCheckInterval = setInterval(this.checkLocaleChange, 500)
    },
    beforeUnmount() {
        if (this.localeCheckInterval) {
            clearInterval(this.localeCheckInterval)
        }
    },
    watch: {
        '$route'(to, from) {
            if (to.params.addressBar !== from.params.addressBar) {
                this.loadBlog()
            }
        }
    },
    methods: {
        loadBlog() {
            const addressBar = this.$route.params.addressBar
            const locale = localStorage.getItem('locale') || 'en'
            console.log('Loading blog for locale:', locale, 'addressBar:', addressBar)
            const blog = getBlogByAddressBar(addressBar, locale)
            console.log('Blog loaded:', blog ? blog.title : 'Not found')
            this.blog = blog
        },
        checkLocaleChange() {
            const savedLocale = localStorage.getItem('locale') || 'en'
            if (savedLocale !== this.currentLocale) {
                this.currentLocale = savedLocale
                this.loadBlog()
            }
        },
        formatDate(dateString) {
            const date = new Date(dateString)
            const locale = this.currentLocale || 'en'
            return date.toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    }
}
</script>

<style scoped>
.blog-detail-view {
    background: #f8f9fa;
    min-height: 100vh;
    color: #333;
}

.blog-detail-container {
    background: #f8f9fa;
}

/* 博客头部区域 - Hero Section */
.blog-hero-section {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.hero-bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
}

.blog-hero-content {
    position: relative;
    z-index: 3;
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 20px;
    text-align: left;
}

.blog-meta {
    margin-bottom: 30px;
}

.publish-date {
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.blog-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 25px;
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.blog-description {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    max-width: 600px;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
}

/* 博客内容区域 */
.blog-content-section {
    padding: 80px 0;
    background: #f8f9fa;
}

.blog-content-wrapper {
    max-width: 800px;
    margin: 0 auto;
}

.blog-article {
    background: white;
    border-radius: 16px;
    padding: 60px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    border: 1px solid #e9ecef;
}

/* 博客内容HTML样式 */
.blog-content-html {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.blog-content-html img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
}

.blog-content-html blockquote {
    border-left: 4px solid #00bcd4;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: #666;
}

.blog-content-html code {
    background: #f8f9fa;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
}

.blog-content-html pre {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 20px 0;
}

.blog-content-html pre code {
    background: none;
    padding: 0;
}

.blog-content-html h2 {
    font-size: 32px;
    font-weight: 700;
    color: #333;
    margin: 40px 0 20px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 10px;
}

.blog-content-html h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
}

.blog-content-html p {
    margin-bottom: 20px;
    color: #555;
}

.blog-content-html ul {
    margin: 20px 0;
    padding-left: 20px;
}

.blog-content-html li {
    margin-bottom: 10px;
    color: #555;
}

.blog-content-html strong {
    color: #333;
    font-weight: 600;
}

/* 博客操作区域 */
.blog-actions {
    text-align: center;
    padding: 40px 0;
}

.back-to-blog-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);
    border: none;
}

.back-to-blog-btn:hover {
    background: linear-gradient(135deg, #0097a7 0%, #00695c 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 188, 212, 0.4);
}

.arrow {
    font-size: 18px;
    transition: transform 0.3s ease;
}

.back-to-blog-btn:hover .arrow {
    transform: translateX(-3px);
}

/* 404 页面 */
.blog-not-found {
    background: white;
    padding: 120px 0;
    text-align: center;
    color: #333;
}

.not-found-content h1 {
    font-size: 48px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
}

.not-found-content p {
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .blog-hero-section {
        min-height: 400px;
    }

    .blog-hero-content {
        padding: 60px 20px;
    }

    .blog-content-section {
        padding: 60px 0;
    }

    .blog-article {
        padding: 40px 30px;
    }

    .blog-title {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .blog-description {
        font-size: 16px;
    }

    .blog-content-html h2 {
        font-size: 28px;
        margin: 30px 0 15px 0;
    }

    .blog-content-html h3 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .blog-content-html {
        font-size: 15px;
    }

    .blog-content-html p {
        margin-bottom: 15px;
    }

    .blog-content-html ul {
        margin: 15px 0;
    }

    .blog-content-html li {
        margin-bottom: 8px;
    }
}

@media (max-width: 768px) {
    .blog-hero-section {
        min-height: 350px;
    }

    .blog-hero-content {
        padding: 40px 20px;
    }

    .blog-content-section {
        padding: 40px 0;
    }

    .blog-article {
        padding: 20px 15px;
    }

    .blog-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .blog-description {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .blog-meta {
        margin-bottom: 10px;
    }

    .publish-date {
        font-size: 12px;
        padding: 6px 12px;
    }

    .blog-content-html h2 {
        font-size: 16px;
        margin: 15px 0 10px 0;
    }

    .blog-content-html h3 {
        font-size: 14px;
        margin: 12px 0 8px 0;
    }

    .blog-content-html {
        font-size: 12px;
        line-height: 1.6;
    }

    .blog-content-html p {
        margin-bottom: 10px;
    }

    .blog-content-html ul {
        margin: 10px 0;
        padding-left: 15px;
    }

    .blog-content-html li {
        margin-bottom: 6px;
    }

    .blog-content-html img {
        margin: 15px 0;
        border-radius: 6px;
    }

    .blog-content-html blockquote {
        padding-left: 15px;
        margin: 15px 0;
    }

    .blog-content-html code {
        padding: 1px 4px;
        font-size: 12px;
    }

    .blog-content-html pre {
        padding: 10px;
        margin: 15px 0;
    }

    .back-to-blog-btn {
        padding: 10px 20px;
        font-size: 14px;
    }

    .not-found-content h1 {
        font-size: 28px;
        margin-bottom: 15px;
    }

    .not-found-content p {
        font-size: 14px;
        margin-bottom: 30px;
    }
}
</style>
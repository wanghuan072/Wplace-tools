<template>
    <div class="blog-view">
        <section class="blog-hero-section">
            <div class="container">
                <div class="blog-hero-content">
                    <h1 class="page-title">{{ t('wplaceToolsBlog') }}</h1>
                    <p class="page-subtitle">{{ t('blogSubtitle') }}</p>
                </div>
            </div>
        </section>

        <section class="blog-list-section">
            <div class="container">
                <div class="blog-list-content">
                    <div class="blog-grid">
                        <article v-for="blog in blogData" :key="blog.id" class="blog-card">
                            <div class="blog-image">
                                <img :src="blog.imageUrl" :alt="blog.imageAlt" class="blog-img">
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <span class="publish-date">{{ formatDate(blog.publishDate) }}</span>
                                </div>
                                <h2 class="blog-title">
                                    <router-link :to="`/blog/${blog.addressBar}`" class="blog-link">
                                        {{ blog.title }}
                                    </router-link>
                                </h2>
                                <p class="blog-description">{{ blog.description }}</p>
                                <router-link :to="`/blog/${blog.addressBar}`" class="read-more-btn">
                                    {{ t('readMore') }}
                                    <span class="arrow">→</span>
                                </router-link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { getBlogData } from '@/data/blogDataManager.js'
import { useI18n } from '@/composables/useI18n'
import { computed, watch, ref, onMounted } from 'vue'

const { t, currentLocale } = useI18n()

// 使用ref来存储博客数据
const blogData = ref([])

// 加载博客数据的函数
const loadBlogData = () => {
    // 直接从localStorage获取当前语言
    const savedLocale = localStorage.getItem('locale') || 'en'
    console.log('Loading blog data for locale:', savedLocale)
    const data = getBlogData(savedLocale)
    console.log('Blog data loaded:', data.length, 'items')
    blogData.value = data
}

// 组件挂载时加载数据
onMounted(() => {
    loadBlogData()
})

// 监听localStorage变化（语言切换时会更新localStorage）
const checkLocaleChange = () => {
    const savedLocale = localStorage.getItem('locale') || 'en'
    if (savedLocale !== currentLocale.value) {
        currentLocale.value = savedLocale
        loadBlogData()
    }
}

// 定期检查语言变化
setInterval(checkLocaleChange, 500)

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = currentLocale.value || 'en'
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
</script>

<style scoped>
.blog-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.blog-hero-section {
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
}

.blog-hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.page-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
}

.page-subtitle {
    font-size: 20px;
    opacity: 0.9;
    line-height: 1.6;
}

.blog-list-section {
    background: white;
    padding: 80px 0;
}

.blog-list-content {
    max-width: 1200px;
    margin: 0 auto;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.blog-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e9ecef;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.blog-image {
    overflow: hidden;
    aspect-ratio: 5/3;
}

.blog-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.blog-card:hover .blog-img {
    transform: scale(1.05);
}

.blog-content {
    padding: 20px;
}

.blog-meta {
    margin-bottom: 15px;
}

.publish-date {
    color: #666;
    font-size: 14px;
    font-weight: 500;
}

.blog-title {
    margin-bottom: 15px;
    line-height: 1.2;
}

.blog-title a {
    color: #333;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    transition: color 0.3s ease;
}

.blog-title a:hover {
    color: #00bcd4;
}

.blog-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 25px;
    font-size: 16px;
}

.read-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #00bcd4;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
}

.read-more-btn:hover {
    color: #0097a7;
    transform: translateX(5px);
}

.arrow {
    font-size: 18px;
    transition: transform 0.3s ease;
}

.read-more-btn:hover .arrow {
    transform: translateX(3px);
}

/* 响应式设计 */
@media (max-width: 1024px) {

    .blog-hero-section,
    .blog-list-section {
        padding: 60px 0;
    }

    .page-title {
        font-size: 36px;
    }

    .page-subtitle {
        font-size: 18px;
    }

    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    .blog-content {
        padding: 25px;
    }

    .blog-title a {
        font-size: 20px;
    }
}

@media (max-width: 768px) {

    .blog-hero-section,
    .blog-list-section {
        padding: 40px 0;
    }

    .page-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .page-subtitle {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .blog-content {
        padding: 10px;
    }

    .blog-title a {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .blog-description {
        font-size: 12px;
    }

    .read-more-btn {
        font-size: 12px;
    }

    .blog-meta {
        margin-bottom: 0
    }


    .publish-date {
        font-size: 12px;
        padding: 0;
        line-height: 1.5;
        display: block;
    }

    .blog-image {
        margin-bottom: 0;
    }

    .blog-img {
        border-radius: 8px;
    }

    .blog-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .blog-description {
        font-size: 12px;
    }
}
</style>

<template>
    <div class="wplace-live-view">
        <!-- Banner 区域 -->
        <section class="banner-section">
            <div class="container">
                <div class="banner-content">
                    <div class="top-hint">
                        <span>{{ t('wplaceLivePage.officialPlatform') }}</span>
                    </div>

                    <h1 class="main-title">
                        {{ t('wplaceLivePage.title') }}
                    </h1>

                    <div class="description-text">
                        <p>{{ t('wplaceLivePage.description') }}</p>
                        <p>{{ t('wplaceLivePage.subtitle') }}</p>
                    </div>

                    <div class="feature-buttons">
                        <a href="https://wplace.live" target="_blank" rel="noopener" class="feature-btn primary">
                            <span class="btn-icon">🎨</span>
                            {{ t('wplaceLivePage.visitWplaceLive') }}
                        </a>
                        <a href="#video" @click.prevent="scrollToSection('video')" class="feature-btn secondary">
                            <span class="btn-icon">📺</span>
                            {{ t('wplaceLivePage.watchDemo') }}
                        </a>
                        <a href="#features" @click.prevent="scrollToSection('features')" class="feature-btn secondary">
                            <span class="btn-icon">✨</span>
                            {{ t('wplaceLivePage.exploreFeatures') }}
                        </a>
                    </div>

                    <div class="bottom-hint">
                        <span class="hint-icon">🌟</span>
                        {{ t('wplaceLivePage.bottomHint') }}
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Section -->
        <section id="video" class="video-section">
            <div class="container">
                <div class="video-content">
                    <h2 class="section-title">{{ t('wplaceLivePage.videoTitle') }}</h2>
                    <p class="section-subtitle">{{ t('wplaceLivePage.videoSubtitle') }}</p>

                    <div class="video-wrapper" @click="loadVideo" :class="{ 'video-loaded': videoLoaded }">
                        <div v-if="!videoLoaded" class="video-overlay">
                            <img src="" alt=" WPlace Live Demo Thumbnail" class="video-thumbnail-image">
                            <div class="play-button">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                    <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
                                    <path d="M32 25L32 55L55 40L32 25Z" fill="#8B5CF6" />
                                </svg>
                            </div>
                        </div>

                        <iframe v-if="videoLoaded" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="WPlace Live Demo Video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen class="demo-video">
                        </iframe>
                    </div>

                    <div class="video-description">
                        <p>{{ t('wplaceLivePage.videoDescription') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="features-section">
            <div class="container">
                <div class="features-content">
                    <h2 class="section-title">{{ t('wplaceLivePage.featuresTitle') }}</h2>
                    <p class="section-subtitle">{{ t('wplaceLivePage.featuresSubtitle') }}</p>

                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🎨</div>
                            <h3>{{ t('wplaceLivePage.collaborativeCanvas') }}</h3>
                            <p>{{ t('wplaceLivePage.collaborativeCanvasDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">⚡</div>
                            <h3>{{ t('wplaceLivePage.realTimeCollaboration') }}</h3>
                            <p>{{ t('wplaceLivePage.realTimeCollaborationDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">🌈</div>
                            <h3>{{ t('wplaceLivePage.colorPalette') }}</h3>
                            <p>{{ t('wplaceLivePage.colorPaletteDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">👥</div>
                            <h3>{{ t('wplaceLivePage.communityDriven') }}</h3>
                            <p>{{ t('wplaceLivePage.communityDrivenDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">🔧</div>
                            <h3>{{ t('wplaceLivePage.toolIntegration') }}</h3>
                            <p>{{ t('wplaceLivePage.toolIntegrationDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">📱</div>
                            <h3>{{ t('wplaceLivePage.crossPlatform') }}</h3>
                            <p>{{ t('wplaceLivePage.crossPlatformDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">🎭</div>
                            <h3>{{ t('wplaceLivePage.artisticFreedom') }}</h3>
                            <p>{{ t('wplaceLivePage.artisticFreedomDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">🌍</div>
                            <h3>{{ t('wplaceLivePage.globalCanvas') }}</h3>
                            <p>{{ t('wplaceLivePage.globalCanvasDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">⚡</div>
                            <h3>{{ t('wplaceLivePage.instantUpdates') }}</h3>
                            <p>{{ t('wplaceLivePage.instantUpdatesDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Community Highlights Section -->
        <section class="community-section">
            <div class="container">
                <div class="community-content">
                    <h2 class="section-title">{{ t('wplaceLivePage.communityTitle') }}</h2>
                    <p class="section-subtitle">{{ t('wplaceLivePage.communitySubtitle') }}</p>

                    <div class="community-stats">
                        <div class="stat-item">
                            <div class="stat-number">{{ t('wplaceLivePage.activeUsers') }}</div>
                            <div class="stat-label">{{ t('wplaceLivePage.activeUsersLabel') }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">{{ t('wplaceLivePage.pixelsPlaced') }}</div>
                            <div class="stat-label">{{ t('wplaceLivePage.pixelsPlacedLabel') }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">{{ t('wplaceLivePage.artworksCreated') }}</div>
                            <div class="stat-label">{{ t('wplaceLivePage.artworksCreatedLabel') }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">{{ t('wplaceLivePage.countriesJoined') }}</div>
                            <div class="stat-label">{{ t('wplaceLivePage.countriesJoinedLabel') }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">{{ t('wplaceLivePage.dailyContributions') }}</div>
                            <div class="stat-label">{{ t('wplaceLivePage.dailyContributionsLabel') }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">{{ t('wplaceLivePage.totalSessions') }}</div>
                            <div class="stat-label">{{ t('wplaceLivePage.totalSessionsLabel') }}</div>
                        </div>
                    </div>

                    <div class="community-description">
                        <p>{{ t('wplaceLivePage.communityDescription') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About WPlace Live Section -->
        <section class="about-section">
            <div class="container">
                <div class="about-content">
                    <h2 class="section-title">{{ t('wplaceLivePage.aboutTitle') }}</h2>

                    <div class="about-grid">
                        <div class="about-column">
                            <h3>{{ t('wplaceLivePage.platformOverview') }}</h3>
                            <p>{{ t('wplaceLivePage.platformOverviewDesc') }}</p>
                        </div>

                        <div class="about-column">
                            <h3>{{ t('wplaceLivePage.technologyStack') }}</h3>
                            <p>{{ t('wplaceLivePage.technologyStackDesc') }}</p>
                        </div>
                    </div>

                    <div class="about-grid">
                        <div class="about-column">
                            <h3>{{ t('wplaceLivePage.communityGuidelines') }}</h3>
                            <p>{{ t('wplaceLivePage.communityGuidelinesDesc') }}</p>
                        </div>

                        <div class="about-column">
                            <h3>{{ t('wplaceLivePage.futureVision') }}</h3>
                            <p>{{ t('wplaceLivePage.futureVisionDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-content">
                    <h2 class="section-title">{{ t('wplaceLivePage.faqTitle') }}</h2>
                    <p class="section-subtitle">{{ t('wplaceLivePage.faqSubtitle') }}</p>

                    <div class="faq-grid">
                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqWhatIs') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqWhatIsAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqHowToJoin') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqHowToJoinAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqCanvasSize') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqCanvasSizeAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqPixelCooldown') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqPixelCooldownAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqMobileSupport') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqMobileSupportAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqToolsIntegration') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqToolsIntegrationAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqCommunityRules') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqCommunityRulesAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqDataPersistence') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqDataPersistenceAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceLivePage.faqCollaborationTips') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceLivePage.faqCollaborationTipsAnswer') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const videoLoaded = ref(false)

const loadVideo = () => {
    videoLoaded.value = true
}

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
.wplace-live-view {
    background: #f8f9fa;
    min-height: 100vh;
}

/* Banner Section */
.banner-section {
    background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
}

.banner-content {
    max-width: 1000px;
    margin: 0 auto;
}

.top-hint {
    background: rgba(255, 255, 255, 0.2);
    display: inline-block;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 14px;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
}

.main-title {
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 1.2;
}

.description-text {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.feature-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

.feature-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.feature-btn.primary {
    background: white;
    color: #6c5ce7;
}

.feature-btn.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
}

.feature-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-icon {
    font-size: 18px;
}

.bottom-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    opacity: 0.9;
}

.hint-icon {
    font-size: 20px;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Video Section */
.video-section {
    background: white;
    padding: 80px 0;
}

.video-content {
    text-align: center;
}

.section-title {
    font-size: 42px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
}

.section-subtitle {
    font-size: 20px;
    color: #666;
    margin-bottom: 60px;
    line-height: 1.6;
}

.video-wrapper {
    max-width: 800px;
    margin: 0 auto 40px auto;
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 aspect ratio */
    height: 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: transform 0.3s ease;
}

.video-wrapper:hover {
    transform: translateY(-5px);
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.video-thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.play-button {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.video-wrapper:hover .play-button {
    transform: scale(1.1);
}

.demo-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-description {
    max-width: 600px;
    margin: 0 auto;
    color: #666;
    line-height: 1.6;
}

/* Features Section */
.features-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background: white;
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: #6c5ce7;
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
}

.feature-card p {
    color: #666;
    line-height: 1.6;
}

/* How It Works Section */
.how-it-works-section {
    background: white;
    padding: 80px 0;
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.step-card {
    text-align: center;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 16px;
    transition: all 0.3s ease;
}

.step-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
}

.step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: #6c5ce7;
    color: white;
    border-radius: 50%;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
}

.step-card h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
}

.step-card p {
    color: #666;
    line-height: 1.6;
}

/* Community Section */
.community-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.community-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 40px 0;
}

.stat-item {
    text-align: center;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.stat-number {
    font-size: 36px;
    font-weight: 700;
    color: #6c5ce7;
    margin-bottom: 10px;
}

.stat-label {
    font-size: 16px;
    color: #666;
    font-weight: 500;
}

.community-description {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: #666;
    line-height: 1.6;
}

/* Getting Started Section */
.getting-started-section {
    background: white;
    padding: 80px 0;
}

.getting-started-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.guide-card {
    background: #f8f9fa;
    border-radius: 16px;
    padding: 30px;
    transition: all 0.3s ease;
}

.guide-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
}

.guide-icon {
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
}

.guide-card h3 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
    text-align: center;
}

.guide-card p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: center;
}

.guide-steps {
    list-style: none;
    padding: 0;
    margin: 0;
}

.guide-steps li {
    padding: 8px 0;
    color: #555;
    position: relative;
    padding-left: 20px;
}

.guide-steps li:before {
    content: '✓';
    color: #6c5ce7;
    font-weight: bold;
    position: absolute;
    left: 0;
}

/* About Section */
.about-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.about-column h3 {
    font-size: 24px;
    font-weight: 600;
    color: #6c5ce7;
    margin-bottom: 20px;
}

.about-column p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* FAQ Section */
.faq-section {
    background: white;
    padding: 80px 0;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.faq-item {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 30px;
    transition: all 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: #6c5ce7;
}

.faq-question {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 0 0 20px 0;
    line-height: 1.4;
}

.faq-answer {
    margin: 0;
}

.faq-answer p {
    color: #666;
    line-height: 1.6;
    margin: 0;
}

/* Tips Section */
.tips-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.tip-card {
    background: white;
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.tip-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.tip-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.tip-card h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 12px;
    font-weight: 600;
}

.tip-card p {
    color: #666;
    line-height: 1.5;
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-title {
        font-size: 36px;
    }

    .description-text {
        font-size: 18px;
    }

    .feature-buttons {
        flex-direction: column;
        align-items: center;
    }

    .section-title {
        font-size: 32px;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .features-grid,
    .faq-grid {
        grid-template-columns: 1fr;
    }

    .community-stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .banner-section {
        padding: 60px 0;
    }

    .main-title {
        font-size: 28px;
    }

    .section-title {
        font-size: 28px;
    }

    .video-section,
    .features-section,
    .community-section,
    .about-section,
    .faq-section {
        padding: 60px 0;
    }

    .community-stats {
        grid-template-columns: 1fr;
    }

    .container {
        padding: 0 15px;
    }
}
</style>

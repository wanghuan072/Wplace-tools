<template>
    <div class="copyright-view">
        <section class="copyright-section">
            <div class="container">
                <div class="copyright-content">
                    <h1 class="page-title">{{ t('copyrightTitle') }}</h1>
                    <p class="last-updated">{{ t('copyrightLastUpdated') }}</p>

                    <div class="copyright-content-text">
                        <h2>{{ t('copyrightNoticeTitle') }}</h2>
                        <p>{{ t('copyrightNoticeDesc') }}</p>

                        <h2>{{ t('copyrightSection1Title') }}</h2>
                        <p>{{ t('copyrightSection1Desc') }}</p>

                        <h2>{{ t('copyrightSection2Title') }}</h2>
                        <p>{{ t('copyrightSection2Desc') }}</p>
                        <ul>
                            <li>{{ t('copyrightSection2Item1') }}</li>
                            <li>{{ t('copyrightSection2Item2') }}</li>
                            <li>{{ t('copyrightSection2Item3') }}</li>
                            <li>{{ t('copyrightSection2Item4') }}</li>
                        </ul>

                        <h2>{{ t('copyrightSection3Title') }}</h2>
                        <p>{{ t('copyrightSection3Desc') }}</p>
                        <ul>
                            <li>{{ t('copyrightSection3Item1') }}</li>
                            <li>{{ t('copyrightSection3Item2') }}</li>
                            <li>{{ t('copyrightSection3Item3') }}</li>
                            <li>{{ t('copyrightSection3Item4') }}</li>
                        </ul>

                        <h2>{{ t('copyrightSection4Title') }}</h2>
                        <p>{{ t('copyrightSection4Desc') }}</p>

                        <h2>{{ t('copyrightSection5Title') }}</h2>
                        <p>{{ t('copyrightSection5Desc') }}</p>
                        <ul>
                            <li>{{ t('copyrightSection5Item1') }}</li>
                            <li>{{ t('copyrightSection5Item2') }}</li>
                            <li>{{ t('copyrightSection5Item3') }}</li>
                            <li>{{ t('copyrightSection5Item4') }}</li>
                        </ul>

                        <h2>{{ t('copyrightSection6Title') }}</h2>
                        <p>{{ t('copyrightSection6Desc') }}</p>
                        <ul>
                            <li>{{ t('copyrightSection6Item1') }}</li>
                            <li>{{ t('copyrightSection6Item2') }}</li>
                            <li>{{ t('copyrightSection6Item3') }}</li>
                        </ul>

                        <h2>{{ t('copyrightSection7Title') }}</h2>
                        <p>{{ t('copyrightSection7Desc') }}</p>
                        <p><strong>{{ t('copyrightSection7Email') }}</strong> jasonzim904@gmail.com</p>
                        <p><strong>{{ t('copyrightSection7Date') }}</strong> August 22, 2025</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.copyright-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.copyright-section {
    background: white;
    padding: 60px 0;
}

.copyright-content {
    max-width: 800px;
    margin: 0 auto;
}

.page-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.last-updated {
    text-align: center;
    color: #666;
    font-size: 16px;
    margin-bottom: 40px;
    font-style: italic;
}

.copyright-content-text h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 8px;
}

.copyright-content-text p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
}

.copyright-content-text ul {
    margin: 15px 0 20px 20px;
}

.copyright-content-text li {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 8px;
}

.copyright-content-text strong {
    color: #333;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .copyright-section {
        padding: 50px 0;
    }

    .page-title {
        font-size: 32px;
    }

    .copyright-content-text h2 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .copyright-content-text p,
    .copyright-content-text li {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .copyright-section {
        padding: 40px 0;
    }

    .page-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .last-updated {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .copyright-content-text h2 {
        font-size: 16px;
        margin: 10px 0 10px 0;
    }

    .copyright-content-text p,
    .copyright-content-text li {
        font-size: 12px;
        line-height: 1.5;
    }

    .copyright-content {
        padding: 0 10px;
    }
}
</style>

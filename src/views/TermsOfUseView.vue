<template>
    <div class="terms-of-use-view">
        <section class="terms-section">
            <div class="container">
                <div class="terms-content">
                    <h1 class="page-title">{{ t('termsOfUseTitle') }}</h1>
                    <p class="last-updated">{{ t('termsOfUseLastUpdated') }}</p>

                    <div class="terms-content-text">
                        <h2>{{ t('termsOfUseSection1Title') }}</h2>
                        <p>{{ t('termsOfUseSection1Desc') }}</p>

                        <h2>{{ t('termsOfUseSection2Title') }}</h2>
                        <p>{{ t('termsOfUseSection2Desc') }}</p>
                        <ul>
                            <li>{{ t('termsOfUseSection2Item1') }}</li>
                            <li>{{ t('termsOfUseSection2Item2') }}</li>
                            <li>{{ t('termsOfUseSection2Item3') }}</li>
                            <li>{{ t('termsOfUseSection2Item4') }}</li>
                        </ul>

                        <h2>{{ t('termsOfUseSection3Title') }}</h2>
                        <p>{{ t('termsOfUseSection3Desc') }}</p>
                        <ul>
                            <li>{{ t('termsOfUseSection3Item1') }}</li>
                            <li>{{ t('termsOfUseSection3Item2') }}</li>
                            <li>{{ t('termsOfUseSection3Item3') }}</li>
                            <li>{{ t('termsOfUseSection3Item4') }}</li>
                        </ul>

                        <h2>{{ t('termsOfUseSection4Title') }}</h2>
                        <p>{{ t('termsOfUseSection4Desc') }}</p>

                        <h2>{{ t('termsOfUseSection5Title') }}</h2>
                        <p>{{ t('termsOfUseSection5Desc') }}</p>

                        <h2>{{ t('termsOfUseSection6Title') }}</h2>
                        <p>{{ t('termsOfUseSection6Desc') }}</p>

                        <h2>{{ t('termsOfUseSection7Title') }}</h2>
                        <p>{{ t('termsOfUseSection7Desc') }}</p>

                        <h2>{{ t('termsOfUseSection8Title') }}</h2>
                        <p>{{ t('termsOfUseSection8Desc') }}</p>

                        <h2>{{ t('termsOfUseSection9Title') }}</h2>
                        <p>{{ t('termsOfUseSection9Desc') }}</p>

                        <h2>{{ t('termsOfUseSection10Title') }}</h2>
                        <p>{{ t('termsOfUseSection10Desc') }}</p>
                        <p><strong>{{ t('termsOfUseSection10Email') }}</strong> jasonzim904@gmail.com</p>
                        <p><strong>{{ t('termsOfUseSection10Date') }}</strong> August 22, 2025</p>
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
.terms-of-use-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.terms-section {
    background: white;
    padding: 60px 0;
}

.terms-content {
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

.terms-content-text h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 8px;
}

.terms-content-text p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
}

.terms-content-text ul {
    margin: 15px 0 20px 20px;
}

.terms-content-text li {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 8px;
}

.terms-content-text strong {
    color: #333;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .terms-section {
        padding: 50px 0;
    }

    .page-title {
        font-size: 32px;
    }

    .terms-content-text h2 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .terms-content-text p,
    .terms-content-text li {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .terms-section {
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

    .terms-content-text h2 {
        font-size: 16px;
        margin: 10px 0 10px 0;
    }

    .terms-content-text p,
    .terms-content-text li {
        font-size: 12px;
        line-height: 1.5;
    }

    .terms-content {
        padding: 0 10px;
    }
}
</style>

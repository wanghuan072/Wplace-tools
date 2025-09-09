<template>
    <div class="privacy-policy-view">
        <section class="policy-section">
            <div class="container">
                <div class="policy-content">
                    <h1 class="page-title">{{ t('privacyPolicyTitle') }}</h1>
                    <p class="last-updated">{{ t('privacyPolicyLastUpdated') }}</p>

                    <div class="policy-content-text">
                        <h2>{{ t('privacyPolicySection1Title') }}</h2>
                        <p>{{ t('privacyPolicySection1Desc') }}</p>
                        <ul>
                            <li>{{ t('privacyPolicySection1Item1') }}</li>
                            <li>{{ t('privacyPolicySection1Item2') }}</li>
                            <li>{{ t('privacyPolicySection1Item3') }}</li>
                        </ul>

                        <h2>{{ t('privacyPolicySection2Title') }}</h2>
                        <p>{{ t('privacyPolicySection2Desc') }}</p>
                        <ul>
                            <li>{{ t('privacyPolicySection2Item1') }}</li>
                            <li>{{ t('privacyPolicySection2Item2') }}</li>
                            <li>{{ t('privacyPolicySection2Item3') }}</li>
                            <li>{{ t('privacyPolicySection2Item4') }}</li>
                        </ul>

                        <h2>{{ t('privacyPolicySection3Title') }}</h2>
                        <p>{{ t('privacyPolicySection3Desc') }}</p>

                        <h2>{{ t('privacyPolicySection4Title') }}</h2>
                        <p>{{ t('privacyPolicySection4Desc') }}</p>

                        <h2>{{ t('privacyPolicySection5Title') }}</h2>
                        <p>{{ t('privacyPolicySection5Desc') }}</p>

                        <h2>{{ t('privacyPolicySection6Title') }}</h2>
                        <p>{{ t('privacyPolicySection6Desc') }}</p>

                        <h2>{{ t('privacyPolicySection7Title') }}</h2>
                        <p>{{ t('privacyPolicySection7Desc') }}</p>

                        <h2>{{ t('privacyPolicySection8Title') }}</h2>
                        <p>{{ t('privacyPolicySection8Desc') }}</p>

                        <h2>{{ t('privacyPolicySection9Title') }}</h2>
                        <p>{{ t('privacyPolicySection9Desc') }}</p>
                        <p><strong>{{ t('privacyPolicySection9Email') }}</strong> jasonzim904@gmail.com</p>
                        <p><strong>{{ t('privacyPolicySection9Date') }}</strong> August 22, 2025</p>
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
.privacy-policy-view {
    background: #f8f9fa;
    min-height: 100vh;
}

.policy-section {
    background: white;
    padding: 60px 0;
}

.policy-content {
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

.policy-content-text h2 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 8px;
}

.policy-content-text p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
}

.policy-content-text ul {
    margin: 15px 0 20px 20px;
}

.policy-content-text li {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 8px;
}

.policy-content-text strong {
    color: #333;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .policy-section {
        padding: 50px 0;
    }

    .page-title {
        font-size: 32px;
    }

    .policy-content-text h2 {
        font-size: 22px;
        margin: 25px 0 12px 0;
    }

    .policy-content-text p,
    .policy-content-text li {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .policy-section {
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

    .policy-content-text h2 {
        font-size: 16px;
        margin: 10px 0 10px 0;
    }

    .policy-content-text p,
    .policy-content-text li {
        font-size: 12px;
        line-height: 1.5;
    }

    .policy-content {
        padding: 0 10px;
    }
}
</style>

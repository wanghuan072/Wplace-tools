<template>
    <div class="wplace-bot-view">
        <!-- Banner 区域 -->
        <section class="banner-section">
            <div class="container">
                <div class="banner-content">
                    <div class="top-hint">
                        <span>{{ t('wplaceBotPage.officialGuide') }}</span>
                    </div>

                    <h1 class="main-title">
                        {{ t('wplaceBotPage.title') }}
                    </h1>

                    <div class="description-text">
                        <p>{{ t('wplaceBotPage.description') }}</p>
                    </div>

                    <div class="bottom-hint">
                        <span class="hint-icon">⚡</span>
                        {{ t('wplaceBotPage.bottomHint') }}
                    </div>
                </div>
            </div>
        </section>

        <!-- 选项卡导航 -->
        <section class="tabs-navigation">
            <div class="container">
                <div class="tabs-wrapper">
                    <button v-for="tab in navigationTabs" :key="tab.id" @click="activeTab = tab.id"
                        :class="['tab-button', { 'active': activeTab === tab.id }]">
                        <span class="tab-icon">{{ tab.icon }}</span>
                        <span class="tab-text">{{ tab.shortLabel }}</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- 选项卡内容 -->
        <section class="tab-content">
            <div class="container">

                <!-- Quick Start Tab -->
                <div v-if="activeTab === 'preparation'" class="tab-panel">
                    <div class="container">
                        <h2 class="section-title">{{ t('wplaceBotPage.quickStartTitle') }}</h2>
                        <p class="section-intro">{{ t('wplaceBotPage.quickStartIntro') }}</p>

                        <h3 class="step-title">{{ t('wplaceBotPage.step1Preparation') }}</h3>
                        <p class="step-description">{{ t('wplaceBotPage.step1Description') }}</p>

                        <ol class="step-list">
                            <li>{{ t('wplaceBotPage.openWplaceLiveStep') }}</li>
                            <li>{{ t('wplaceBotPage.pressF12Step') }}</li>
                            <li>{{ t('wplaceBotPage.clickConsoleStep') }}</li>
                        </ol>

                        <h3 class="step-title">{{ t('wplaceBotPage.step2LoadBot') }}</h3>
                        <p class="step-description">{{ t('wplaceBotPage.step2Description') }}</p>

                        <div class="code-block">
                            <pre><code>{{ loadBotCode }}</code></pre>
                        </div>

                        <div class="success-box">
                            <div class="success-icon">✅</div>
                            <div>
                                <strong>{{ t('wplaceBotPage.successMessage') }}</strong><br>
                                {{ t('wplaceBotPage.waitForBotLoadedMessage') }}
                            </div>
                        </div>

                        <h3 class="step-title">{{ t('wplaceBotPage.step3StartDrawing') }}</h3>
                        <p class="step-description">{{ t('wplaceBotPage.step3Description') }}</p>

                        <p>{{ t('wplaceBotPage.step3Details') }}</p>

                        <h4 class="quick-test-title">{{ t('wplaceBotPage.quickTest') }}</h4>
                        <div class="code-block">
                            <pre><code>{{ quickTestCode }}</code></pre>
                        </div>
                    </div>
                </div>

                <!-- Creation Methods Tab -->
                <div v-if="activeTab === 'creation-methods'" class="tab-panel">
                    <div class="container">
                        <h2 class="section-title">{{ t('wplaceBotPage.creationMethodsTitle') }}</h2>
                        <p class="section-intro">{{ t('wplaceBotPage.creationMethodsIntro') }}</p>
                        <div class="option-card">
                            <h3 class="option-title">
                                <span class="option-icon">📁</span>
                                {{ t('wplaceBotPage.optionATitle') }} <span class="badge">{{
                                    t('wplaceBotPage.optionAEasiest') }}</span>
                            </h3>
                            <ol class="option-steps">
                                <li>{{ t('wplaceBotPage.optionAStep1') }}</li>
                                <li>{{ t('wplaceBotPage.optionAStep2') }}</li>
                                <li>{{ t('wplaceBotPage.optionAStep3') }}</li>
                                <li>{{ t('wplaceBotPage.optionAStep4') }}</li>
                            </ol>
                        </div>

                        <div class="option-card">
                            <h3 class="option-title">
                                <span class="option-icon">🔧</span>
                                {{ t('wplaceBotPage.optionBTitle') }}
                            </h3>
                            <ol class="option-steps">
                                <li>{{ t('wplaceBotPage.optionBStep1') }}</li>
                                <li>{{ t('wplaceBotPage.optionBStep2') }}</li>
                                <li>{{ t('wplaceBotPage.optionBStep3') }}</li>
                                <li>{{ t('wplaceBotPage.optionBStep4') }}</li>
                                <li>{{ t('wplaceBotPage.optionBStep5') }}</li>
                            </ol>
                        </div>

                        <div class="option-card">
                            <h3 class="option-title">
                                <span class="option-icon">🎨</span>
                                {{ t('wplaceBotPage.optionCTitle') }}
                            </h3>
                            <ol class="option-steps">
                                <li>{{ t('wplaceBotPage.optionCStep1') }}</li>
                                <li>{{ t('wplaceBotPage.optionCStep2') }}</li>
                                <li>{{ t('wplaceBotPage.optionCStep3') }}</li>
                                <li>{{ t('wplaceBotPage.optionCStep4') }}</li>
                                <li>{{ t('wplaceBotPage.optionCStep5') }}</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <!-- Console Commands Tab -->
                <div v-if="activeTab === 'console-commands'" class="tab-panel">
                    <div class="container">
                        <h2 class="section-title">{{ t('wplaceBotPage.consoleCommandsTitle') }}</h2>
                        <p class="section-intro">{{ t('wplaceBotPage.consoleCommandsIntro') }}</p>

                        <h3 class="section-header">{{ t('wplaceBotPage.basicControlsHeader') }}</h3>
                        <div class="code-block">
                            <pre><code>wplaceBot.start();                // Start drawing
wplaceBot.stop();                 // Stop drawing
wplaceBot.setStartPosition(x, y); // Set start position
wplaceBot.setDelay(1000);         // Set speed (1s delay)</code></pre>
                        </div>

                        <h3 class="section-header">{{ t('wplaceBotPage.imageLoadingHeader') }}</h3>
                        <div class="code-block">
                            <pre><code>// Load WPlace Bot pre-defined images
wplaceBot.loadHeartImage();
wplaceBot.loadSmileyImage();

// Load image from custom data array for WPlace Bot
const myPixels = [{ x: 0, y: 0, color: '#FF0000' }, /* ... */ ];
wplaceBot.loadImageFromData(myPixels, 'My WPlace Bot Image');

// Load image from a URL for WPlace Bot processing
wplaceBot.loadImageFromUrl('data:image/png;base64,...', 50, 50);</code></pre>
                        </div>

                        <h3 class="section-header">{{ t('wplaceBotPage.troubleshootingHeader') }}</h3>
                        <ul class="troubleshooting-list">
                            <li>{{ t('wplaceBotPage.canvasNotFoundError') }}</li>
                            <li>{{ t('wplaceBotPage.wplaceBotNotFoundError') }}</li>
                            <li>{{ t('wplaceBotPage.botNotWorkingError') }}</li>
                        </ul>
                    </div>
                </div>

                <!-- Advanced Usage Tab -->
                <div v-if="activeTab === 'advanced-usage'" class="tab-panel">
                    <div class="container">
                        <h2 class="section-title">{{ t('wplaceBotPage.advancedUsageTitle') }}</h2>
                        <p class="section-intro">{{ t('wplaceBotPage.advancedUsageIntro') }}</p>

                        <div class="feature-card">
                            <h3 class="feature-title">
                                <span class="feature-icon">💻</span>
                                {{ t('wplaceBotPage.customScriptTitle') }}
                            </h3>
                            <p class="feature-subtitle">{{ t('wplaceBotPage.customScriptSubtitle') }}</p>
                            <ul class="feature-list">
                                <li>{{ t('wplaceBotPage.customScriptFeature1') }}</li>
                                <li>{{ t('wplaceBotPage.customScriptFeature2') }}</li>
                                <li>{{ t('wplaceBotPage.customScriptFeature3') }}</li>
                                <li>{{ t('wplaceBotPage.customScriptFeature4') }}</li>
                            </ul>
                            <p class="feature-description">{{ t('wplaceBotPage.customScriptDesc') }}</p>
                        </div>

                        <div class="feature-card">
                            <h3 class="feature-title">
                                <span class="feature-icon">🔄</span>
                                {{ t('wplaceBotPage.batchProcessing') }}
                            </h3>
                            <p class="feature-subtitle">{{ t('wplaceBotPage.batchProcessingDescription') }}</p>
                            <ul class="feature-list">
                                <li>{{ t('wplaceBotPage.useBatchProcess') }}</li>
                                <li>{{ t('wplaceBotPage.implementQueueManagement') }}</li>
                                <li>{{ t('wplaceBotPage.setupConflictDetection') }}</li>
                                <li>{{ t('wplaceBotPage.configureRetryMechanisms') }}</li>
                            </ul>
                            <p class="feature-description">{{ t('wplaceBotPage.featureDescription') }}</p>
                        </div>

                        <div class="feature-card">
                            <h3 class="feature-title">
                                <span class="feature-icon">⚡</span>
                                {{ t('wplaceBotPage.performanceOptimization') }}
                            </h3>
                            <p class="feature-subtitle">{{ t('wplaceBotPage.performanceOptimizationDescription') }}</p>
                            <ul class="feature-list">
                                <li>{{ t('wplaceBotPage.configureAdaptiveDelay') }}</li>
                                <li>{{ t('wplaceBotPage.implementMemoryEfficient') }}</li>
                                <li>{{ t('wplaceBotPage.useCanvasStateCaching') }}</li>
                                <li>{{ t('wplaceBotPage.performanceOptimization') }}</li>
                            </ul>
                            <p class="feature-description">{{ t('wplaceBotPage.featureDescription2') }}</p>
                        </div>
                    </div>
                </div>

                <!-- API Reference Tab -->
                <div v-if="activeTab === 'api-reference'" class="tab-panel">
                    <div class="container">
                        <h2 class="section-title">{{ t('wplaceBotPage.apiReferenceTitle') }}</h2>
                        <p class="section-intro">{{ t('wplaceBotPage.apiReferenceIntro') }}</p>

                        <div class="api-section">
                            <h3 class="api-title">
                                <span class="api-icon">🎯</span>
                                {{ t('wplaceBotPage.coreAPITitle') }}
                            </h3>
                            <p class="api-subtitle"> {{ t('wplaceBotPage.coreAPISubtitle') }}</p>
                            <p>{{ t('wplaceBotPage.coreAPIDesc') }}</p>
                            <div class="code-block">
                                <pre><code>wplaceBot.start();                // Start drawing
wplaceBot.stop();                 // Stop drawing
wplaceBot.setStartPosition(x, y); // Set start position
wplaceBot.setDelay(1000);         // Set speed (1s delay)</code></pre>
                            </div>
                        </div>

                        <div class="api-section">
                            <h3 class="api-title">
                                <span class="api-icon">🖼️</span>
                                {{ t('wplaceBotPage.imageProcessingAPITitle') }}
                            </h3>
                            <p class="api-subtitle">{{ t('wplaceBotPage.imageProcessingAPISubtitle') }}</p>
                            <p>{{ t('wplaceBotPage.imageProcessingAPIDesc') }}</p>
                            <div class="code-block">
                                <pre><code>// Load pre-defined images
wplaceBot.loadHeartImage();
wplaceBot.loadSmileyImage();

// Load image from custom data array
const myPixels = [{ x: 0, y: 0, color: '#FF0000' }, /* ... */ ];
wplaceBot.loadImageFromData(myPixels, 'My WPlace Bot Image');

// Load image from a URL (or data URL)
wplaceBot.loadImageFromUrl('data:image/png;base64,...', 50, 50);</code></pre>
                            </div>
                        </div>

                        <div class="api-section">
                            <h3 class="api-title">
                                <span class="api-icon">📡</span>
                                {{ t('wplaceBotPage.eventSystemTitle') }}
                            </h3>
                            <p class="api-subtitle">{{ t('wplaceBotPage.eventSystemSubtitle') }}</p>
                            <ul class="api-list">
                                <li>{{ t('wplaceBotPage.eventSystemFeature1') }}</li>
                                <li>{{ t('wplaceBotPage.eventSystemFeature2') }}</li>
                                <li>{{ t('wplaceBotPage.eventSystemFeature3') }}</li>
                                <li>{{ t('wplaceBotPage.eventSystemFeature4') }}</li>
                            </ul>
                            <p>{{ t('wplaceBotPage.eventSystemDesc') }}</p>
                        </div>

                        <div class="api-section">
                            <h3 class="api-title">
                                <span class="api-icon">⚙️</span>
                                {{ t('wplaceBotPage.configOptionsTitle') }}
                            </h3>
                            <p class="api-subtitle">{{ t('wplaceBotPage.configOptionsSubtitle') }}</p>
                            <ul class="api-list">
                                <li>{{ t('wplaceBotPage.configOptionsFeature1') }}</li>
                                <li>{{ t('wplaceBotPage.configOptionsFeature2') }}</li>
                                <li>{{ t('wplaceBotPage.configOptionsFeature3') }}</li>
                                <li>{{ t('wplaceBotPage.configOptionsFeature4') }}</li>
                            </ul>
                            <p>{{ t('wplaceBotPage.configOptionsDesc') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Troubleshooting Tab -->
                <div v-if="activeTab === 'troubleshooting'" class="tab-panel">
                    <div class="container">
                        <h2 class="section-title">{{ t('wplaceBotPage.troubleshootingTitle') }}</h2>
                        <p class="section-intro">{{ t('wplaceBotPage.troubleshootingIntro') }}</p>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">🔧</span>
                               {{ t('wplaceBotPage.commonErrorTitle') }}
                            </h3>
                            <p class="troubleshooting-subtitle">{{ t('wplaceBotPage.commonErrorSubtitle') }}</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.canvasLoadingTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.canvasLoadingDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.rateLimitingTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.rateLimitingDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.memoryConsumptionTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.memoryConsumptionDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.browserCompatibilityTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.browserCompatibilityDesc') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">⚡</span>
                                {{ t('wplaceBotPage.performanceIssuesTitle') }}
                            </h3>
                            <p class="troubleshooting-subtitle">{{ t('wplaceBotPage.performanceIssuesSubtitle') }}</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.slowPixelTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.slowPixelDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.highCPUTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.highCPUDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.memoryLeaksTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.memoryLeaksDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.browserFreezingTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.browserFreezingDesc') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">🔗</span>
                                {{ t('wplaceBotPage.integrationProblemsTitle') }}
                            </h3>
                            <p class="troubleshooting-subtitle">{{ t('wplaceBotPage.integrationProblemsSubtitle') }}</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.imageUploadFailuresTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.imageUploadFailuresDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.scriptLoadingErrorsTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.scriptLoadingErrorsDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.crossOriginTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.crossOriginDesc') }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">🐛</span>
                                {{ t('wplaceBotPage.advancedDebuggingTitle') }}
                            </h3>
                            <p class="troubleshooting-subtitle">{{ t('wplaceBotPage.advancedDebuggingSubtitle') }}</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.debugModeTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.debugModeDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.networkMonitoringTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.networkMonitoringDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.stateInspectionTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.stateInspectionDesc') }}</p>
                                </div>
                                <div class="issue-item">
                                    <h4>{{ t('wplaceBotPage.errorReportingTitle') }}</h4>
                                    <p>{{ t('wplaceBotPage.errorReportingDesc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About WPlace Bot Tool Section -->
        <section class="about-tool-section">
            <div class="container">
                <div class="about-content">
                    <h2 class="about-title">{{ t('wplaceBotPage.aboutToolTitle') }}</h2>

                    <div class="about-grid">
                        <div class="about-column">
                            <h3 class="column-title">{{ t('wplaceBotPage.toolOverview') }}</h3>
                            <p>{{ t('wplaceBotPage.toolOverviewDesc1') }}</p>
                            <p>{{ t('wplaceBotPage.toolOverviewDesc2') }}</p>
                        </div>

                        <div class="about-column">
                            <h3 class="column-title">{{ t('wplaceBotPage.keyFeatures') }}</h3>
                            <p>{{ t('wplaceBotPage.keyFeaturesDesc1') }}</p>
                            <p>{{ t('wplaceBotPage.keyFeaturesDesc2') }}</p>
                        </div>
                    </div>

                    <div class="about-grid">
                        <div class="about-column">
                            <h3 class="column-title">{{ t('wplaceBotPage.technicalImplementation') }}</h3>
                            <p>{{ t('wplaceBotPage.technicalImplementationDesc1') }}</p>
                            <p>{{ t('wplaceBotPage.technicalImplementationDesc2') }}</p>
                        </div>

                        <div class="about-column">
                            <h3 class="column-title">{{ t('wplaceBotPage.communityAndSupport') }}</h3>
                            <p>{{ t('wplaceBotPage.communityAndSupportDesc1') }}</p>
                            <p>{{ t('wplaceBotPage.communityAndSupportDesc2') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
            <div class="container">
                <div class="features-content">
                    <h2 class="features-title">{{ t('wplaceBotPage.featuresTitle') }}</h2>
                    <p class="features-subtitle">{{ t('wplaceBotPage.featuresSubtitle') }}</p>

                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-icon">⚡</div>
                            <h3>{{ t('wplaceBotPage.instantConsoleLoading') }}</h3>
                            <p>{{ t('wplaceBotPage.instantConsoleLoadingDesc') }}</p>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">🖥️</div>
                            <h3>{{ t('wplaceBotPage.onScreenControlPanel') }}</h3>
                            <p>{{ t('wplaceBotPage.onScreenControlPanelDesc') }}</p>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">📤</div>
                            <h3>{{ t('wplaceBotPage.directImageUpload') }}</h3>
                            <p>{{ t('wplaceBotPage.directImageUploadDesc') }}</p>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">🔧</div>
                            <h3>{{ t('wplaceBotPage.advancedImageConverter') }}</h3>
                            <p>{{ t('wplaceBotPage.advancedImageConverterDesc') }}</p>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">🎨</div>
                            <h3>{{ t('wplaceBotPage.livePixelArtEditor') }}</h3>
                            <p>{{ t('wplaceBotPage.livePixelArtEditorDesc') }}</p>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">💻</div>
                            <h3>{{ t('wplaceBotPage.fullConsoleControl') }}</h3>
                            <p>{{ t('wplaceBotPage.fullConsoleControlDesc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-content">
                    <h2 class="faq-title">{{ t('wplaceBotPage.faqTitle') }}</h2>
                    <p class="faq-subtitle">{{ t('wplaceBotPage.faqSubtitle') }}</p>

                    <div class="faq-grid">
                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqDownloadInstall') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqDownloadInstallAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqAllowed') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqAllowedAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqHowToLoad') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqHowToLoadAnswer1') }}</p>
                                <div class="code-block">
                                    <pre><code>fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)</code></pre>
                                </div>
                                <p>{{ t('wplaceBotPage.faqHowToLoadAnswer2') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqEasiestWay') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqEasiestWayAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqConverterEditor') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqConverterEditorAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqBrowser') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqBrowserAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqSpeed') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqSpeedAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqLargeImages') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqLargeImagesAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqImageFormats') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqImageFormatsAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqStop') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqStopAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqCustomize') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqCustomizeAnswer') }}</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">{{ t('wplaceBotPage.faqSafe') }}</h3>
                            <div class="faq-answer">
                                <p>{{ t('wplaceBotPage.faqSafeAnswer') }}</p>
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

const activeTab = ref('preparation')

const navigationTabs = [
    { id: 'preparation', label: 'quickStart', icon: '🚀', shortLabel: 'Quick Start' },
    { id: 'creation-methods', label: 'creationMethods', icon: '🎨', shortLabel: 'Creation Methods' },
    { id: 'console-commands', label: 'consoleCommands', icon: '💻', shortLabel: 'Console Commands' },
    { id: 'advanced-usage', label: 'advancedUsage', icon: '⚡', shortLabel: 'Advanced Usage' },
    { id: 'api-reference', label: 'apiReference', icon: '📚', shortLabel: 'API Reference' },
    { id: 'troubleshooting', label: 'troubleshooting', icon: '🔧', shortLabel: 'Troubleshooting' }
]

const loadBotCode = `fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)`

const quickTestCode = `wplaceBot.loadHeartImage();
wplaceBot.setStartPosition(100, 100);
wplaceBot.start();`
</script>

<style scoped>
.wplace-bot-view {
    background: #f8f9fa;
    min-height: 100vh;
}

/* Banner Section */
.banner-section {
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
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

/* 选项卡导航 */
.tabs-navigation {
    background: white;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.tabs-wrapper {
    display: flex;
    gap: 0;
    overflow-x: auto;
    margin: 0 auto;
    justify-content: center;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.tabs-wrapper::-webkit-scrollbar {
    display: none;
}

.tab-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 18px 20px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
    white-space: nowrap;
    position: relative;
    flex-shrink: 0;
    min-width: fit-content;
    flex: 1;
}

.tab-button:hover {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.05);
}

.tab-button.active {
    color: #00bcd4;
    background: rgba(0, 188, 212, 0.1);
    border-bottom-color: #00bcd4;
}

.tab-icon {
    font-size: 16px;
}

.tab-text {
    font-size: 14px;
}

/* 选项卡内容 */
.tab-content {
    background: white;
    min-height: 600px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.tab-panel {
    padding: 40px 0;
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 通用样式 */
.section-title {
    font-size: 32px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

.section-intro {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 40px;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Quick Start 样式 */
.step-title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    margin-top: 30px;
}

.step-description {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.step-list {
    padding-left: 20px;
    margin: 20px 0;
}

.step-list li {
    margin: 10px 0;
    line-height: 1.6;
}

.link {
    color: #00bcd4;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}

kbd {
    background: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 2px 6px;
    font-family: monospace;
    font-size: 0.9em;
}

.code-block {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    overflow-x: auto;
}

.code-block pre {
    margin: 0;
}

.code-block code {
    color: #f8f8f2;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.5;
}

.success-box {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    background: #e8f5e8;
    border: 1px solid #4caf50;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}

.success-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.quick-test-title {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 30px 0 10px 0;
}

/* Creation Methods 样式 */
.option-card {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 25px;
    margin: 20px 0;
}

.option-title {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.option-icon {
    font-size: 24px;
}

.badge {
    background: #00bcd4;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.option-steps {
    padding-left: 20px;
}

.option-steps li {
    margin: 8px 0;
    line-height: 1.5;
}

/* Console Commands 样式 */
.section-header {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin: 40px 0 15px 0;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 10px;
}

.troubleshooting-list {
    list-style: none;
    padding: 0;
}

.troubleshooting-list li {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
}

/* Advanced Usage 样式 */
.feature-card {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 25px;
    margin: 25px 0;
}

.feature-title {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.feature-icon {
    font-size: 28px;
}

.feature-subtitle {
    color: #666;
    font-size: 16px;
    margin-bottom: 15px;
    font-style: italic;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 15px 0;
}

.feature-list li {
    padding: 5px 0;
    position: relative;
    padding-left: 20px;
}

.feature-list li:before {
    content: '•';
    color: #00bcd4;
    font-weight: bold;
    position: absolute;
    left: 0;
}

.feature-description {
    color: #666;
    line-height: 1.6;
    margin-top: 15px;
}

/* API Reference 样式 */
.api-section {
    margin: 30px 0;
    padding: 25px;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
}

.api-title {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.api-icon {
    font-size: 28px;
}

.api-subtitle {
    color: #666;
    font-size: 16px;
    margin-bottom: 15px;
    font-style: italic;
}

.api-list {
    list-style: none;
    padding: 0;
    margin: 15px 0;
}

.api-list li {
    padding: 5px 0;
    position: relative;
    padding-left: 20px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
}

.api-list li:before {
    content: '▸';
    color: #00bcd4;
    font-weight: bold;
    position: absolute;
    left: 0;
}

/* Troubleshooting 样式 */
.troubleshooting-section {
    margin: 30px 0;
}

.troubleshooting-title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 10px;
}

.troubleshooting-icon {
    font-size: 28px;
}

.troubleshooting-subtitle {
    color: #666;
    font-size: 16px;
    margin-bottom: 20px;
}

.issue-list {
    margin: 20px 0;
}

.issue-item {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    margin: 15px 0;
}

.issue-item h4 {
    color: #333;
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: 600;
}

.issue-item p {
    color: #666;
    margin: 0;
    line-height: 1.6;
}

/* About Tool Section */
.about-tool-section {
    background: white;
    padding: 80px 0;
}

.about-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 60px;
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
    color: #333;
    margin-bottom: 20px;
}

.column-title {
    color: #00bcd4;
}

.about-column p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Features Section */
.features-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.features-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.features-subtitle {
    font-size: 18px;
    color: #666;
    text-align: center;
    margin-bottom: 60px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.feature-item {
    background: white;
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.feature-item .feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.feature-item h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
}

.feature-item p {
    color: #666;
    line-height: 1.6;
}

/* FAQ Section */
.faq-section {
    background: white;
    padding: 80px 0;
}

.faq-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}

.faq-subtitle {
    font-size: 18px;
    color: #666;
    text-align: center;
    margin-bottom: 60px;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.faq-item {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.faq-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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

.faq-answer code {
    background: #1e1e1e;
    color: #f8f8f2;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-title {
        font-size: 36px;
    }

    .description-text {
        font-size: 18px;
    }

    .tabs-wrapper {
        justify-content: flex-start;
        overflow-x: auto;
    }

    .tab-button {
        padding: 15px 18px;
        font-size: 14px;
        min-width: auto;
    }

    .container {
        padding: 0 15px;
    }

    .tab-panel {
        padding: 40px 0;
    }

    .section-title {
        font-size: 28px;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .features-grid,
    .faq-grid {
        grid-template-columns: 1fr;
    }

    .about-title,
    .features-title,
    .faq-title {
        font-size: 28px;
    }
}

@media (max-width: 480px) {
    .banner-section {
        padding: 60px 0;
    }

    .main-title {
        font-size: 28px;
    }

    .step-title {
        font-size: 20px;
    }

    .section-title {
        font-size: 24px;
    }

    .about-title,
    .features-title,
    .faq-title {
        font-size: 24px;
    }

    .about-tool-section,
    .features-section,
    .faq-section {
        padding: 60px 0;
    }
}
</style>

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
                            <p class="feature-subtitle">Create your own WPlace Bot automation scripts using the WPlace
                                Bot framework</p>
                            <ul class="feature-list">
                                <li>Initialize custom WPlace Bot drawing algorithms using
                                    wplaceBot.customDraw(algorithm)</li>
                                <li>Implement WPlace Bot callback functions for progress monitoring and error handling
                                </li>
                                <li>Create reusable WPlace Bot modules for common drawing patterns and shapes</li>
                                <li>Integrate WPlace Bot with external APIs for dynamic content generation</li>
                            </ul>
                            <p class="feature-description">The WPlace Bot automation tool provides a flexible JavaScript
                                API that allows developers to create custom WPlace Bot automation scripts. You can
                                extend the base WPlace Bot functionality to handle complex drawing patterns, implement
                                custom WPlace Bot algorithms, or integrate with external data sources. The modular
                                WPlace Bot architecture supports plugin development and custom image processing
                                pipelines.</p>
                        </div>

                        <div class="feature-card">
                            <h3 class="feature-title">
                                <span class="feature-icon">🔄</span>
                                Batch Processing & Automation
                            </h3>
                            <p class="feature-subtitle">Handle multiple images and complex projects with advanced batch
                                processing</p>
                            <ul class="feature-list">
                                <li>Use wplaceBot.batchProcess([images]) for multiple image processing</li>
                                <li>Implement queue management with priority levels and dependencies</li>
                                <li>Set up automatic conflict detection and resolution strategies</li>
                                <li>Configure retry mechanisms with exponential backoff algorithms</li>
                            </ul>
                            <p class="feature-description">For large-scale projects, the tool supports sophisticated
                                batch processing capabilities. You can queue multiple images, set processing priorities,
                                and implement conditional logic based on canvas state. The system includes conflict
                                resolution mechanisms and automatic retry logic for failed pixel placements.</p>
                        </div>

                        <div class="feature-card">
                            <h3 class="feature-title">
                                <span class="feature-icon">⚡</span>
                                Performance Optimization
                            </h3>
                            <p class="feature-subtitle">Advanced techniques for optimizing drawing performance and
                                resource usage</p>
                            <ul class="feature-list">
                                <li>Configure adaptive delay algorithms: wplaceBot.setAdaptiveDelay(true)</li>
                                <li>Implement memory-efficient image processing with chunking strategies</li>
                                <li>Use canvas state caching to reduce redundant operations</li>
                                <li>Optimize drawing paths using pathfinding algorithms</li>
                            </ul>
                            <p class="feature-description">Optimize your automation performance using advanced
                                configuration options. The tool includes memory management features, intelligent caching
                                systems, and adaptive timing algorithms that adjust to server load conditions. Learn how
                                to implement efficient drawing patterns and minimize resource consumption.</p>
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
                                Core API Methods
                            </h3>
                            <p class="api-subtitle">Complete reference for essential WPlace Bot automation methods</p>
                            <p>The WPlace Bot API provides a comprehensive set of methods for programmatic control of
                                pixel art creation. All WPlace Bot methods are designed to be chainable and support both
                                synchronous and asynchronous operation modes. Error handling is built into every WPlace
                                Bot method with detailed error reporting.</p>
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
                                Image Processing API
                            </h3>
                            <p class="api-subtitle">Advanced image manipulation and conversion functions</p>
                            <p>The image processing API handles format conversion, color palette optimization, and size
                                scaling. It supports multiple image formats and provides fine-grained control over color
                                quantization algorithms. The API includes built-in dithering options and transparency
                                handling.</p>
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
                                Event System & Callbacks
                            </h3>
                            <p class="api-subtitle">Monitor automation progress and handle events programmatically</p>
                            <ul class="api-list">
                                <li>Register event listeners: wplaceBot.on('pixelPlaced', callback)</li>
                                <li>Monitor progress: wplaceBot.on('progress', (percent) => {})</li>
                                <li>Handle errors: wplaceBot.on('error', (error) => {})</li>
                                <li>Track completion: wplaceBot.on('complete', () => {})</li>
                            </ul>
                            <p>The event system provides real-time feedback on automation progress, error conditions,
                                and user interactions. You can register custom event listeners for pixel placement
                                events, error recovery attempts, and completion notifications. The system supports both
                                global and scoped event handling.</p>
                        </div>

                        <div class="api-section">
                            <h3 class="api-title">
                                <span class="api-icon">⚙️</span>
                                Configuration Options
                            </h3>
                            <p class="api-subtitle">Comprehensive configuration system for fine-tuning automation
                                behavior</p>
                            <ul class="api-list">
                                <li>Global config: wplaceBot.config.set('key', value)</li>
                                <li>Load profiles: wplaceBot.loadConfig('profileName')</li>
                                <li>Safety limits: wplaceBot.config.safety.maxPixelsPerSecond = 2</li>
                                <li>Export settings: wplaceBot.exportConfig()</li>
                            </ul>
                            <p>The configuration system allows detailed customization of automation behavior, timing
                                parameters, and safety mechanisms. You can save and load configuration profiles, set
                                environment-specific parameters, and implement custom validation rules for drawing
                                operations.</p>
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
                                Common Error Resolution
                            </h3>
                            <p class="troubleshooting-subtitle">Step-by-step solutions for frequently encountered issues
                            </p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>Canvas Loading Issues:</h4>
                                    <p>If the canvas fails to load, clear browser cache and reload the page. Ensure
                                        wplace.live is fully loaded before running the bot script.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Rate Limiting Errors:</h4>
                                    <p>When you encounter rate limiting, increase the delay setting using
                                        wplaceBot.setDelay(2000) or higher. The default should be at least 1000ms.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Memory Consumption:</h4>
                                    <p>For large images, use wplaceBot.config.memoryOptimized = true to enable chunked
                                        processing and reduce memory usage.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Browser Compatibility:</h4>
                                    <p>If the bot fails to load, ensure JavaScript is enabled and try using Chrome or
                                        Firefox. Some browser extensions may interfere with functionality.</p>
                                </div>
                            </div>
                        </div>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">⚡</span>
                                Performance Issues
                            </h3>
                            <p class="troubleshooting-subtitle">Optimize performance and resolve slowdowns</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>Slow Pixel Placement:</h4>
                                    <p>Check your internet connection and increase delay if experiencing timeouts. Use
                                        wplaceBot.diagnostics.networkTest() to check connection quality.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>High CPU Usage:</h4>
                                    <p>Enable adaptive timing with wplaceBot.setAdaptiveDelay(true) to automatically
                                        adjust processing speed based on system performance.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Memory Leaks:</h4>
                                    <p>Restart the bot periodically for long sessions using wplaceBot.restart(). Clear
                                        image cache with wplaceBot.clearCache() if memory usage grows.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Browser Freezing:</h4>
                                    <p>Reduce image size or enable background processing mode with
                                        wplaceBot.config.backgroundMode = true for better responsiveness.</p>
                                </div>
                            </div>
                        </div>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">🔗</span>
                                Integration Problems
                            </h3>
                            <p class="troubleshooting-subtitle">Resolve issues with external tools and integrations</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>Image Upload Failures:</h4>
                                    <p>Verify image format compatibility (PNG, JPG, GIF supported). Use
                                        wplaceBot.validateImage(file) to check format before processing.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Script Loading Errors:</h4>
                                    <p>If the fetch command fails, check your internet connection and try loading from a
                                        different CDN mirror using the alternative fetch URL.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Cross-Origin Issues:</h4>
                                    <p>Some images may fail due to CORS restrictions. Use the built-in image converter
                                        or upload images to a compatible hosting service.</p>
                                </div>
                            </div>
                        </div>

                        <div class="troubleshooting-section">
                            <h3 class="troubleshooting-title">
                                <span class="troubleshooting-icon">🐛</span>
                                Advanced Debugging
                            </h3>
                            <p class="troubleshooting-subtitle">Debug complex issues and contribute to development</p>

                            <div class="issue-list">
                                <div class="issue-item">
                                    <h4>Debug Mode:</h4>
                                    <p>Enable detailed logging with wplaceBot.config.debug = true to see internal
                                        operations and identify issues more precisely.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Network Monitoring:</h4>
                                    <p>Use wplaceBot.diagnostics.networkMonitor() to track request patterns and identify
                                        network-related problems.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>State Inspection:</h4>
                                    <p>Check bot internal state with wplaceBot.getState() to diagnose unexpected
                                        behavior and validate configuration settings.</p>
                                </div>
                                <div class="issue-item">
                                    <h4>Error Reporting:</h4>
                                    <p>Generate detailed error reports with wplaceBot.generateErrorReport() and submit
                                        to GitHub issues for community support and bug fixes.</p>
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
                                <p>The WPlace Bot tool is designed with respect for the wplace.live community. It
                                    includes built-in rate limiting, delay controls, and follows responsible automation
                                    practices. The WPlace Bot implements safety mechanisms to prevent abuse and
                                    maintains compliance with platform guidelines. Always check the current wplace.live
                                    terms of service and use the WPlace Bot respectfully. The WPlace Bot community
                                    promotes ethical automation usage.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">How do I load the WPlace Bot automation tool?</h3>
                            <div class="faq-answer">
                                <p>Loading the WPlace Bot is simple: Open wplace.live, press F12 to open Developer
                                    Tools, click the Console tab, and paste this WPlace Bot command:</p>
                                <div class="code-block">
                                    <pre><code>fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)</code></pre>
                                </div>
                                <p>The WPlace Bot will load automatically and display a success message when ready. The
                                    WPlace Bot control panel will appear in the top-right corner of your screen.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">What's the easiest way to draw an image with WPlace Bot?</h3>
                            <div class="faq-answer">
                                <p>Use Option A: Direct Upload. After loading the WPlace Bot, click the "📁 Carregar
                                    Imagem" button on the WPlace Bot control panel, select your image file, set the
                                    position, and click "▶️ Iniciar" to start the WPlace Bot automation. This is the
                                    most beginner-friendly WPlace Bot method that requires no technical knowledge.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">What are the WPlace Bot 'Converter' and 'Editor' tools?</h3>
                            <div class="faq-answer">
                                <p>The WPlace Bot Converter is an advanced web tool for fine-tuning image conversion
                                    with custom settings like color palette optimization and size scaling. The WPlace
                                    Bot Editor is a built-in pixel art creation tool where you can draw directly and
                                    generate WPlace Bot scripts automatically. Both tools integrate seamlessly with the
                                    main WPlace Bot automation system for enhanced creative control.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Can I use WPlace Bot on any browser?</h3>
                            <div class="faq-answer">
                                <p>The WPlace Bot works best on modern browsers like Chrome, Firefox, and Edge. Make
                                    sure JavaScript is enabled and disable any script blockers that might interfere with
                                    WPlace Bot functionality. The WPlace Bot is optimized for Chromium-based browsers
                                    but works well across all major browser platforms. Mobile browsers may have limited
                                    WPlace Bot functionality.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">How fast does WPlace Bot place pixels?</h3>
                            <div class="faq-answer">
                                <p>WPlace Bot includes intelligent timing controls with a default delay of 1000ms
                                    between pixel placements to respect server limits. You can adjust the WPlace Bot
                                    speed using wplaceBot.setDelay() command. The WPlace Bot automatically adapts to
                                    server conditions and includes built-in rate limiting protection to ensure stable
                                    performance.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Can WPlace Bot handle large images?</h3>
                            <div class="faq-answer">
                                <p>Yes! WPlace Bot includes advanced memory management and chunked processing for large
                                    images. Enable memory optimization with wplaceBot.config.memoryOptimized = true for
                                    better performance with large WPlace Bot projects. The WPlace Bot automatically
                                    scales and optimizes images for the wplace.live canvas while maintaining quality.
                                </p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">What image formats does WPlace Bot support?</h3>
                            <div class="faq-answer">
                                <p>WPlace Bot supports all major image formats including PNG, JPG, JPEG, GIF, and WebP.
                                    The WPlace Bot automatically converts and optimizes images for pixel art creation.
                                    You can also load images from URLs or custom data arrays using WPlace Bot API
                                    methods for maximum flexibility.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">How do I stop WPlace Bot if something goes wrong?</h3>
                            <div class="faq-answer">
                                <p>You can immediately stop WPlace Bot by running wplaceBot.stop() in the console or
                                    clicking the stop button on the WPlace Bot control panel. The WPlace Bot includes
                                    emergency stop functions and error recovery mechanisms to handle unexpected
                                    situations safely. The WPlace Bot also has automatic timeout protection.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Can I customize WPlace Bot behavior and settings?</h3>
                            <div class="faq-answer">
                                <p>Absolutely! WPlace Bot offers extensive customization options through the
                                    configuration API. You can adjust timing, memory usage, safety limits, and create
                                    custom WPlace Bot profiles. Advanced users can develop custom WPlace Bot scripts and
                                    integrate external APIs for enhanced functionality. The WPlace Bot supports both
                                    beginner and expert customization levels.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Is WPlace Bot safe to use with other users on the canvas?</h3>
                            <div class="faq-answer">
                                <p>Yes, WPlace Bot is designed for collaborative use. It includes intelligent conflict
                                    detection, respects other users' artwork, and implements adaptive timing to work
                                    harmoniously with the wplace.live community. The WPlace Bot follows responsible
                                    automation practices and community guidelines to ensure a positive experience for
                                    all users.</p>
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

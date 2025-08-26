<template>
    <div class="wplace-extensions-view">
        <!-- Banner 区域 -->
        <section class="banner-section">
            <div class="container">
                <div class="banner-content">
                    <div class="top-hint">
                        <span>WplaceTools - Browser Extensions</span>
                    </div>

                    <h1 class="main-title">
                        Enhance Your <span class="highlight">Wplace.live</span> Experience with Wplace Extensions
                    </h1>

                    <div class="description-text">
                        <p>Discover official and community Wplace Extensions that extend Wplace.live functionality.</p>
                        <p>Transform your creative workflow with professional Wplace Extensions and tools.</p>
                    </div>

                    <div class="feature-buttons">
                        <a href="https://chromewebstore.google.com/detail/wplace-tracer/efkjkoigpkglbkknnfcbdmfipbcdopao"
                            target="_blank" rel="noopener" class="feature-btn primary">
                            <span class="btn-icon">⬇️</span>
                            Download Plugins
                        </a>
                        <a href="#" @click.prevent="scrollToSection('workflow')" class="feature-btn secondary"
                            style="cursor: pointer;">
                            <span class="btn-icon">🔄</span>
                            Workflow
                        </a>
                    </div>

                    <div class="bottom-hint">
                        <span class="hint-icon">⚡</span>
                        Free plugins • Official support • Community driven • Easy installation
                    </div>
                </div>
            </div>
        </section>

        <!-- Wplace Tracer 插件介绍区域 -->
        <section class="tracer-intro-section">
            <div class="container">
                <div class="tracer-intro-content">
                    <h2 class="section-title">Wplace Tracer Extension - Your Bridge to Creative Freedom</h2>
                    <p class="section-subtitle">Transform Wplace Tools generated pixel art into stunning Wplace.live
                        creations with Wplace Extensions</p>

                    <div class="tracer-overview">
                        <div class="tracer-main-info">
                            <div class="tracer-icon">🔵</div>
                            <div class="tracer-details">
                                <h3>Wplace Tracer Extension</h3>
                                <div class="tracer-stats">
                                    <span class="stat-item">
                                        <span class="stat-icon">⭐</span>
                                        <span class="stat-value">4.2/5.0</span>
                                    </span>
                                    <span class="stat-item">
                                        <span class="stat-icon">⬇️</span>
                                        <span class="stat-value">10K+ downloads</span>
                                    </span>
                                    <span class="stat-item">
                                        <span class="stat-icon">🔄</span>
                                        <span class="stat-value">v2.1.0</span>
                                    </span>
                                </div>
                                <p class="tracer-description">
                                    Wplace Tracer Extension is the essential Wplace Extension that bridges the gap
                                    between Wplace
                                    Tools and Wplace.live.
                                    This powerful Wplace Extension allows you to overlay your generated pixel art
                                    directly onto
                                    your Wplace.live canvas,
                                    enabling you to trace, reference, and create with precision using Wplace Extensions.
                                </p>
                            </div>
                        </div>

                        <div class="tracer-features">
                            <h4>Key Capabilities:</h4>
                            <ul>
                                <li>Overlay pixel art from Wplace Tools onto Wplace.live</li>
                                <li>Adjustable transparency and positioning</li>
                                <li>Multiple reference image support</li>
                                <li>Quick toggle on/off functionality</li>
                                <li>Zoom and pan controls for precise tracing</li>
                                <li>Seamless integration with Wplace.live workflow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 工作流程区域 -->
        <section id="workflow" class="workflow-section">
            <div class="container">
                <div class="workflow-content">
                    <h2 class="section-title">Complete Creative Workflow with Wplace Extensions</h2>
                    <p class="section-subtitle">From pixel art generation to Wplace.live masterpiece using Wplace
                        Extensions</p>

                    <div class="workflow-steps">
                        <div class="workflow-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3>Create Pixel Art with Wplace Tools</h3>
                                <p>Use our <a href="/pixel-art-generator" target="_blank">Image to Pixel Art</a> or <a
                                        href="/text-to-pixel-art" target="_blank">Text to Pixel Art</a> tools to
                                    generate your pixel art. Adjust settings, colors, and styles to match your creative
                                    vision.</p>
                                <div class="step-tools">
                                    <span class="tool-tag">Image to Pixel Art</span>
                                    <span class="tool-tag">Text to Pixel Art</span>
                                </div>
                            </div>
                        </div>

                        <div class="workflow-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3>Download Your Pixel Art</h3>
                                <p>Export your generated pixel art in high-quality PNG format. Choose between
                                    pixel-perfect or scaled versions depending on your Wplace.live project requirements.
                                </p>
                                <div class="step-tools">
                                    <span class="tool-tag">PNG Export</span>
                                    <span class="tool-tag">Multiple Sizes</span>
                                </div>
                            </div>
                        </div>

                        <div class="workflow-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3>Install Wplace Tracer Extension</h3>
                                <p>Download and install the Wplace Tracer Extension from the Chrome Web Store.
                                    This Wplace Extension will automatically integrate with Wplace.live.</p>
                                <div class="step-tools">
                                    <span class="tool-tag">Chrome Extension</span>
                                    <span class="tool-tag">Auto Integration</span>
                                </div>
                            </div>
                        </div>

                        <div class="workflow-step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h3>Upload & Activate Overlay</h3>
                                <p>Open Wplace.live, upload your pixel art as a reference image. The Wplace Tracer
                                    Extension
                                    will automatically detect and activate the overlay feature.</p>
                                <div class="step-tools">
                                    <span class="tool-tag">Image Upload</span>
                                    <span class="tool-tag">Auto Detection</span>
                                </div>
                                <div class="step-tip">
                                    <span class="tip-icon">🔄</span>
                                    <span>If overlay doesn't appear, refresh the page to ensure the extension is fully
                                        loaded.</span>
                                </div>
                            </div>
                        </div>

                        <div class="workflow-step">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h3>Align Pixel Grids</h3>
                                <p>Carefully align your pixel art reference with Wplace.live's pixel grid. Use the
                                    overlay controls to ensure perfect pixel-to-pixel alignment for accurate tracing.
                                </p>
                                <div class="step-tools">
                                    <span class="tool-tag">Grid Alignment</span>
                                    <span class="tool-tag">Pixel Precision</span>
                                </div>
                                <div class="step-tip">
                                    <span class="tip-icon">🎯</span>
                                    <span>Hold Shift while dragging to move the overlay precisely. Use zoom controls for
                                        detailed alignment.</span>
                                </div>
                            </div>
                        </div>

                        <div class="workflow-step">
                            <div class="step-number">6</div>
                            <div class="step-content">
                                <h3>Trace & Create Your Artwork</h3>
                                <p>With your reference perfectly aligned, start tracing pixel by pixel. The overlay
                                    feature makes it easy to see exactly where each pixel should go on your canvas.</p>
                                <div class="step-tools">
                                    <span class="tool-tag">Pixel Tracing</span>
                                    <span class="tool-tag">Color Matching</span>
                                </div>
                                <div class="step-tip">
                                    <span class="tip-icon">💡</span>
                                    <span>Adjust overlay transparency to see both your reference and canvas clearly
                                        while working.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="workflow-benefits">
                        <h3>Why This Workflow Works:</h3>
                        <div class="benefits-grid">
                            <div class="benefit-item">
                                <div class="benefit-icon">🎨</div>
                                <h4>Perfect Reference</h4>
                                <p>Your Wplace Tools generated pixel art serves as the perfect reference for creating
                                    detailed artwork on Wplace.live.</p>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">⚡</div>
                                <h4>Efficient Process</h4>
                                <p>Skip the manual drawing process and focus on perfecting your creation with precise
                                    tracing and reference tools.</p>
                            </div>
                            <div class="benefit-item">
                                <div class="benefit-icon">🎯</div>
                                <h4>Pixel-Perfect Results</h4>
                                <p>Achieve professional-quality results by combining the power of Wplace Tools with the
                                    creative freedom of Wplace.live.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 使用技巧区域 -->
        <section class="tips-section">
            <div class="container">
                <div class="tips-content">
                    <h2 class="section-title">Wplace Extension Features & Usage Tips</h2>
                    <p class="section-subtitle">Master the Wplace Tracer Extension with these essential Wplace Extension
                        features and tips
                    </p>

                    <div class="tips-grid">
                        <div class="tip-category">
                            <h3>🔧 Core Plugin Features</h3>
                            <div class="tip-items">
                                <div class="tip-item">
                                    <div class="tip-icon">🖼️</div>
                                    <div class="tip-content">
                                        <h4>Image Overlay</h4>
                                        <p>Upload your pixel art reference image to display as an overlay on Wplace.live
                                        </p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-icon">📏</div>
                                    <div class="tip-content">
                                        <h4>Tracer Size Control</h4>
                                        <p>Adjust overlay dimensions with width/height inputs for perfect pixel grid
                                            alignment</p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-icon">🔵</div>
                                    <div class="tip-content">
                                        <h4>Toggle Switch</h4>
                                        <p>Use the blue toggle to show/hide the reference image overlay as needed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tip-category">
                            <h3>🎯 Image Positioning & Alignment</h3>
                            <div class="tip-items">
                                <div class="tip-item">
                                    <div class="tip-icon">⌨️</div>
                                    <div class="tip-content">
                                        <h4>Shift + Drag</h4>
                                        <p>Hold Shift while dragging to reposition the overlay image for precise
                                            alignment</p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-icon">📐</div>
                                    <div class="tip-content">
                                        <h4>Pixel Grid Matching</h4>
                                        <p>Align your reference image's pixel grid with Wplace.live's canvas grid for
                                            accurate tracing</p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-icon">👁️</div>
                                    <div class="tip-content">
                                        <h4>Transparent Background</h4>
                                        <p>Reference images with transparent backgrounds work best for clear overlay
                                            visibility</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tip-category">
                            <h3>💡 Workflow Tips</h3>
                            <div class="tip-items">
                                <div class="tip-item">
                                    <div class="tip-icon">📱</div>
                                    <div class="tip-content">
                                        <h4>Optimal Image Size</h4>
                                        <p>Use images with dimensions that match your target canvas size for best
                                            results</p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-icon">🔍</div>
                                    <div class="tip-content">
                                        <h4>Browser Zoom</h4>
                                        <p>Use browser zoom controls to get closer alignment for pixel-perfect tracing
                                        </p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-icon">⚡</div>
                                    <div class="tip-content">
                                        <h4>Quick Toggle</h4>
                                        <p>Toggle the overlay on/off to compare your work with the reference image</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 安装步骤区域 -->
        <section class="installation-section">
            <div class="container">
                <div class="installation-content">
                    <h2 class="section-title">How to Install Wplace Extensions</h2>
                    <p class="section-subtitle">Simple step-by-step guide to get your Wplace Extensions up and running
                    </p>

                    <div class="installation-steps">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h3>Download Wplace Tracer Extension</h3>
                                <p>Click the download button below to visit the Chrome Web Store. Install the Wplace
                                    Tracer Extension with one click - it's completely free and safe.</p>
                                <div class="step-action">
                                    <a href="https://chromewebstore.google.com/detail/wplace-tracer/efkjkoigpkglbkknnfcbdmfipbcdopao"
                                        target="_blank" rel="noopener" class="step-btn">
                                        <span class="btn-icon">⬇️</span>
                                        Download Wplace Tracer Extension
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="step-item">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h3>Enable & Configure Extension</h3>
                                <p>After installation, the extension will automatically activate. You may need to
                                    refresh your browser or visit Wplace.live to see the new overlay features.</p>
                                <div class="step-tip">
                                    <span class="tip-icon">💡</span>
                                    <span>Make sure the extension is enabled in your browser's extension management
                                        page</span>
                                </div>
                                <div class="step-tip">
                                    <span class="tip-icon">🔄</span>
                                    <span>Refresh Wplace.live after installation to ensure the extension is fully
                                        loaded</span>
                                </div>
                            </div>
                        </div>

                        <div class="step-item">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h3>Prepare Your Pixel Art</h3>
                                <p>Use Wplace Tools to create your pixel art, then download it as a PNG file. The higher
                                    quality your reference image, the better your final result will be.</p>
                                <div class="step-tools">
                                    <a href="/pixel-art-generator" class="tool-link">Image to Pixel Art</a>
                                    <a href="/text-to-pixel-art" class="tool-link">Text to Pixel Art</a>
                                </div>
                            </div>
                        </div>

                        <div class="step-item">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h3>Start Creating on Wplace.live</h3>
                                <p>Open Wplace.live, upload your pixel art reference, and use the overlay feature to
                                    trace and create your masterpiece with perfect precision.</p>
                                <div class="step-action">
                                    <a href="https://wplace.live" target="_blank" rel="noopener"
                                        class="step-btn secondary">
                                        <span class="btn-icon">🎨</span>
                                        Go to Wplace.live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="installation-note">
                        <div class="note-icon">🚀</div>
                        <div class="note-content">
                            <h4>Ready to Transform Your Workflow?</h4>
                            <p>Wplace Tracer Extension is the missing link between Wplace Tools and Wplace.live. Start
                                creating
                                professional pixel art today with this powerful Wplace Extension combination!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 浏览器兼容性区域 -->
        <section class="compatibility-section">
            <div class="container">
                <div class="compatibility-content">
                    <h2 class="section-title">Browser Compatibility</h2>
                    <p class="section-subtitle">Our Wplace Extensions are designed to work across all major browsers</p>

                    <div class="browser-grid">
                        <div class="browser-item">
                            <div class="browser-icon">🌐</div>
                            <h3>Google Chrome</h3>
                            <p>Full support with Chrome Web Store integration</p>
                            <span class="status supported">Supported</span>
                        </div>

                        <div class="browser-item">
                            <div class="browser-icon">🦊</div>
                            <h3>Mozilla Firefox</h3>
                            <p>Available through Firefox Add-ons store</p>
                            <span class="status supported">Supported</span>
                        </div>

                        <div class="browser-item">
                            <div class="browser-icon">🔵</div>
                            <h3>Microsoft Edge</h3>
                            <p>Compatible with Edge Add-ons</p>
                            <span class="status supported">Supported</span>
                        </div>

                        <div class="browser-item">
                            <div class="browser-icon">🟠</div>
                            <h3>Safari</h3>
                            <p>Limited support, some features may vary</p>
                            <span class="status limited">Limited</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ 区域 -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-content">
                    <h2 class="section-title">Frequently Asked Questions</h2>
                    <p class="section-subtitle">Everything you need to know about Wplace Extensions</p>

                    <div class="faq-grid">
                        <div class="faq-item">
                            <h3 class="faq-question">Is Wplace Tracer Extension free to use?</h3>
                            <p class="faq-answer">Yes! Wplace Tracer Extension is completely free to download and use.
                                There are
                                no hidden costs, subscription fees, or limitations on functionality.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">What image formats work best with Wplace Tracer Extension?</h3>
                            <p class="faq-answer">PNG format works best for pixel art overlays. You can use images
                                generated from Wplace Tools (Image to Pixel Art or Text to Pixel Art) or any other pixel
                                art you've created.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Can I use Wplace Tracer Extension without Wplace Tools?</h3>
                            <p class="faq-answer">Yes! While Wplace Tracer Extension is designed to work perfectly with
                                Wplace
                                Tools generated pixel art, you can use it with any image you want to overlay on
                                Wplace.live.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">How do I adjust the overlay transparency?</h3>
                            <p class="faq-answer">Wplace Tracer Extension includes transparency controls that allow you
                                to adjust
                                the opacity of your reference image, making it easier to trace while maintaining
                                visibility of your canvas.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">What if the extension doesn't work on Wplace.live?</h3>
                            <p class="faq-answer">First, make sure the extension is enabled in your browser. Refresh the
                                page and try again. If issues persist, check that you're using a supported browser
                                (Chrome recommended).</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Can I use multiple reference images at once?</h3>
                            <p class="faq-answer">Yes! Wplace Tracer Extension supports multiple reference images,
                                allowing you to
                                work with several pixel art pieces simultaneously for complex projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 推荐插件区域 -->
        <section id="download-plugins" class="recommendations-section">
            <div class="container">
                <div class="recommendations-content">
                    <h2 class="section-title">More Recommended Wplace Extensions</h2>
                    <p class="section-subtitle">Discover additional powerful Wplace Extensions for your creative
                        workflow</p>

                    <div class="recommendations-grid">
                        <div class="plugin-card">
                            <div class="plugin-header">
                                <div class="plugin-icon">🎭</div>
                                <div class="plugin-info">
                                    <h3 class="plugin-title">Wplace Animation</h3>
                                    <div class="plugin-meta">
                                        <span class="plugin-version">v1.2.0</span>
                                        <span class="plugin-rating">
                                            <span class="stat-icon">⭐</span>
                                            <span class="stat-value">4.3/5.0</span>
                                        </span>
                                        <span class="plugin-downloads">6K+ downloads</span>
                                    </div>
                                </div>
                                <div class="plugin-status community">Community</div>
                            </div>

                            <div class="plugin-description">
                                <p>Create stunning pixel art animations with frame-by-frame editing tools and timeline
                                    management.</p>

                                <div class="plugin-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        <li>Frame-by-frame animation</li>
                                        <li>Timeline management</li>
                                        <li>Export to GIF/MP4</li>
                                        <li>Onion skinning</li>
                                        <li>Animation preview</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="plugin-actions">
                                <a href="https://chromewebstore.google.com/detail/wplace-tracer/efkjkoigpkglbkknnfcbdmfipbcdopao"
                                    target="_blank" rel="noopener" class="plugin-btn primary">
                                    <span class="btn-icon">⬇️</span>
                                    Download for Chrome
                                </a>
                                <a href="#" class="plugin-btn secondary">
                                    <span class="btn-icon">📖</span>
                                    Documentation
                                </a>
                            </div>
                        </div>

                        <div class="plugin-card">
                            <div class="plugin-header">
                                <div class="plugin-icon">🔍</div>
                                <div class="plugin-info">
                                    <h3 class="plugin-title">Wplace Inspector</h3>
                                    <div class="plugin-meta">
                                        <span class="plugin-version">v1.0.5</span>
                                        <span class="plugin-rating">
                                            <span class="stat-icon">⭐</span>
                                            <span class="stat-value">4.1/5.0</span>
                                        </span>
                                        <span class="plugin-downloads">4K+ downloads</span>
                                    </div>
                                </div>
                                <div class="plugin-status community">Community</div>
                            </div>

                            <div class="plugin-description">
                                <p>Advanced pixel analysis tools with color picker, zoom controls, and detailed
                                    inspection capabilities.</p>

                                <div class="plugin-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        <li>Advanced color picker</li>
                                        <li>Pixel inspection tools</li>
                                        <li>Zoom and pan controls</li>
                                        <li>Color information display</li>
                                        <li>Measurement tools</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="plugin-actions">
                                <a href="https://chromewebstore.google.com/detail/wplace-tracer/efkjkoigpkglbkknnfcbdmfipbcdopao"
                                    target="_blank" rel="noopener" class="plugin-btn primary">
                                    <span class="btn-icon">⬇️</span>
                                    Download for Chrome
                                </a>
                                <a href="#" class="plugin-btn secondary">
                                    <span class="btn-icon">📖</span>
                                    Documentation
                                </a>
                            </div>
                        </div>

                        <div class="plugin-card">
                            <div class="plugin-header">
                                <div class="plugin-icon">📊</div>
                                <div class="plugin-info">
                                    <h3 class="plugin-title">Wplace Analytics</h3>
                                    <div class="plugin-meta">
                                        <span class="plugin-version">v1.1.2</span>
                                        <span class="plugin-rating">
                                            <span class="stat-icon">⭐</span>
                                            <span class="stat-value">4.0/5.0</span>
                                        </span>
                                        <span class="plugin-downloads">3K+ downloads</span>
                                    </div>
                                </div>
                                <div class="plugin-status community">Community</div>
                            </div>

                            <div class="plugin-description">
                                <p>Track your creative progress with detailed statistics, usage analytics, and
                                    performance insights.</p>

                                <div class="plugin-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        <li>Usage statistics</li>
                                        <li>Performance metrics</li>
                                        <li>Progress tracking</li>
                                        <li>Export reports</li>
                                        <li>Goal setting</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="plugin-actions">
                                <a href="https://chromewebstore.google.com/detail/wplace-tracer/efkjkoigpkglbkknnfcbdmfipbcdopao"
                                    target="_blank" rel="noopener" class="plugin-btn primary">
                                    <span class="btn-icon">⬇️</span>
                                    Download for Chrome
                                </a>
                                <a href="#" class="plugin-btn secondary">
                                    <span class="btn-icon">📖</span>
                                    Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 开始使用区域 -->
        <section id="get-started" class="get-started-section">
            <div class="container">
                <div class="get-started-content">
                    <h2 class="section-title">Ready to Enhance Your Wplace.live Experience?</h2>
                    <p class="section-subtitle">Download Wplace Extensions and start creating with enhanced tools</p>

                    <div class="get-started-buttons">
                        <a href="https://wplace.live/" target="_blank" rel="noopener" class="get-started-btn primary">
                            <span class="btn-icon">🔌</span>
                            Visit Wplace.live
                        </a>
                        <a href="#" @click.prevent="scrollToSection('download-plugins')"
                            class="get-started-btn secondary" style="cursor: pointer;">
                            <span class="btn-icon">📋</span>
                            Browse All Wplace Extensions
                        </a>
                    </div>

                    <div class="get-started-note">
                        Free Wplace Extensions • Official support • Community driven • Easy installation
                    </div>

                    <div class="wplace-info">
                        <p>All Wplace Extensions are designed to work seamlessly with <a href="https://wplace.live/"
                                target="_blank" rel="noopener">wplace.live</a> - your ultimate creative platform.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'WplacePluginsView',
    mounted() {
        console.log('WplacePluginsView mounted');
    },
    methods: {
        scrollToSection(sectionId) {
            console.log('Scrolling to section:', sectionId);
            const element = document.getElementById(sectionId);
            if (element) {
                console.log('Element found, scrolling...');
                try {
                    // 动态获取Header高度
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 70; // 默认70px
                    const elementTop = element.offsetTop;
                    const scrollTop = elementTop - headerHeight - 20; // 额外减去20px作为缓冲

                    console.log('Header height:', headerHeight, 'Element top:', elementTop, 'Scroll to:', scrollTop);

                    window.scrollTo({
                        top: scrollTop,
                        behavior: 'smooth'
                    });
                } catch (error) {
                    console.log('scrollTo failed, using scrollIntoView as fallback');
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                console.error('Element not found:', sectionId);
            }
        }
    }
}
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

.wplace-extensions-view {
    background: #f8f9fa;
}

/* 确保滚动目标区域有足够的顶部间距 */
.workflow-section,
.recommendations-section {
    scroll-margin-top: 90px;
    /* Header高度 + 缓冲空间 */
}

/* Banner 区域样式 */
.banner-section {
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    padding: 50px 0;
    text-align: center;
}

.top-hint {
    background: rgba(255, 255, 255, 0.2);
    padding: 6px 12px;
    border-radius: 16px;
    display: inline-block;
    margin-bottom: 15px;
    font-size: 13px;
    font-weight: 600;
}

.main-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.2;
}

.highlight {
    color: #e0f7fa;
}

.description-text {
    max-width: 800px;
    margin: 0 auto 30px;
    font-size: 16px;
    line-height: 1.5;
}

.description-text p {
    margin-bottom: 8px;
}

.feature-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
}

.feature-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 15px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
}

.feature-btn.primary {
    background: white;
    color: #00bcd4;
}

.feature-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.feature-btn.secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.feature-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.btn-icon {
    font-size: 18px;
}

.bottom-hint {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    font-size: 14px;
    opacity: 0.9;
}

.hint-icon {
    font-size: 16px;
}

/* Wplace Tracer 介绍区域样式 */
.tracer-intro-section {
    background: white;
    padding: 50px 0;
}

.tracer-intro-content {
    text-align: center;
}

.tracer-overview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 40px;
    align-items: start;
}

.tracer-main-info {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.tracer-icon {
    font-size: 60px;
    flex-shrink: 0;
}

.tracer-details h3 {
    font-size: 24px;
    font-weight: 700;
    color: #1976d2;
    margin: 0 0 15px 0;
}

.tracer-stats {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f5f5f5;
    padding: 6px 12px;
    border-radius: 16px;
}

.stat-icon {
    font-size: 14px;
    color: #ffc107;
}

.stat-value {
    font-size: 13px;
    font-weight: 600;
    color: #333;
}

.tracer-description {
    color: #666;
    line-height: 1.5;
    font-size: 15px;
    text-align: left;
}

.tracer-features {
    text-align: left;
}

.tracer-features h4 {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}

.tracer-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tracer-features li {
    color: #666;
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    font-size: 15px;
}

.tracer-features li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
    font-size: 18px;
}

/* 通用标题样式 */
.section-title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
    color: #333;
}

.section-subtitle {
    font-size: 16px;
    text-align: center;
    color: #666;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* 工作流程区域样式 */
.workflow-section {
    background: #f8f9fa;
    padding: 50px 0;
}

/* 使用技巧区域样式 */
.tips-section {
    background: white;
    padding: 50px 0;
}

.tips-content {
    text-align: center;
}

.tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.tip-category {
    background: #f8f9fa;
    border-radius: 16px;
    padding: 30px 25px;
    text-align: left;
}

.tip-category h3 {
    color: #333;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
}

.tip-items {
    display: grid;
    gap: 20px;
}

.tip-item {
    display: flex;
    gap: 15px;
    align-items: flex-start;
}

.tip-icon {
    font-size: 24px;
    flex-shrink: 0;
    margin-top: 3px;
}

.tip-content h4 {
    color: #1976d2;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
}

.tip-content p {
    color: #666;
    line-height: 1.5;
    font-size: 14px;
    margin: 0;
}

.workflow-content {
    text-align: center;
}

.workflow-steps {
    display: grid;
    gap: 25px;
    margin-top: 40px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.workflow-step {
    display: flex;
    gap: 25px;
    align-items: flex-start;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.step-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    flex-shrink: 0;
}

.step-content {
    flex: 1;
    text-align: left;
}

.step-content h3 {
    color: #333;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
}

.step-content p {
    color: #666;
    line-height: 1.5;
    font-size: 15px;
    margin-bottom: 15px;
}

.step-tools {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tool-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 600;
}

.step-action {
    margin-top: 20px;
}

.step-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    background: #1976d2;
    color: white;
}

.step-btn:hover {
    background: #1565c0;
    transform: translateY(-2px);
}

.step-btn.secondary {
    background: #f5f5f5;
    color: #666;
    border: 1px solid #e0e0e0;
}

.step-btn.secondary:hover {
    background: #e0e0e0;
}

.step-tip {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff3e0;
    color: #f57c00;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
}

.tip-icon {
    font-size: 16px;
}

.tool-link {
    color: #1976d2;
    text-decoration: none;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 16px;
    background: #e3f2fd;
    transition: all 0.3s ease;
}

.tool-link:hover {
    background: #bbdefb;
    transform: translateY(-1px);
}

.workflow-benefits {
    margin-top: 50px;
    text-align: center;
}

.workflow-benefits h3 {
    color: #333;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.benefit-item {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 30px 25px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.benefit-icon {
    font-size: 36px;
    margin-bottom: 15px;
}

.benefit-item h4 {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
}

.benefit-item p {
    color: #666;
    line-height: 1.5;
    font-size: 15px;
}

/* 插件列表区域样式 */
.plugins-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.plugins-content {
    text-align: center;
}

.plugins-grid {
    display: grid;
    gap: 30px;
    margin-top: 60px;
}

.plugin-card {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plugin-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.plugin-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}

.plugin-icon {
    font-size: 48px;
    width: 60px;
    text-align: center;
}

.plugin-info {
    flex: 1;
}

.plugin-title {
    font-size: 28px;
    font-weight: 700;
    color: #1976d2;
    margin: 0 0 10px 0;
}

.plugin-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.plugin-version {
    background: #e3f2fd;
    color: #1976d2;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
}

.plugin-rating {
    display: flex;
    align-items: center;
    gap: 6px;
}

.stat-icon {
    font-size: 16px;
    color: #ffc107;
}

.stat-value {
    font-size: 14px;
    font-weight: 600;
    color: #333;
}

.plugin-downloads {
    color: #666;
    font-size: 14px;
}

.plugin-status {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.plugin-status.official {
    background: #e8f5e8;
    color: #2e7d32;
}

.plugin-status.community {
    background: #fff3e0;
    color: #f57c00;
}

.plugin-description {
    margin-bottom: 30px;
}

.plugin-description p {
    color: #666;
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 20px;
}

.plugin-features h4 {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}

.plugin-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.plugin-features li {
    color: #666;
    padding: 8px 0;
    padding-left: 20px;
    position: relative;
    font-size: 15px;
}

.plugin-features li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
}

.plugin-actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.plugin-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    min-width: 140px;
    justify-content: center;
}

.plugin-btn.primary {
    background: #1976d2;
    color: white;
}

.plugin-btn.primary:hover {
    background: #1565c0;
    transform: translateY(-2px);
}

.plugin-btn.secondary {
    background: #f5f5f5;
    color: #666;
    border: 1px solid #e0e0e0;
}

.plugin-btn.secondary:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
}

/* 安装步骤区域样式 */
.installation-section {
    background: white;
    padding: 50px 0;
}

.installation-content {
    text-align: center;
}

.installation-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.step-item {
    text-align: center;
}

.step-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    margin: 0 auto 15px;
}

.step-content h3 {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
}

.step-content p {
    color: #666;
    line-height: 1.5;
    font-size: 15px;
}

.installation-note {
    background: #e3f2fd;
    border: 1px solid #bbdefb;
    border-radius: 12px;
    padding: 25px;
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.note-icon {
    font-size: 28px;
    flex-shrink: 0;
}

.note-content h4 {
    color: #1976d2;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
}

.note-content p {
    color: #1976d2;
    line-height: 1.5;
    font-size: 15px;
    margin: 0;
}

/* 浏览器兼容性区域样式 */
.compatibility-section {
    background: #f8f9fa;
    padding: 50px 0;
}

.compatibility-content {
    text-align: center;
}

.browser-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.browser-item {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 30px 25px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.browser-icon {
    font-size: 36px;
    margin-bottom: 15px;
}

.browser-item h3 {
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
}

.browser-item p {
    color: #666;
    line-height: 1.5;
    font-size: 15px;
    margin-bottom: 15px;
}

.status {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
}

.status.supported {
    background: #e8f5e8;
    color: #2e7d32;
}

.status.limited {
    background: #fff3e0;
    color: #f57c00;
}

/* FAQ 区域样式 */
.faq-section {
    background: white;
    padding: 50px 0;
}

.faq-content {
    text-align: center;
}

.faq-grid {
    display: grid;
    gap: 25px;
    margin-top: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.faq-item {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    text-align: left;
}

.faq-question {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
}

.faq-answer {
    color: #666;
    line-height: 1.5;
    font-size: 15px;
    margin: 0;
}

/* 推荐插件区域样式 */
.recommendations-section {
    background: #f8f9fa;
    padding: 50px 0;
}

.recommendations-content {
    text-align: center;
}

.recommendations-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
}

.recommendations-grid .plugin-card {
    margin: 0;
}

/* 开始使用区域样式 */
.get-started-section {
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    padding: 50px 0;
    text-align: center;
}

.get-started-content .section-title,
.get-started-content .section-subtitle {
    color: white;
}

.get-started-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
}

.get-started-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 15px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
}

.get-started-btn.primary {
    background: white;
    color: #00bcd4;
}

.get-started-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.get-started-btn.secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.get-started-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.get-started-note {
    font-size: 14px;
    opacity: 0.9;
    margin: 0 0 25px 0;
}

.wplace-info {
    background: rgba(255, 255, 255, 0.1);
    padding: 18px;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
}

.wplace-info p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
}

.wplace-info a {
    color: white;
    text-decoration: underline;
    font-weight: 600;
}

.wplace-info a:hover {
    color: #e0f7fa;
}

/* 响应式设计 */
@media (max-width: 1024px) {

    .banner-section,
    .tracer-intro-section,
    .workflow-section,
    .tips-section,
    .plugins-section,
    .installation-section,
    .compatibility-section,
    .faq-section,
    .recommendations-section,
    .get-started-section {
        padding: 60px 0;
    }

    .main-title {
        font-size: 40px;
    }

    .section-title {
        font-size: 32px;
    }

    .tracer-overview {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .workflow-steps {
        gap: 30px;
    }

    .tips-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .installation-steps,
    .browser-grid,
    .recommendations-grid {
        gap: 25px;
    }

    .recommendations-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .plugin-card {
        padding: 30px 25px;
    }

    .plugin-header {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .plugin-meta {
        justify-content: center;
    }
}

@media (max-width: 768px) {

    .banner-section,
    .tracer-intro-section,
    .workflow-section,
    .tips-section,
    .plugins-section,
    .installation-section,
    .compatibility-section,
    .faq-section,
    .recommendations-section,
    .get-started-section {
        padding: 40px 0;
    }

    .main-title {
        font-size: 32px;
    }

    .section-title {
        font-size: 28px;
    }

    .section-subtitle {
        font-size: 16px;
        margin-bottom: 40px;
    }

    .description-text {
        font-size: 16px;
    }

    .feature-buttons {
        flex-direction: column;
        gap: 15px;
    }

    .feature-btn {
        padding: 16px 28px;
        font-size: 16px;
        justify-content: center;
    }

    .tracer-overview {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .workflow-steps {
        gap: 20px;
    }

    .workflow-step {
        flex-direction: column;
        text-align: center;
        padding: 30px 25px;
    }

    .step-content {
        text-align: center;
    }

    .tips-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .installation-steps,
    .browser-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .recommendations-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .plugin-card {
        padding: 25px 20px;
    }

    .plugin-title {
        font-size: 24px;
    }

    .plugin-actions {
        flex-direction: column;
        gap: 10px;
    }

    .plugin-btn {
        width: 100%;
        justify-content: center;
    }

    .installation-note {
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    .get-started-buttons {
        flex-direction: column;
        gap: 15px;
    }

    .get-started-btn {
        padding: 16px 28px;
        font-size: 16px;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 28px;
    }

    .section-title {
        font-size: 24px;
    }

    .plugin-card {
        padding: 20px 15px;
    }

    .plugin-title {
        font-size: 20px;
    }

    .plugin-meta {
        flex-direction: column;
        gap: 10px;
    }

    .workflow-step {
        padding: 20px 15px;
    }

    .step-number {
        width: 50px;
        height: 50px;
        font-size: 20px;
    }

    .tip-category {
        padding: 25px 20px;
    }

    .tip-item {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .recommendations-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}
</style>

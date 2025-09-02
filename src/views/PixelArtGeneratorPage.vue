<template>
    <div class="pixel-art-generator-page">
        <!-- 主功能组件 -->
        <div class="main-component-section">
            <div class="container">
                <div class="component-content">
                    <div class="generator-header">
                        <h1>Wplace Image To Pixel Art Generator</h1>
                        <p>Upload images, convert to pixel art, automatically re-analyze and prioritize filling selected
                            colors</p>
                    </div>
                    <PixelArtGeneratorUnified />
                </div>
            </div>
        </div>

        <!-- 功能介绍区域 -->
        <section class="features-section">
            <div class="container">
                <div class="features-content">
                    <h2 class="section-title">Image to Pixel Art Converter Features</h2>
                    <p class="section-subtitle">Professional image processing tools with advanced pixel art conversion
                        capabilities</p>

                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🖼️</div>
                            <h3 class="feature-title">Multi-Format Support</h3>
                            <p class="feature-description">Support PNG, JPG, JPEG, GIF, WebP and other popular image
                                formats. Upload images of any size and resolution.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">⚙️</div>
                            <h3 class="feature-title">Adjustable Parameters</h3>
                            <p class="feature-description">Fine-tune pixel size (1-32px), image dimensions, and enable
                                grid display for precise control over the final result.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">🎨</div>
                            <h3 class="feature-title">64-Color Palette</h3>
                            <p class="feature-description">Professional 64-color palette system with premium colors
                                requiring points. Intelligent color mapping and replacement.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">📊</div>
                            <h3 class="feature-title">Usage Statistics</h3>
                            <p class="feature-description">Real-time color usage statistics, pixel count tracking, and
                                points calculation for premium color usage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 使用说明区域 -->
        <section class="instructions-section">
            <div class="container">
                <div class="instructions-content">
                    <h2 class="section-title">How to Use Image to Pixel Art Converter</h2>
                    <p class="section-subtitle">Step-by-step guide to create beautiful pixel art from your images</p>

                    <div class="instructions-grid">
                        <div class="instruction-step">
                            <div class="step-number">1</div>
                            <h3 class="step-title">Upload Your Image</h3>
                            <p class="step-description">Click the upload area or drag and drop your image file.
                                Supported formats include PNG, JPG, JPEG, GIF, and WebP.</p>
                        </div>

                        <div class="instruction-step">
                            <div class="step-number">2</div>
                            <h3 class="step-title">Adjust Settings</h3>
                            <p class="step-description">Set your desired pixel size (1-32px), choose image dimensions,
                                and toggle grid display for better visualization.</p>
                        </div>

                        <div class="instruction-step">
                            <div class="step-number">3</div>
                            <h3 class="step-title">Review & Customize</h3>
                            <p class="step-description">Examine the color usage statistics, replace colors as needed,
                                and fine-tune the pixel art appearance.</p>
                        </div>

                        <div class="instruction-step">
                            <div class="step-number">4</div>
                            <h3 class="step-title">Download Result</h3>
                            <p class="step-description">Download your pixel art in PNG format. Choose between small size
                                (pixel perfect) or large size (scaled) versions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 技术特点区域 -->
        <section class="tech-section">
            <div class="container">
                <div class="tech-content">
                    <h2 class="section-title">Technical Features</h2>
                    <p class="section-subtitle">Advanced algorithms and processing capabilities</p>

                    <div class="tech-grid">
                        <div class="tech-item">
                            <h3>Local Processing</h3>
                            <p>All image processing happens in your browser, ensuring privacy and security. Your images
                                are never uploaded to our servers.</p>
                        </div>

                        <div class="tech-item">
                            <h3>Color Distance Algorithm</h3>
                            <p>Advanced color mapping algorithm that finds the closest match from our 64-color palette
                                for optimal pixel art results.</p>
                        </div>

                        <div class="tech-item">
                            <h3>Real-time Preview</h3>
                            <p>Instant preview of pixel art results as you adjust parameters. What you see is exactly
                                what you'll get.</p>
                        </div>

                        <div class="tech-item">
                            <h3>Batch Processing Ready</h3>
                            <p>Process multiple images efficiently with consistent settings and parameters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 常见问题区域 -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-content">
                    <h2 class="section-title">Frequently Asked Questions</h2>
                    <p class="section-subtitle">Everything you need to know about image to pixel art conversion</p>

                    <div class="faq-grid">
                        <div class="faq-item">
                            <h3 class="faq-question">What's the best pixel size for my image?</h3>
                            <p class="faq-answer">Smaller pixel sizes (1-8px) create more detailed pixel art, while
                                larger sizes (16-32px) create more abstract, retro-style effects. Choose based on your
                                desired aesthetic.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">How does the color replacement work?</h3>
                            <p class="faq-answer">Click on any color in the usage statistics to open the replacement
                                dialog. Select a new color from the palette to replace all instances of that color in
                                your pixel art.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">What are premium colors and points?</h3>
                            <p class="faq-answer">Premium colors are special colors in our palette that require points
                                to use. Points are earned through usage and can be spent to access these exclusive
                                colors.</p>
                        </div>

                        <div class="faq-item">
                            <h3 class="faq-question">Can I use the converter for commercial projects?</h3>
                            <p class="faq-answer">Yes! All pixel art generated with our tool is free for personal and
                                commercial use. The tool is designed to help creators of all levels.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PixelArtGeneratorUnified from '@/components/PixelArtGeneratorUnified.vue'

export default {
    name: 'PixelArtGeneratorPage',
    components: {
        PixelArtGeneratorUnified
    }
}
</script>

<style scoped>
.pixel-art-generator-page {
    min-height: 100vh;
    background: #f8f9fa;
}

.generator-header {
    text-align: center;
    margin-bottom: 30px;
}

.generator-header h1 {
    color: #333;
    margin-bottom: 10px;
}

.generator-header p {
    color: #666;
    font-size: 14px;
}

/* 主组件区域样式 */
.main-component-section {
    background: white;
    padding: 40px 0;
    border-bottom: 1px solid #e9ecef;
}

.component-content {
    max-width: 1200px;
    margin: 0 auto;
}

/* 通用区域样式 */
.section-title {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.section-subtitle {
    font-size: 18px;
    text-align: center;
    color: #666;
    margin-bottom: 60px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* 功能介绍区域样式 */
.features-section {
    background: white;
    padding: 80px 0;
}

.features-content {
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.feature-card {
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.feature-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.feature-description {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* 使用说明区域样式 */
.instructions-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.instructions-content {
    text-align: center;
}

.instructions-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.instruction-step {
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.instruction-step:hover {
    transform: translateY(-5px);
}

.step-number {
    width: 60px;
    height: 60px;
    background: #00bcd4;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    margin: 0 auto 20px;
}

.step-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.step-description {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* 技术特点区域样式 */
.tech-section {
    background: white;
    padding: 80px 0;
}

.tech-content {
    text-align: center;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

.tech-item {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    text-align: left;
}

.tech-item h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.tech-item p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
}

/* FAQ 区域样式 */
.faq-section {
    background: #f8f9fa;
    padding: 80px 0;
}

.faq-content {
    text-align: center;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.faq-item {
    background: white;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
}

.faq-question {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
}

.faq-answer {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* 响应式设计 */
@media (max-width: 1024px) {

    .features-section,
    .instructions-section,
    .tech-section,
    .faq-section {
        padding: 60px 0;
    }

    .generator-header {
        margin-bottom: 10px;
    }

    .generator-header h1 {
        font-size: 20px;
    }

    .generator-header p {
        font-size: 13px;
    }

    .section-title {
        font-size: 28px;
    }

    .section-subtitle {
        font-size: 16px;
        margin-bottom: 40px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    .instructions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    .tech-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .feature-card,
    .instruction-step,
    .tech-item,
    .faq-item {
        padding: 30px 25px;
    }
}

@media (max-width: 768px) {

    .features-section,
    .instructions-section,
    .tech-section,
    .faq-section {
        padding: 40px 0;
    }

    .generator-header h1 {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .generator-header p {
        font-size: 12px;
    }

    .section-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .section-subtitle {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .instructions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .faq-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .feature-card,
    .instruction-step,
    .tech-item,
    .faq-item {
        padding: 10px;
    }

    .feature-icon,
    .step-number {
        font-size: 28px;
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
    }

    .feature-title,
    .step-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .feature-description,
    .step-description {
        font-size: 12px;
    }

    .tech-item h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .tech-item p {
        font-size: 12px;
    }

    .faq-question {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .faq-answer {
        font-size: 12px;
    }
}
</style>

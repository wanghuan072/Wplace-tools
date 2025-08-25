<template>
    <div class="about-view">
        <div class="container">
            <div class="about-content">
                <div class="about-header">
                    <h1 class="about-title">About Us</h1>
                    <p class="about-subtitle">Professional pixel art conversion tool development team</p>
                </div>

                <div class="about-sections">
                    <div class="about-section">
                        <h2>Our Mission</h2>
                        <p>Wplace Tracer is committed to providing pixel art enthusiasts with the most professional and
                            user-friendly conversion tools. We believe that everyone can create unique pixel art works,
                            and
                            our tools are your creative assistants.</p>
                    </div>

                    <div class="about-section">
                        <h2>Core Features</h2>
                        <div class="features-list">
                            <div class="feature-item">
                                <h3>Image to Pixel Art</h3>
                                <p>Support multiple image formats, intelligent algorithms convert your images into
                                    beautiful
                                    pixel art works. Adjustable pixel size to meet different creative needs.</p>
                            </div>
                            <div class="feature-item">
                                <h3>Text to Pixel Art</h3>
                                <p>Convert text to pixel art fonts, support multiple font styles and sizes. Create
                                    unique
                                    pixel-style text effects.</p>
                            </div>
                        </div>
                    </div>

                    <div class="about-section">
                        <h2>Technical Advantages</h2>
                        <ul class="tech-list">
                            <li>Advanced image processing algorithms</li>
                            <li>Local processing, privacy protection</li>
                            <li>Real-time preview, what you see is what you get</li>
                            <li>Support multiple formats and parameter adjustments</li>
                            <li>Fast and efficient processing speed</li>
                        </ul>
                    </div>

                    <div class="about-section">
                        <h2>Contact Us</h2>
                        <p>If you have any questions, suggestions or feedback, please feel free to contact us:</p>
                        <div class="contact-info">
                            <p>Email: contact@wplace-tracer.com</p>
                            <p>Working hours: Monday to Friday 9:00-18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView'
}
</script>

<style scoped>
.about-view {
    background: #f8f9fa;
    min-height: 100vh;
    padding: 40px 0;
}

.about-content {
    background: white;
    border-radius: 12px;
    padding: 60px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.about-header {
    text-align: center;
    margin-bottom: 60px;
}

.about-title {
    font-size: 48px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
}

.about-subtitle {
    font-size: 20px;
    color: #666;
    line-height: 1.6;
}

.about-sections {
    max-width: 800px;
    margin: 0 auto;
}

.about-section {
    margin-bottom: 50px;
}

.about-section:last-child {
    margin-bottom: 0;
}

.about-section h2 {
    font-size: 28px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 3px solid #00bcd4;
    padding-bottom: 10px;
}

.about-section p {
    font-size: 16px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 15px;
}

.features-list {
    display: grid;
    gap: 30px;
}

.feature-item h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
}

.tech-list {
    list-style: none;
    padding: 0;
}

.tech-list li {
    font-size: 16px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 10px;
    padding-left: 25px;
    position: relative;
}

.tech-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #00bcd4;
    font-weight: bold;
    font-size: 18px;
}

.contact-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #00bcd4;
}

.contact-info p {
    margin-bottom: 10px;
    font-weight: 500;
}

.contact-info p:last-child {
    margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .about-view {
        padding: 30px 0;
    }

    .about-content {
        padding: 40px;
    }

    .about-header {
        margin-bottom: 40px;
    }

    .about-title {
        font-size: 36px;
    }

    .about-subtitle {
        font-size: 18px;
    }

    .about-section h2 {
        font-size: 24px;
    }

    .about-section {
        margin-bottom: 40px;
    }
}

@media (max-width: 768px) {
    .about-view {
        padding: 20px 0;
    }

    .about-content {
        padding: 25px 20px;
    }

    .about-header {
        margin-bottom: 30px;
    }

    .about-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .about-subtitle {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .about-section h2 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .about-section {
        margin-bottom: 20px;
    }

    .about-section p {
        font-size: 12px;
    }

    .feature-item h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .tech-list li {
        font-size: 12px;
    }
}
</style>

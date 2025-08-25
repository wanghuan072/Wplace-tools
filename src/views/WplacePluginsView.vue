<template>
    <div class="wplace-plugins-view">
        <!-- 插件列表区域 -->
        <section class="plugins-section">
            <div class="container">
                <div class="plugins-content">
                    <h2 class="section-title">Available Plugins</h2>
                    <p class="section-subtitle">Official and community plugins for Wplace.live</p>

                    <div class="plugins-grid">
                        <!-- Wplace BlueMarble 插件 -->
                        <div class="plugin-card">
                            <div class="plugin-left">
                                <div class="plugin-header">
                                    <div class="plugin-title-section">
                                        <h3 class="plugin-title">Wplace BlueMarble</h3>
                                        <div class="plugin-rating">
                                            <span class="stat-icon">⭐</span>
                                            <span class="stat-value">3.6/5.0</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="plugin-description">
                                    Overlay images on wplace.live to help in drawing by tracing on them
                                    Add overlay on wplace.live to help drawing by tracing
                                </div>
                            </div>

                            <div class="plugin-right">
                                <div class="plugin-actions">
                                    <a href="https://chromewebstore.google.com/detail/wplace-tracer/efkjkoigpkglbkknnfcbdmfipbcdopao"
                                        target="_blank" rel="noopener" class="plugin-btn primary">
                                        <span class="btn-icon">⬇️</span>
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 开始使用区域 -->
        <section class="get-started-section">
            <div class="container">
                <div class="get-started-content">
                    <h2 class="section-title">Ready to Enhance Wplace.live?</h2>
                    <p class="section-subtitle">Download plugins and start creating with enhanced tools</p>

                    <div class="get-started-buttons">
                        <a href="https://wplace.live/" target="_blank" rel="noopener" class="get-started-btn primary">
                            <span class="btn-icon">🔌</span>
                            Visit Wplace.live
                        </a>
                    </div>
                    <p class="get-started-note">Free plugins • Official support • Community driven • Easy installation
                    </p>

                    <div class="wplace-info">
                        <p>All plugins are designed to work seamlessly with <a href="https://wplace.live/"
                                target="_blank" rel="noopener">wplace.live</a> - your ultimate creative platform.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'WplacePluginsView'
}
</script>

<style scoped>
.wplace-plugins-view {
    background: #f8f9fa;
}

/* 插件列表区域样式 */
.plugins-section {
    background: white;
    padding: 60px 0;
}

.plugins-content {
    text-align: center;
}

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
    margin-bottom: 50px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.plugins-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
}

.plugin-card {
    width: 100%;
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    position: relative;
    display: flex;
    gap: 30px;
}

.plugin-card:hover {
    transform: translateY(-5px);
}

.plugin-left {
    flex: 1;
    text-align: left;
}

.plugin-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
}

.plugin-title-section {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 15px;
}

.plugin-title {
    font-size: 24px;
    font-weight: 700;
    color: #1976d2;
    margin: 0;
}

.plugin-rating {
    display: flex;
    align-items: center;
    gap: 6px;
}

.plugin-description {
    text-align: left;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.5;
    color: #666;
}

.plugin-stats {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.stat-icon {
    font-size: 16px;
}

.stat-value {
    font-size: 13px;
    font-weight: 600;
    color: #333;
}


.plugin-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}

.plugin-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    min-width: 100px;
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

.btn-icon {
    font-size: 14px;
}

.plugin-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 120px;
}

/* 开始使用区域样式 */
.get-started-section {
    background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
    color: white;
    padding: 60px 0;
    text-align: center;
}

.get-started-content .section-title,
.get-started-content .section-subtitle {
    color: white;
}

.get-started-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.get-started-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 18px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
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

.get-started-note {
    font-size: 16px;
    opacity: 0.9;
    margin: 0 0 30px 0;
}

.wplace-info {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
}

.wplace-info p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
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

    .plugins-section,
    .get-started-section {
        padding: 50px 0;
    }

    .section-title {
        font-size: 32px;
    }

    .section-subtitle {
        font-size: 18px;
        margin-bottom: 40px;
    }

    .plugins-grid {
        gap: 25px;
    }

    .plugin-card {
        flex-direction: column;
        text-align: center;
        padding: 30px 25px;
        gap: 10px;
    }

    .plugin-right {
        min-width: auto;
    }

    .plugin-actions {
        justify-content: center;
    }

    .get-started-buttons {
        gap: 15px;
    }

    .get-started-btn {
        padding: 16px 28px;
        font-size: 16px;
    }
}

@media (max-width: 768px) {

    .plugins-section,
    .get-started-section {
        padding: 40px 0;
    }

    .section-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .section-subtitle {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .plugins-grid {
        gap: 10px;
    }

    .plugin-card {
        padding: 10px;

    }

    .plugin-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .plugin-description {
        font-size: 12px;
        line-height: 1.5;
    }

    .plugin-btn {
        padding: 10px 20px;
        font-size: 12px;
        min-width: 80px;
    }

    .get-started-buttons {
        flex-direction: column;
        gap: 15px;
    }

    .get-started-btn {
        padding: 15px 25px;
        font-size: 16px;
        justify-content: center;
    }

    .get-started-note {
        font-size: 14px;
        margin-bottom: 25px;
    }

    .wplace-info {
        padding: 15px;
        margin: 0 15px;
    }

    .wplace-info p {
        font-size: 14px;
    }
}
</style>

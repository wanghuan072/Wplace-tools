<template>
    <div class="color-converter-page">
        <!-- 主功能组件：与图片像素化工具一致 -->
        <section class="main-component-section">
            <div class="container">
                <div class="component-content">
                    <div class="generator-header">
                        <h1>Color & Wplace 64-Color Palette</h1>
                        <p>Explore and copy our 64-color system, plus convert images with the unified tool.</p>
                    </div>
                    <PixelArtGeneratorUnified />
                </div>
            </div>
        </section>

        <!-- 颜色集合：Standard / Premium 两组，可复制 HEX，Premium 显示锁 -->
        <section class="palette-section">
            <div class="container">
                <div class="palette-content">
                    <h2 class="section-title">Standard Colors</h2>
                    <p class="section-subtitle">Instantly copy HEX values from the standard subset of Wplace colors</p>

                    <div class="color-grid">
                        <div v-for="(item, idx) in standardColors" :key="'std-' + idx" class="color-card"
                            :style="{ backgroundColor: item.hex }" role="button" :aria-label="`Copy ${item.hex}`"
                            tabindex="0" @click="copyHex(item.hex)" @keydown.enter.prevent="copyHex(item.hex)">
                            <div class="color-top">
                                <span class="hex">{{ item.hex }}</span>
                            </div>
                            <button class="copy-btn" @click.stop="copyHex(item.hex)"
                                :title="`Copy ${item.hex}`">Copy</button>
                            <div v-if="copiedHex === item.hex" class="copied" aria-live="polite">Copied</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="palette-section">
            <div class="container">
                <div class="palette-content">
                    <h2 class="section-title">Premium Wplace.live</h2>
                    <p class="section-subtitle">Premium colors are marked with a lock and can also be copied</p>

                    <div class="color-grid">
                        <div v-for="(item, idx) in premiumColors" :key="'pre-' + idx" class="color-card"
                            :class="{ 'need-points': item.requiresPoints }" :style="{ backgroundColor: item.hex }"
                            role="button" :aria-label="`Copy ${item.hex}`" tabindex="0" @click="copyHex(item.hex)"
                            @keydown.enter.prevent="copyHex(item.hex)">
                            <div class="color-top">
                                <span class="hex">{{ item.hex }}</span>
                            </div>
                            <svg class="lock-indicator" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path
                                    d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-7-2a2 2 0 014 0v2H10V7zm3 9a2 2 0 11.001-3.999A2 2 0 0113 16z" />
                            </svg>
                            <button class="copy-btn" @click.stop="copyHex(item.hex)"
                                :title="`Copy ${item.hex}`">Copy</button>
                            <div v-if="copiedHex === item.hex" class="copied" aria-live="polite">Copied</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Section -->
        <section class="features-section">
            <div class="container">
                <div class="features-content">
                    <h2 class="section-title">Why Choose Wplace Color?</h2>
                    <p class="section-subtitle">The ultimate color and 64‑color palette companion for pixel art</p>

                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795687798" class="icon" viewBox="0 0 1248 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="87341" width="200" height="200">
                                    <path
                                        d="M1152.686829 1019.916488H96.03122c-52.823415 0-96.043707-42.708293-96.043708-94.894829V450.684878c0-52.186537 43.23278-94.894829 96.043708-94.894829h230.574829L569.194146 116.261463a74.01522 74.01522 0 0 1-16.821073-45.043512C552.360585 30.882341 583.605073 0 624.390244 0s72.029659 30.844878 72.029658 71.205463c0 16.60878-7.242927 33.217561-16.771122 45.043513l242.513171 239.541073h230.524878c52.860878 0 96.093659 42.708293 96.093659 94.907317v474.324293c0 52.199024-43.23278 94.907317-96.093659 94.907317zM636.366049 140.00078c-4.782829 0-9.628098 2.397659-11.975805 2.397659-2.347707 0-9.640585 0-11.988293-2.397659l-218.536585 215.789269h461.049756l-218.536585-215.789269z m540.38478 360.485464V450.684878c0-14.22361-9.640585-23.701854-24.064-23.701854H96.03122c-14.373463 0-24.014049 9.490732-24.014049 23.701854v474.336781c0 14.22361 9.640585 23.801756 24.014049 23.801756h1056.643121c14.423415 0 24.064-9.578146 24.064-23.801756V500.486244z m-312.195122 66.44761h163.278049v47.403707h-103.224195v47.391219h96.093659v42.708293h-96.093659v47.403707h103.224195v47.50361H864.555707V566.946341z m-213.753756 0H814.08v47.403707h-103.224195v47.391219h96.093658v42.708293h-96.093658v47.403707h103.224195v47.50361H650.801951V566.946341z m-105.634341 234.808195l-40.885073-83.018927h-31.194537v83.018927h-60.003902V566.946341h100.839024c60.053854 0 91.24839 28.484683 91.24839 78.22361 0 28.497171-14.373463 54.534244-40.835122 66.310244l48.028098 90.211903h-67.18439v0.049951z m-38.437464-189.752195h-36.039805v66.410146h36.039805c21.61639 0 35.989854-11.925854 35.989854-33.28 0-18.906537-14.360976-33.130146-35.989854-33.130146z m-240.165463 56.881951h93.596097v45.056h-91.198439v87.814244H208.920976V566.946341h160.892878v47.39122h-100.839025v54.534244h-2.397658z"
                                        fill="#08c2f9" p-id="87342"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">100% Free</h3>
                            <p class="feature-description">No logins, no subscriptions, no limits. Convert and copy as
                                much as you want.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795785084" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="89218" width="200" height="200">
                                    <path
                                        d="M64 512c0 160.055 85.388 307.952 224 387.98 138.612 80.027 309.388 80.027 448 0C874.612 819.951 960 672.054 960 512c0-247.424-200.576-448-448-448S64 264.576 64 512z"
                                        fill="#E78AF2" p-id="89219"></path>
                                    <path
                                        d="M315.132 288.532c20.68 6.647 47.503 5.775 80.55-3.264 34.36-9.4 69.206-25.942 104.542-49.73a20.748 20.748 0 0 1 22.811-0.241c38.386 24.675 73.519 41.298 105.275 49.968 30.623 8.362 57.749 9.244 81.623 2.956 13.178-3.47 26.067 6.49 26.067 20.143v252.005c0 105.984-73.979 197.527-177.434 219.56-13.059 2.78-26.385 6.444-39.978 10.997a20.743 20.743 0 0 1-13.126 0.017c-13.599-4.516-26.916-8.158-39.952-10.93C362.02 758.014 288 666.453 288 560.44V308.364c0-14.116 13.718-24.143 27.132-19.832z m164.066 298.73v0.001l-64.385-71.007c-6.838-7.083-16.811-5.75-23.583 1.403l-15.815 16.706c-1.681 1.776-1.681 4.636 0 6.412l76.456 83.604 0.03-0.031 14.944 15.787 0.122 0.127c6.839 7.082 17.871 7.025 24.643-0.127L657.2 459.04c1.682-1.775 1.682-4.636 0-6.412l-16.84-17.535c-6.84-7.083-16.968-6.323-23.738 0.829l-137.424 151.34z"
                                        fill="#F9EFFF" p-id="89220"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">Privacy First</h3>
                            <p class="feature-description">All processing happens locally in your browser. Your images
                                never leave your device.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795807052" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="90573" width="200" height="200">
                                    <path
                                        d="M547.6 618.4c10.1 7.2 20.4 13.5 31.2 18.9 11.6 5.9 23.5 10.8 35.6 14.6 94.5 30.2 201.8-0.6 265-84.3 58.1-77.1 62.8-177.9 20.3-257.8-0.1-0.1-0.1-0.2-0.2-0.3-4.4-8.4-9.4-16.5-14.9-24.3-0.3-0.4-0.6-0.9-0.9-1.3-26.1-39.4-59.3-75.1-99.2-105.2C595 35.8 325.7 73.5 182.8 262.9 40 452.3 77.7 721.7 267.1 864.6c35.4 26.7 73.7 47.2 113.4 61.4 0.4 0.1 0.7 0.3 1.1 0.4 0.7 0.3 1.4 0.5 2.1 0.7 0.3 0.1 0.6 0.2 1 0.3 35.6 11.8 76.4 0.4 100.2-31.3 22-29.2 23.6-67.4 7.1-97.5-5-9.2-11.7-17.6-20.1-24.8-1.5-1.3-3.1-2.6-4.7-3.8-1.8-1.3-3.6-2.6-5.5-3.8-34.2-29.7-40-81.2-12.3-118 23.4-30.9 63.4-41.9 98.2-29.8z m-283 6.2c-38.2-28.8-45.9-83.2-17-121.4 28.8-38.2 83.2-45.9 121.4-17 38.2 28.8 45.9 83.2 17 121.4-28.8 38.2-83.2 45.8-121.4 17z"
                                        fill="#FDF17F" p-id="90574"></path>
                                    <path d="M365.2 816.8m-58.4 0a58.4 58.4 0 1 0 116.8 0 58.4 58.4 0 1 0-116.8 0Z"
                                        fill="#F65D73" p-id="90575"></path>
                                    <path d="M365.2 284.4m-58.4 0a58.4 58.4 0 1 0 116.8 0 58.4 58.4 0 1 0-116.8 0Z"
                                        fill="#50E6CC" p-id="90576"></path>
                                    <path d="M590.4 226m-58.4 0a58.4 58.4 0 1 0 116.8 0 58.4 58.4 0 1 0-116.8 0Z"
                                        fill="#46CDFB" p-id="90577"></path>
                                    <path d="M766.8 351m-58.4 0a58.4 58.4 0 1 0 116.8 0 58.4 58.4 0 1 0-116.8 0Z"
                                        fill="#BD9EE2" p-id="90578"></path>
                                    <path d="M681.9 522m-58.4 0a58.4 58.4 0 1 0 116.8 0 58.4 58.4 0 1 0-116.8 0Z"
                                        fill="#EB866B" p-id="90579"></path>
                                    <path
                                        d="M899.6 309.8c-0.1-0.1-0.1-0.2-0.2-0.3-4.4-8.4-9.4-16.5-14.9-24.3-0.3-0.4-0.6-0.9-0.9-1.3-26.1-39.4-59.3-75.1-99.2-105.2-87.1-65.7-191-93.2-291.9-85.3 78.9 6.1 157.1 34.1 225 85.3 39.9 30.1 73.1 65.8 99.2 105.2 0.3 0.4 0.6 0.9 0.9 1.3 5.5 7.8 10.5 15.9 14.9 24.3 0.1 0.1 0.1 0.2 0.2 0.3 42.5 80 37.8 180.7-20.3 257.8-40 53-97.7 84.8-158.6 93.3 83.6 11.7 171-21.1 225.5-93.3 58.2-77.1 62.9-177.9 20.3-257.8zM492 798.7c-5-9.2-11.7-17.6-20.1-24.8-1.5-1.3-3.1-2.6-4.7-3.8-1.8-1.4-3.6-2.6-5.5-3.9-34.2-29.7-40-81.2-12.3-118 9.3-12.4 21.4-21.6 34.7-27.4-1.2-0.8-2.3-1.6-3.5-2.4-34.8-12.1-74.8-1.1-98.1 29.8-27.7 36.7-21.9 88.3 12.3 118 1.9 1.2 3.7 2.5 5.5 3.9 1.6 1.2 3.2 2.5 4.8 3.8 8.3 7.2 15 15.6 20.1 24.8 16.4 30.1 14.9 68.3-7.1 97.5-10.3 13.7-23.7 23.5-38.5 29.4 0.3 0.1 0.7 0.2 1 0.4 0.4 0.1 0.7 0.3 1.1 0.4 0.7 0.3 1.4 0.5 2.1 0.8 0.3 0.1 0.6 0.2 1 0.3 35.6 11.8 76.4 0.4 100.2-31.3 21.9-29.2 23.5-67.4 7-97.5z"
                                        fill="#FAD672" p-id="90580"></path>
                                    <path
                                        d="M423.6 816.8c0 32.2-26.1 58.4-58.4 58.4-7 0-13.8-1.2-20-3.5 22.4-8.2 38.4-29.7 38.4-54.9s-16-46.7-38.4-54.9c6.2-2.3 13-3.5 20-3.5 32.3 0 58.4 26.1 58.4 58.4z"
                                        fill="#F04B69" p-id="90581"></path>
                                    <path
                                        d="M423.5 284.4c0 32.2-26.1 58.4-58.4 58.4-7 0-13.8-1.2-20-3.5 22.4-8.2 38.4-29.7 38.4-54.9s-16-46.7-38.4-54.9c6.2-2.3 13-3.5 20-3.5 32.3 0 58.4 26.2 58.4 58.4z"
                                        fill="#45DABD" p-id="90582"></path>
                                    <path
                                        d="M648.8 226c0 32.2-26.1 58.4-58.4 58.4-7 0-13.8-1.2-20-3.5 22.4-8.2 38.4-29.6 38.4-54.9 0-25.2-16-46.7-38.4-54.9 6.2-2.3 13-3.5 20-3.5 32.2 0.1 58.4 26.2 58.4 58.4z"
                                        fill="#15B7FF" p-id="90583"></path>
                                    <path
                                        d="M825.2 351c0 32.2-26.1 58.4-58.4 58.4-7 0-13.8-1.2-20-3.5 22.4-8.2 38.4-29.7 38.4-54.9s-16-46.7-38.4-54.9c6.2-2.3 13-3.5 20-3.5 32.2 0 58.4 26.1 58.4 58.4z"
                                        fill="#978CDB" p-id="90584"></path>
                                    <path
                                        d="M740.2 522c0 32.2-26.1 58.4-58.4 58.4-7 0-13.8-1.2-20-3.5 22.4-8.2 38.4-29.6 38.4-54.9s-16-46.7-38.4-54.9c6.2-2.3 13-3.5 20-3.5 32.3 0 58.4 26.2 58.4 58.4z"
                                        fill="#DA6749" p-id="90585"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">Easy Palette & Matching</h3>
                            <p class="feature-description">Copy HEX in one click and use the unified tool to map colors
                                precisely.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg t="1756795827547" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="91589" width="200" height="200">
                                    <path
                                        d="M706.64 959.56H303.52c-99.09 0-178.59-74.46-178.59-166.28V544.12c0-76.75 57.11-141.65 133.81-160.13v-61.02c0-127.65 91.26-242.98 218.35-257.54 123.07-13.88 237.34 65.65 267.06 185.88 4.33 20.41-8.7 40.46-29.11 44.79-20.41 4.33-40.46-8.7-44.79-29.11-15.06-72.82-79.06-125.14-153.41-125.42h-20.15c-87.88 0.08-159.19 71.13-159.59 159.01v76.75h369.54c99.09 0 178.59 75.02 178.03 166.28v249.74c0.56 91.74-79.5 166.21-178.03 166.21zM545.95 623.07c-1.55-22.26-20.85-39.06-43.12-37.51-20.11 1.4-36.11 17.4-37.51 37.51v91.26c1.55 22.26 20.85 39.06 43.12 37.51 20.11-1.4 36.11-17.4 37.51-37.51v-91.26z"
                                        fill="#1DA7F5" p-id="91590"></path>
                                </svg>
                            </div>
                            <h3 class="feature-title">No Size Limits</h3>
                            <p class="feature-description">Handle anything from tiny icons to large artwork with
                                consistent quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="faq-content">
                    <h2 class="section-title">Frequently Asked Questions</h2>
                    <p class="section-subtitle">Everything you need to know about the color converter and palette</p>

                    <div class="faq-grid">
                        <div class="faq-item">
                            <h3 class="faq-question">What’s included in the 64‑color system?</h3>
                            <p class="faq-answer">A curated selection of base and premium tones designed for pixel art
                                readability and harmony.</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">How do I copy color values?</h3>
                            <p class="faq-answer">Click a color card or the Copy button to copy its HEX to your
                                clipboard instantly.</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">What are premium colors and why are they locked?</h3>
                            <p class="faq-answer">Premium colors are special hues used across Wplace. They are labeled
                                with a lock and tracked for statistics.</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">Can I use these colors commercially?</h3>
                            <p class="faq-answer">Yes. You can freely use the palette for personal and commercial
                                projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PixelArtGeneratorUnified from '@/components/PixelArtGeneratorUnified.vue'
import { FIXED_COLOR_ITEMS } from '@/constants/colors.js'
import { computed, ref } from 'vue'

export default {
    name: 'ColorConverterPage',
    components: { PixelArtGeneratorUnified },
    setup() {
        const copiedHex = ref(null)

        const standardColors = computed(() => FIXED_COLOR_ITEMS.filter(i => !i.requiresPoints))
        const premiumColors = computed(() => FIXED_COLOR_ITEMS.filter(i => i.requiresPoints))

        const copyHex = async (hex) => {
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(hex)
                } else {
                    const input = document.createElement('input')
                    input.value = hex
                    document.body.appendChild(input)
                    input.select()
                    document.execCommand('copy')
                    document.body.removeChild(input)
                }
                copiedHex.value = hex
                setTimeout(() => { if (copiedHex.value === hex) copiedHex.value = null }, 1500)
            } catch (e) {
                // 静默失败，避免打断用户
            }
        }

        return {
            standardColors,
            premiumColors,
            copiedHex,
            copyHex
        }
    }
}
</script>

<style scoped>
.color-converter-page {
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

.main-component-section {
    background: white;
    padding: 40px 0;
    border-bottom: 1px solid #e9ecef;
}

.component-content {
    max-width: 1200px;
    margin: 0 auto;
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
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* Palette */
.palette-section {
    background: #f8f9fa;
    padding: 80px 0 40px;
}

.palette-content {
    text-align: center;
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 10px;
}

.color-card {
    position: relative;
    border-radius: 12px;
    height: 90px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    align-items: flex-end;
}

.color-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.color-top {
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 0;
    font-size: 0;
}

.hex {
    font-family: 'Courier New', monospace;
    font-weight: 700;
    font-size: 0.6rem;
    padding: 4px 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.85);
    color: #333;
    display: inline-block;
}

.copy-btn {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    font-size: 0.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.copy-btn:hover {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.lock-indicator {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 14px;
    height: 14px;
    fill: rgba(0, 0, 0, 0.85);
    pointer-events: none;
}

.need-points {
    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.35) inset;
}

.copied {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #2e7d32;
    background: rgba(46, 125, 50, 0.1);
    border: 1px solid rgba(46, 125, 50, 0.2);
    padding: 3px 6px;
    border-radius: 6px;
}

/* Why */
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
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin: 0 auto 20px;
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

/* FAQ */
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

/* 响应式 */
@media (max-width: 1280px) {
    .color-grid {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media (max-width: 1024px) {
    .palette-section {
        padding: 60px 0 30px;
    }

    .features-section,
    .faq-section {
        padding: 60px 0;
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .section-subtitle {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .feature-icon {
        width: 25px;
        height: 25px;
        margin: 0 auto 10px;
    }

    .color-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .color-card {
        height: 80px;
        border-radius: 10px;
    }

    .features-section,
    .faq-section {
        padding: 40px 0;
    }
}
</style>

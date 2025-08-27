<template>
    <div class="text-to-pixel-art">
        <div class="generator-header">
            <h2>Wplace Text To Pixel Art Generator</h2>
            <p>Input text, select font and style, generate pixel art effects</p>

            <!-- 全局错误显示 -->
            <div v-if="state.globalError" class="global-error">
                {{ state.globalError }}
            </div>

            <!-- 处理状态指示器 -->
            <div v-if="state.isProcessing" class="processing-indicator">
                <span class="spinner"></span>
                Generating pixel art...
            </div>
        </div>

        <div class="generator-content">


            <!-- 左右布局 -->
            <div class="main-layout">
                <!-- 左侧：控制面板 -->
                <div class="left-panel">
                    <!-- 文字设置 -->
                    <div class="control-panel">
                        <h3 class="panel-title">Text Settings</h3>
                        <div class="controls-grid">
                            <div class="control-group full-width">
                                <label class="control-label">Input Text</label>
                                <input type="text" v-model="state.text" placeholder="Enter text to convert..."
                                    class="text-input" @input="handleTextChange" />
                            </div>
                            <div class="control-group inline">
                                <label class="control-label">Font Selection</label>
                                <select v-model="state.fontFamily" class="font-select" @change="handleTextChange">
                                    <option value="Arial">Arial</option>
                                    <option value="Helvetica">Helvetica</option>
                                    <option value="Times New Roman">Times New Roman</option>
                                    <option value="Courier New">Courier New</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Verdana">Verdana</option>
                                </select>
                            </div>
                            <div class="control-group inline">
                                <label class="control-label">Font Size: {{ state.fontSize }}px</label>
                                <input type="range" v-model.number="state.fontSize" min="12" max="120" step="2"
                                    class="slider" @input="handleTextChange" />
                            </div>
                            <div class="control-group inline">
                                <label class="control-label">Font Weight</label>
                                <select v-model="state.fontWeight" class="font-select" @change="handleTextChange">
                                    <option value="normal">Normal</option>
                                    <option value="bold">Bold</option>
                                    <option value="100">100</option>
                                    <option value="300">300</option>
                                    <option value="500">500</option>
                                    <option value="700">700</option>
                                    <option value="900">900</option>
                                </select>
                            </div>
                            <div class="control-group inline">
                                <label class="control-label">Font Style</label>
                                <select v-model="state.fontStyle" class="font-select" @change="handleTextChange">
                                    <option value="normal">Normal</option>
                                    <option value="italic">Italic</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <!-- 像素化设置 -->
                    <div class="control-panel">
                        <h3 class="panel-title">Pixelation Settings</h3>
                        <div class="controls-grid">
                            <div class="control-group">
                                <label class="control-label">Pixel Size: {{ state.pixelSize }}px</label>
                                <input type="range" v-model.number="state.pixelSize" min="1" max="32" step="1"
                                    class="slider" @input="handleParameterChange" />
                            </div>
                            <div class="control-group">
                                <label class="control-label">Canvas Size: {{ state.canvasSize }}px</label>
                                <input type="range" v-model.number="state.canvasSize" min="100" max="600" step="20"
                                    class="slider" @input="handleParameterChange" />
                            </div>
                            <div class="control-group">
                                <label class="toggle-label">
                                    <input type="checkbox" v-model="state.showGrid" @change="handleGridToggle" />
                                    <span class="toggle-text">Show Grid</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- 使用统计 -->
                    <div class="control-panel">
                        <h3 class="panel-title">Usage Statistics</h3>
                        <div v-if="hasStats" class="stats-content">
                            <div class="stats-summary">
                                <div class="summary-item">
                                    <span class="summary-label">Colors Used</span>
                                    <span class="summary-value">{{ usedColorsCount }}</span>
                                </div>
                                <div class="summary-item">
                                    <span class="summary-label">Total Pixels</span>
                                    <span class="summary-value">{{ totalPixels }}</span>
                                </div>
                            </div>
                            <div class="stats-grid">
                                <div v-for="stat in sortedStats" :key="stat.color" class="stat-color-item"
                                    :style="{ backgroundColor: stat.color }"
                                    :title="`${stat.color} - ${stat.count} pixel blocks`"
                                    @click="openReplaceDialogForSource(stat.color)">
                                    <svg v-if="FIXED_COLOR_ITEMS.find(item => item.hex === stat.color)?.requiresPoints"
                                        class="lock-indicator" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <path
                                            d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-7-2a2 2 0 014 0v2H10V7zm3 9a2 2 0 11.001-3.999A2 2 0 0113 16z" />
                                    </svg>
                                </div>
                            </div>

                            <!-- 积分统计板块 -->
                            <div class="points-panel">
                                <h4 class="points-title">Wplace Droplets Statistics</h4>
                                <div class="points-summary">
                                    <span>Premium Color Types: {{ premiumUsage.items.length }}</span>
                                    <span>Premium Pixel Total: {{ premiumUsage.totalBlocks }}</span>
                                    <span>Total Wplace Droplets: {{ premiumUsage.totalPoints }}</span>
                                </div>
                                <div class="points-list">
                                    <div v-for="item in premiumUsage.items" :key="item.color" class="points-item">
                                        <div class="color-preview" :style="{ backgroundColor: item.color }"></div>
                                        <div class="color-info">
                                            <span class="color-hex">{{ item.color }}</span>
                                            <div class="usage-info">
                                                <span class="pixel-count">{{ item.count }}px</span>
                                                <span class="points">{{ item.points }} droplets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="no-stats">
                            <p>No color statistics available</p>
                            <p class="hint">Color usage statistics will be displayed after entering text</p>
                        </div>
                    </div>
                </div>

                <!-- 右侧：预览和画布 -->
                <div class="right-panel">
                    <!-- 预览和画布一行显示 -->
                    <div class="preview-canvas-row">
                        <!-- 文字预览 -->
                        <div class="preview-section">
                            <h3 class="section-title">Text Preview</h3>
                            <div class="text-preview">
                                <div v-if="state.text" class="text-display" :style="{
                                    fontFamily: state.fontFamily,
                                    fontSize: state.fontSize + 'px',
                                    fontWeight: state.fontWeight,
                                    fontStyle: state.fontStyle,
                                    color: state.textColor
                                }">
                                    {{ state.text }}
                                </div>
                                <div v-else class="preview-placeholder">
                                    <p>Text preview will be displayed here after entering text</p>
                                </div>
                            </div>
                        </div>

                        <!-- 像素艺术画布 -->
                        <div class="canvas-section">
                            <h3 class="section-title">Pixel Art</h3>
                            <div class="canvas-wrap">
                                <div v-if="state.pixelData.length > 0" class="canvas-container">
                                    <canvas ref="canvasRef" :style="{ cursor: 'default' }"></canvas>
                                </div>
                                <div v-else class="canvas-placeholder">
                                    <p>Pixel art canvas will be displayed here</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 下载按钮 -->
                    <div class="download-section">
                        <button class="download-btn" :disabled="!state.pixelData.length" @click="handleDownload">
                            <span class="download-icon">⬇</span>
                            Download Pixel Art
                        </button>
                        <div v-if="state.downloadError" class="download-error">
                            {{ state.downloadError }}
                        </div>
                    </div>

                    <!-- 颜色调色板 -->
                    <div class="color-palette">
                        <h3 class="palette-title">Color Palette</h3>
                        <div class="palette-instructions">
                            <p class="instruction-text">
                                💡 <strong>Instructions for use:</strong>
                                The palette displays all 64 available colors, some of which require points.
                            </p>
                        </div>
                        <div class="color-grid">
                            <div v-for="(item, index) in FIXED_COLOR_ITEMS" :key="index" class="color-item" :class="{
                                'used': isColorUsed(item.hex),
                                'need-points': item.requiresPoints
                            }" :style="{ backgroundColor: item.hex }"
                                :title="`${item.hex}${item.requiresPoints ? ' - Points required' : ''}${isColorUsed(item.hex) ? ` - Used ${getColorCount(item.hex)} px` : ''}`">
                                <svg v-if="item.requiresPoints" class="lock-indicator" viewBox="0 0 24 24"
                                    aria-hidden="true" focusable="false" title="Points required">
                                    <path
                                        d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-7-2a2 2 0 014 0v2H10V7zm3 9a2 2 0 11.001-3.999A2 2 0 0113 16z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 颜色替换对话框 -->
        <Teleport to="body">
            <div v-if="replacementDialogVisible" class="replace-dialog-mask" @click="replacementDialogVisible = false">
                <div class="replace-dialog" role="dialog" aria-modal="true" @click.stop>
                    <div class="replace-header">
                        <h4>颜色替换</h4>
                        <button class="close-btn" @click="replacementDialogVisible = false">×</button>
                    </div>
                    <div class="replace-body">
                        <div class="replace-instructions">
                            <p>选择要将 <strong>{{ colorToReplace }}</strong> 替换为的目标颜色：</p>
                        </div>
                        <div class="replace-target-section">
                            <div class="replace-label">目标颜色</div>
                            <div class="replace-grid">
                                <div v-for="opt in replacementOptions" :key="'dst-' + opt.hex" class="replace-item"
                                    :class="{ active: replacementTarget === opt.hex }"
                                    :style="{ backgroundColor: opt.hex }"
                                    :title="`${opt.hex}${opt.requiresPoints ? '（需要积分）' : ''}${opt.used ? ` - 已使用 ${getColorCount(opt.hex)} 像素块` : ''}`"
                                    @click="replacementTarget = opt.hex">
                                    <svg v-if="opt.requiresPoints" class="lock-indicator" viewBox="0 0 24 24"
                                        aria-hidden="true" focusable="false">
                                        <path
                                            d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-7-2a2 2 0 014 0v2H10V7zm3 9a2 2 0 11.001-3.999A2 2 0 0113 16z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="replace-footer">
                        <button class="btn" @click="replacementDialogVisible = false">取消</button>
                        <button class="btn primary"
                            :disabled="!((colorToReplace && replacementTarget) && colorToReplace !== replacementTarget)"
                            @click="replaceColorGlobally(colorToReplace, replacementTarget); replacementDialogVisible = false">确认替换</button>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script>
import { reactive, ref, computed, onMounted, watch, nextTick } from 'vue'
import { FIXED_COLORS, FIXED_COLOR_ITEMS } from '../constants/colors.js'

export default {
    name: 'TextToPixelArt',
    setup() {
        // 主要状态管理
        const state = reactive({
            text: '',
            fontFamily: 'Arial',
            fontSize: 48,
            fontWeight: 'normal',
            fontStyle: 'normal',
            textColor: '#000000',
            pixelSize: 2,
            canvasSize: 200,
            showGrid: true,
            pixelData: [],
            colorStats: new Map(),
            downloadError: null,
            isProcessing: false,
            globalError: null
        })

        // Canvas相关
        const canvasRef = ref(null)
        let ctx = null

        // 颜色转换工具函数
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null
        }

        // 性能优化：颜色距离计算缓存
        const colorDistanceCache = new Map()

        // 性能优化：预计算64色调色板的RGB值
        const FIXED_COLORS_RGB = FIXED_COLORS.map(color => ({
            hex: color,
            ...hexToRgb(color)
        }))

        // 计算两个RGB颜色之间的欧几里得距离
        const calculateColorDistanceRGB = (r1, g1, b1, r2, g2, b2) => {
            return Math.sqrt(
                Math.pow(r1 - r2, 2) +
                Math.pow(g1 - g2, 2) +
                Math.pow(b1 - b2, 2)
            )
        }

        // 找到64色调色板中最接近的颜色
        const findClosestColor = (r, g, b) => {
            const cacheKey = `${r},${g},${b}`
            if (colorDistanceCache.has(cacheKey)) {
                return colorDistanceCache.get(cacheKey)
            }

            let closestColor = FIXED_COLORS[0]
            let minDistance = Infinity

            for (const colorRGB of FIXED_COLORS_RGB) {
                const distance = calculateColorDistanceRGB(r, g, b, colorRGB.r, colorRGB.g, colorRGB.b)
                if (distance < minDistance) {
                    minDistance = distance
                    closestColor = colorRGB.hex
                }
            }

            colorDistanceCache.set(cacheKey, closestColor)
            return closestColor
        }

        // 文字转像素数据 - 支持自动换行版本
        const generateTextPixelData = (text, fontFamily, fontSize, fontWeight, fontStyle, textColor, pixelSize, canvasSize) => {
            return new Promise((resolve) => {
                const tempCanvas = document.createElement('canvas')
                const tempCtx = tempCanvas.getContext('2d')

                // 设置画布尺寸
                tempCanvas.width = canvasSize
                tempCanvas.height = canvasSize

                // 先填充白色背景
                tempCtx.fillStyle = '#FFFFFF'
                tempCtx.fillRect(0, 0, canvasSize, canvasSize)

                // 设置字体 - 修复字体字符串构建逻辑
                let fontString = `${fontSize}px ${fontFamily}`
                if (fontWeight !== 'normal') {
                    fontString = `${fontWeight} ${fontString}`
                }
                if (fontStyle !== 'normal') {
                    fontString = `${fontStyle} ${fontString}`
                }

                tempCtx.font = fontString
                tempCtx.fillStyle = textColor
                tempCtx.textAlign = 'center'
                tempCtx.textBaseline = 'middle'

                // 计算文字尺寸和换行
                const textMetrics = tempCtx.measureText(text)
                const textWidth = textMetrics.width
                const textHeight = fontSize

                // 计算每行最大字符数（基于画布宽度和字体大小）
                const maxCharsPerLine = Math.floor((canvasSize * 0.8) / (textWidth / text.length))

                // 自动换行处理
                const lines = []
                let currentLine = ''

                for (let i = 0; i < text.length; i++) {
                    currentLine += text[i]
                    if (currentLine.length >= maxCharsPerLine || i === text.length - 1) {
                        lines.push(currentLine)
                        currentLine = ''
                    }
                }

                // 如果只有一行，直接居中显示
                if (lines.length === 1) {
                    const centerX = canvasSize / 2
                    const centerY = canvasSize / 2
                    tempCtx.fillText(text, centerX, centerY)
                } else {
                    // 多行文字，计算行间距和位置
                    const lineHeight = fontSize * 1.2
                    const totalHeight = lines.length * lineHeight
                    const startY = (canvasSize - totalHeight) / 2 + lineHeight / 2

                    lines.forEach((line, index) => {
                        const y = startY + index * lineHeight
                        const centerX = canvasSize / 2
                        tempCtx.fillText(line, centerX, y)
                    })
                }



                // 使用 requestAnimationFrame 确保文字渲染完成
                requestAnimationFrame(() => {
                    // 再次绘制文字确保渲染
                    tempCtx.fillStyle = '#FFFFFF'
                    tempCtx.fillRect(0, 0, canvasSize, canvasSize)
                    tempCtx.fillStyle = textColor

                    // 重新绘制换行后的文字
                    if (lines.length === 1) {
                        const centerX = canvasSize / 2
                        const centerY = canvasSize / 2
                        tempCtx.fillText(text, centerX, centerY)
                    } else {
                        // 多行文字，计算行间距和位置
                        const lineHeight = fontSize * 1.2
                        const totalHeight = lines.length * lineHeight
                        const startY = (canvasSize - totalHeight) / 2 + lineHeight / 2

                        lines.forEach((line, index) => {
                            const y = startY + index * lineHeight
                            const centerX = canvasSize / 2
                            tempCtx.fillText(line, centerX, y)
                        })
                    }

                    // 获取图像数据
                    const imageData = tempCtx.getImageData(0, 0, canvasSize, canvasSize)

                    // 使用与 PixelArtGeneratorUnified 相同的采样算法
                    const targetPixelCount = Math.floor(canvasSize / pixelSize)
                    const pixelData = []



                    // 使用相同的采样逻辑
                    const scaleX = canvasSize / targetPixelCount
                    const scaleY = canvasSize / targetPixelCount

                    for (let y = 0; y < targetPixelCount; y++) {
                        const row = []
                        for (let x = 0; x < targetPixelCount; x++) {
                            const sourceX = Math.floor(x * scaleX)
                            const sourceY = Math.floor(y * scaleY)
                            const blockWidth = Math.ceil(scaleX)
                            const blockHeight = Math.ceil(scaleY)

                            let totalR = 0, totalG = 0, totalB = 0, pixelCount = 0

                            for (let by = 0; by < blockHeight && sourceY + by < canvasSize; by++) {
                                for (let bx = 0; bx < blockWidth && sourceX + bx < canvasSize; bx++) {
                                    const pixelIndex = ((sourceY + by) * canvasSize + (sourceX + bx)) * 4
                                    if (pixelIndex < imageData.data.length) {
                                        totalR += imageData.data[pixelIndex]
                                        totalG += imageData.data[pixelIndex + 1]
                                        totalB += imageData.data[pixelIndex + 2]
                                        pixelCount++
                                    }
                                }
                            }

                            if (pixelCount > 0) {
                                const avgR = Math.round(totalR / pixelCount)
                                const avgG = Math.round(totalG / pixelCount)
                                const avgB = Math.round(totalB / pixelCount)
                                const mappedColor = findClosestColor(avgR, avgG, avgB)
                                row.push(mappedColor)
                            } else {
                                row.push('#FFFFFF')
                            }
                        }
                        pixelData.push(row)
                    }

                    resolve(pixelData)
                })
            })
        }

        // 更新颜色使用统计
        const updateColorStats = (pixelData) => {
            const stats = new Map()
            for (const row of pixelData) {
                for (const color of row) {
                    stats.set(color, (stats.get(color) || 0) + 1)
                }
            }
            state.colorStats = stats
        }

        // 文字转像素艺术主函数
        const convertTextToPixelArt = async () => {
            if (!state.text.trim()) {
                state.pixelData = []
                state.colorStats.clear()
                return
            }

            try {
                state.isProcessing = true
                state.globalError = null

                const pixelData = await generateTextPixelData(
                    state.text,
                    state.fontFamily,
                    state.fontSize,
                    state.fontWeight,
                    state.fontStyle,
                    state.textColor,
                    state.pixelSize,
                    state.canvasSize
                )

                state.pixelData = pixelData
                updateColorStats(pixelData)

                await nextTick()
                render()
            } catch (error) {

                state.globalError = `文字转换失败: ${error.message}`
                state.pixelData = []
                state.colorStats.clear()
            } finally {
                state.isProcessing = false
            }
        }

        // Canvas初始化
        const initializeCanvas = () => {
            if (!canvasRef.value) return

            const canvas = canvasRef.value
            ctx = canvas.getContext('2d')

            const width = calculateCanvasWidth()
            const height = calculateCanvasHeight()

            // 设置Canvas的实际尺寸和显示尺寸
            canvas.width = width
            canvas.height = height
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'

            ctx.imageSmoothingEnabled = false


        }

        // Canvas渲染
        const render = () => {
            if (!ctx || !state.pixelData.length) return

            const width = calculateCanvasWidth()
            const height = calculateCanvasHeight()

            // 确保Canvas尺寸正确
            if (canvasRef.value) {
                canvasRef.value.width = width
                canvasRef.value.height = height
            }

            ctx.clearRect(0, 0, width, height)

            // 绘制像素
            for (let y = 0; y < state.pixelData.length; y++) {
                for (let x = 0; x < state.pixelData[y].length; x++) {
                    const color = state.pixelData[y][x]
                    if (color) {
                        ctx.fillStyle = color
                        ctx.fillRect(x * state.pixelSize, y * state.pixelSize, state.pixelSize, state.pixelSize)
                    }
                }
            }

            // 绘制网格 - 修复网格绘制问题
            if (state.showGrid) {
                ctx.save()
                ctx.strokeStyle = '#cccccc'
                ctx.lineWidth = 1
                ctx.globalAlpha = 0.8

                // 确保网格尺寸与像素数据完全匹配
                const gridWidth = state.pixelData[0].length * state.pixelSize
                const gridHeight = state.pixelData.length * state.pixelSize

                ctx.beginPath()

                // 绘制垂直线
                for (let x = 0; x <= state.pixelData[0].length; x++) {
                    const xPos = x * state.pixelSize + 0.5
                    ctx.moveTo(xPos, 0)
                    ctx.lineTo(xPos, gridHeight)
                }

                // 绘制水平线
                for (let y = 0; y <= state.pixelData.length; y++) {
                    const yPos = y * state.pixelSize + 0.5
                    ctx.moveTo(0, yPos)
                    ctx.lineTo(gridWidth, yPos)
                }

                ctx.stroke()
                ctx.restore()


            }
        }

        // 计算Canvas尺寸
        const calculateCanvasWidth = () => {
            if (!state.pixelData.length) return 400
            return state.pixelData[0].length * state.pixelSize
        }

        const calculateCanvasHeight = () => {
            if (!state.pixelData.length) return 400
            return state.pixelData.length * state.pixelSize
        }

        // 事件处理函数
        const handleTextChange = () => {
            if (state.text.trim()) {
                convertTextToPixelArt()
            } else {
                state.pixelData = []
                state.colorStats.clear()
                nextTick(() => {
                    render()
                })
            }
        }

        const handleParameterChange = () => {
            if (state.text.trim()) {
                convertTextToPixelArt()
            }
        }

        const handleGridToggle = () => {
            nextTick(() => {
                render()
            })
        }

        const handleDownload = async () => {
            if (!state.pixelData.length) {
                state.downloadError = '没有可下载的像素艺术'
                return
            }

            try {
                state.downloadError = null

                const downloadCanvas = document.createElement('canvas')
                const downloadCtx = downloadCanvas.getContext('2d')

                const pixelCount = state.pixelData.length
                const downloadPixelSize = Math.max(1, Math.floor(800 / pixelCount))
                const canvasWidth = state.pixelData[0].length * downloadPixelSize
                const canvasHeight = state.pixelData.length * downloadPixelSize

                downloadCanvas.width = canvasWidth
                downloadCanvas.height = canvasHeight
                downloadCtx.imageSmoothingEnabled = false

                for (let y = 0; y < state.pixelData.length; y++) {
                    for (let x = 0; x < state.pixelData[y].length; x++) {
                        const color = state.pixelData[y][x]
                        downloadCtx.fillStyle = color
                        downloadCtx.fillRect(
                            x * downloadPixelSize,
                            y * downloadPixelSize,
                            downloadPixelSize,
                            downloadPixelSize
                        )
                    }
                }

                // 若启用网格显示，在导出图像上绘制网格
                if (state.showGrid) {
                    downloadCtx.save()
                    downloadCtx.strokeStyle = '#cccccc'
                    downloadCtx.lineWidth = 1
                    downloadCtx.globalAlpha = 0.8

                    downloadCtx.beginPath()
                    for (let x = 0; x <= state.pixelData[0].length; x++) {
                        const xPos = x * downloadPixelSize + 0.5
                        downloadCtx.moveTo(xPos, 0)
                        downloadCtx.lineTo(xPos, canvasHeight)
                    }
                    for (let y = 0; y <= state.pixelData.length; y++) {
                        const yPos = y * downloadPixelSize + 0.5
                        downloadCtx.moveTo(0, yPos)
                        downloadCtx.lineTo(canvasWidth, yPos)
                    }
                    downloadCtx.stroke()
                    downloadCtx.restore()
                }

                const blob = await new Promise((resolve, reject) => {
                    downloadCanvas.toBlob((blob) => {
                        if (blob) {
                            resolve(blob)
                        } else {
                            reject(new Error('无法生成图片文件'))
                        }
                    }, 'image/png', 1.0)
                })

                const url = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = `text-pixel-art-${Date.now()}.png`

                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)

            } catch (error) {

                state.downloadError = `下载失败: ${error.message}`
            }
        }

        // 颜色统计相关计算属性
        const hasStats = computed(() => {
            return state.colorStats.size > 0
        })

        const totalPixels = computed(() => {
            let total = 0
            for (const count of state.colorStats.values()) {
                total += count
            }
            return total
        })

        const usedColorsCount = computed(() => {
            return state.colorStats.size
        })

        const sortedStats = computed(() => {
            const stats = []
            const total = totalPixels.value

            for (const [color, count] of state.colorStats.entries()) {
                const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0
                stats.push({
                    color,
                    count,
                    percentage: parseFloat(percentage)
                })
            }

            return stats.sort((a, b) => b.count - a.count)
        })

        // 积分颜色统计（需要积分的颜色每个像素2000积分）
        const premiumColorSet = computed(() => {
            return new Set(FIXED_COLOR_ITEMS.filter(i => i.requiresPoints).map(i => i.hex))
        })

        const premiumUsage = computed(() => {
            const items = []
            let totalBlocks = 0
            for (const [color, count] of state.colorStats.entries()) {
                if (premiumColorSet.value.has(color)) {
                    items.push({ color, count, points: count * 2000 })
                    totalBlocks += count
                }
            }
            items.sort((a, b) => b.count - a.count)
            return {
                items,
                totalBlocks,
                totalPoints: totalBlocks * 2000
            }
        })

        // 监听器
        watch([() => state.pixelData, () => state.pixelSize], () => {
            nextTick(() => {
                initializeCanvas()
                render()
            })
        }, { deep: true })

        watch(() => state.showGrid, () => {
            nextTick(() => {
                render()
            })
        })

        // ===== 颜色替换对话框与全局替换 =====
        const replacementDialogVisible = ref(false)
        const colorToReplace = ref(null) // 源颜色（被替换的）
        const replacementTarget = ref(null) // 目标颜色（替换为）

        // 供弹窗展示的选项：全部64色，并标识是否已使用与是否需要积分
        const replacementOptions = computed(() => {
            const usedSet = new Set(state.colorStats.keys())
            return FIXED_COLOR_ITEMS
                .map(i => ({ hex: i.hex, requiresPoints: i.requiresPoints, used: usedSet.has(i.hex) }))
                .sort((a, b) => Number(b.used) - Number(a.used))
        })

        const openReplaceDialogForSource = (sourceColor) => {
            colorToReplace.value = sourceColor
            replacementTarget.value = null
            replacementDialogVisible.value = true
        }

        const replaceColorGlobally = (sourceColor, targetColor) => {
            if (!state.pixelData.length) return
            if (!sourceColor || !targetColor || sourceColor === targetColor) return
            try {
                const newPixelData = state.pixelData.map(row =>
                    row.map(pixel => (pixel === sourceColor ? targetColor : pixel))
                )
                state.pixelData = newPixelData
                updateColorStats(newPixelData)
                nextTick(() => { render() })
            } catch (error) {
                state.globalError = `全局替换颜色失败: ${error.message}`
            }
        }

        // 颜色相关计算函数
        const isColorUsed = (color) => {
            return state.colorStats.has(color)
        }

        const getColorCount = (color) => {
            return state.colorStats.get(color) || 0
        }



        // 生命周期
        onMounted(() => {
            initializeCanvas()
        })

        return {
            FIXED_COLORS,
            FIXED_COLOR_ITEMS,
            state,
            canvasRef,
            hasStats,
            totalPixels,
            usedColorsCount,
            sortedStats,
            premiumUsage,
            handleTextChange,
            handleParameterChange,
            handleGridToggle,
            handleDownload,
            calculateCanvasWidth,
            calculateCanvasHeight,
            isColorUsed,
            getColorCount,
            openReplaceDialogForSource,
            replacementDialogVisible,
            colorToReplace,
            replacementTarget,
            replacementOptions,
            replaceColorGlobally

        }
    }
}
</script>

<style scoped>
.text-to-pixel-art {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    font-family: Arial, sans-serif;
}

.generator-header {
    text-align: center;
    margin-bottom: 30px;
}

.generator-header h2 {
    color: #333;
    margin-bottom: 10px;
}

.generator-header p {
    color: #666;
    font-size: 14px;
}

.global-error {
    background-color: #ffebee;
    color: #c62828;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #ffcdd2;
    margin-top: 15px;
    font-size: 14px;
}

.processing-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #bbdefb;
    margin-top: 15px;
    font-size: 14px;
}

.spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #bbdefb;
    border-top: 2px solid #1976d2;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.generator-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* 主布局 */
.main-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    margin-bottom: 20px;
}

/* 左侧面板 */
.left-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
}

/* 右侧面板 */
.right-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
}

.control-panel {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 10px;
}

.panel-title {
    margin: 0 0 15px 0;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
}

.controls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}

.control-group.full-width {
    grid-column: 1 / -1;
}


.control-label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #333;
    font-size: 14px;
}

.text-input {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 12px;
}

.font-select {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 12px;
}

.color-input {
    width: 50px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}

.slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
}

.toggle-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.toggle-text {
    font-weight: 500;
    color: #333;
}

.controls-row {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

/* 预览和画布区域 */
.preview-canvas-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.preview-section,
.canvas-section {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 10px;
}

.section-title {
    margin: 0 0 15px 0;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
}

.text-preview {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 10px;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-display {
    text-align: center;
    word-break: break-word;
    max-width: 100%;
    padding: 20px;
}

.preview-placeholder {
    text-align: center;
    color: #666;
    font-size: 14px;
}

.canvas-wrap {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 10px;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.download-section {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    padding: 10px;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
}

.canvas-container {
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
}

canvas {
    display: block;
    background-color: white;
}

.canvas-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #666;
}

/* 右侧卡片样式 */
.right-pane .color-stats {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px;
}

.stats-title {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
}

.stats-title::before {
    content: '📊';
    font-size: 18px;
}

.stats-summary {
    display: flex;
    gap: 16px;
    margin-bottom: 10px;
    background: #f8f9fa;
    border-radius: 8px;
}

.summary-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.summary-label {
    font-size: 12px;
    color: #666;
    font-weight: 500;
}

.summary-value {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

/* 统计改为网格块展示 */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 3px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fafafa;
    padding: 6px;
}

.stat-color-item {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
}

.stat-color-item:hover {
    transform: scale(1.1);
    border-color: #1976d2;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);
}

/* 积分面板样式 */
.points-panel {
    margin-top: 12px;
    padding: 10px;
    border: 1px solid #e0f2f1;
    background: #f1fefc;
    border-radius: 8px;
}

.points-title {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #2e7d32;
}

.points-summary {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 8px;
    font-size: 12px;
    color: #2e7d32;
}

.points-list {
    max-height: 160px;
    overflow-y: auto;
    border-top: 1px dashed #c8e6c9;
    padding-top: 8px;
}

.points-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    border-bottom: 1px dashed #e0e0e0;
}

.points-item:last-child {
    border-bottom: none;
}

.points .pixel-count {
    color: #333;
}

.color-preview {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-shrink: 0;
}

.color-info {
    flex: 1;
    min-width: 0;
}

.color-hex {
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #666;
    font-weight: 500;
}

.usage-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
}

.pixel-count {
    font-size: 12px;
    color: #333;
    font-weight: 500;
}

.points {
    font-size: 12px;
    color: #2e7d32;
    font-weight: 500;
}

.no-stats {
    text-align: center;
    padding: 20px;
    color: #666;
}

.no-stats p {
    margin: 8px 0;
}

.no-stats .hint {
    font-size: 14px;
    color: #999;
}

/* 下载按钮样式 */
.download-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: linear-gradient(135deg, #4CAF50, #45a049);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.download-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #45a049, #3d8b40);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.download-btn:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.download-icon {
    font-size: 18px;
    font-weight: bold;
}

.download-error {
    color: #f44336;
    font-size: 14px;
    text-align: center;
    padding: 8px 16px;
    background-color: #ffebee;
    border: 1px solid #ffcdd2;
    border-radius: 4px;
    max-width: 300px;
}

/* 颜色调色板 */
.color-palette {
    flex: 2;
    min-width: 0;
}

.palette-title {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
}

.palette-title::before {
    content: '🎨';
    font-size: 18px;
}

.palette-fullrow .palette-title::before {
    content: '🎨';
    font-size: 18px;
}

.palette-instructions {
    margin-bottom: 12px;
    padding: 8px 12px;
    background: #f0f8ff;
    border: 1px solid #e3f2fd;
    border-radius: 6px;
}

.instruction-text {
    margin: 0;
    font-size: 12px;
    color: #1976d2;
    line-height: 1.4;
}

.color-grid {
    display: grid;
    gap: 3px;
    transition: all 0.3s ease;
    grid-template-columns: repeat(32, 1fr);
    max-width: 100%;
}

.color-item {
    width: 25px;
    height: 25px;
    border: 2px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}

.color-item.need-points {
    box-shadow: none;
}

.color-item.used {
    border-color: #4CAF50;
    box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.25);
}

.lock-indicator {
    position: absolute;
    bottom: 1px;
    left: 1px;
    width: 8px;
    height: 8px;
    fill: rgba(0, 0, 0, 0.85);
    pointer-events: none;
}

/* 右侧调色板 */
.color-palette {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin-top: 20px;
}

.color-palette .color-grid {
    grid-template-columns: repeat(32, 1fr);
    gap: 3px;
    margin-top: 12px;
}

.color-palette .color-item {
    width: 20px;
    height: 20px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .main-layout {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .left-panel,
    .right-panel {
        gap: 16px;
    }

    .control-panel {
        padding: 12px;
    }

    .preview-canvas-row {
        gap: 12px;
    }

    .preview-section,
    .canvas-section {
        padding: 12px;
    }

    .text-preview,
    .canvas-wrap {
        min-height: 200px;
    }

    .controls-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
    }
}

@media (max-width: 768px) {
    .generator-header h2 {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .generator-header p {
        font-size: 12px;
    }

    .generator-header {
        margin-bottom: 10px;
    }

    .main-layout {
        gap: 12px;
        margin-bottom: 16px;
    }

    .left-panel,
    .right-panel {
        gap: 12px;
    }

    .control-panel {
        padding: 8px;
    }

    .panel-title {
        margin: 0 0 12px 0;
        font-size: 13px;
        padding-bottom: 4px;
    }

    .controls-grid {
        grid-template-columns: 1fr;
        gap: 8px;
    }

    .preview-canvas-row {
        grid-template-columns: 1fr;
        gap: 8px;
    }

    .preview-section,
    .canvas-section {
        padding: 8px;
    }

    .section-title {
        margin: 0 0 12px 0;
        font-size: 13px;
        padding-bottom: 4px;
    }

    .text-preview,
    .canvas-wrap {
        min-height: 180px;
        padding: 8px;
    }

    .download-section {
        padding: 8px;
    }

    .download-btn {
        padding: 8px 16px;
        font-size: 13px;
    }

    .color-palette {
        padding: 12px;
        margin-top: 16px;
    }

    .color-palette .color-grid {
        grid-template-columns: repeat(16, 1fr);
        gap: 2px;
    }

    .color-palette .color-item {
        width: 18px;
        height: 18px;
    }

    .stats-grid {
        grid-template-columns: repeat(8, 1fr);
        gap: 2px;
    }

    .stat-color-item {
        width: 24px;
        height: 24px;
    }

    .stats-summary {
        gap: 8px;
        margin-bottom: 8px;
    }

    .summary-value {
        font-size: 14px;
    }
}

/* 颜色替换对话框样式 */
.replace-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.replace-dialog {
    background: white;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow: hidden;
    z-index: 1001;
}

.replace-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid #e0e0e0;
    background: #f8f9fa;
}

.replace-header h4 {
    margin: 0;
    font-size: 18px;
    color: #333;
    font-weight: 600;
}

.close-btn {
    background: none;
    border: none;
    font-size: 24px;
    color: #666;
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.close-btn:hover {
    background: #e0e0e0;
    color: #333;
}

.replace-body {
    padding: 24px;
}

.replace-instructions {
    margin-bottom: 20px;
    text-align: center;
}

.replace-instructions p {
    margin: 0;
    font-size: 16px;
    color: #333;
    line-height: 1.5;
}

.replace-target-section {
    margin-bottom: 20px;
}

.replace-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
    text-align: center;
}

.replace-grid {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 4px;
    max-height: 300px;
    overflow-y: auto;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}

.replace-item {
    width: 32px;
    height: 32px;
    border: 2px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.replace-item:hover {
    transform: scale(1.1);
    border-color: #1976d2;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);
}

.replace-item.active {
    border-color: #4CAF50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
}

.replace-footer {
    display: flex;
    gap: 12px;
    padding: 20px 24px;
    border-top: 1px solid #e0e0e0;
    background: #f8f9fa;
    justify-content: flex-end;
}

.btn {
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn:hover {
    background: #f5f5f5;
    border-color: #ccc;
}

.btn.primary {
    background: #1976d2;
    color: white;
    border-color: #1976d2;
}

.btn.primary:hover {
    background: #1565c0;
    border-color: #1565c0;
}

.btn:disabled {
    background: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
    border-color: #e0e0e0;
}
</style>

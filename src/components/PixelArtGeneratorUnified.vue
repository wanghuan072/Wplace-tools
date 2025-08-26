<template>
    <div class="pixel-art-generator">
        <div class="generator-header">
            <h2>Wplace Image To Pixel Art Generator</h2>
            <p>Upload images, convert to pixel art, automatically re-analyze and prioritize filling selected colors</p>

            <!-- 全局错误显示 -->
            <div v-if="state.globalError" class="global-error">
                {{ state.globalError }}
            </div>

            <!-- 处理状态指示器 -->
            <div v-if="state.isProcessing" class="processing-indicator">
                <span class="spinner"></span>
                Processing image...
            </div>
        </div>

        <div class="generator-content">
            <!-- 底部：左右布局 -->
            <div class="bottom-section">
                <!-- 左侧：上传 + 画布并排一行，控制面板一行，下载一行 -->
                <div class="left-pane">
                    <div class="top-row">
                        <div class="image-uploader">
                            <div class="upload-area" @click="triggerFileInput" @dragover.prevent
                                @drop.prevent="handleDrop">
                                <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/gif,image/webp"
                                    @change="handleFileSelect" style="display: none" />

                                <div v-if="!uploadState.isLoading && !uploadState.previewImage" class="upload-prompt">
                                    <div class="upload-icon">📁</div>
                                    <p>Click or drag image here to upload</p>
                                    <p class="upload-hint">Supports JPG, PNG, GIF, WebP formats</p>
                                </div>

                                <div v-if="uploadState.isLoading" class="loading-state">
                                    <div class="spinner"></div>
                                    <p>Loading image...</p>
                                </div>

                                <div v-if="uploadState.previewImage && !uploadState.isLoading"
                                    class="preview-container">
                                    <img :src="uploadState.previewImage" alt="预览图片" class="preview-image" />
                                    <button @click.stop="clearImage" class="clear-button">×</button>
                                </div>
                            </div>

                            <div v-if="uploadState.errorMessage" class="error-message">
                                {{ uploadState.errorMessage }}
                            </div>
                        </div>
                        <div class="canvas-wrap">
                            <div v-if="state.pixelData.length > 0" class="canvas-container">
                                <canvas ref="canvasRef" :style="{ cursor: 'default' }"></canvas>
                            </div>
                            <div v-else class="canvas-placeholder">
                                <p>Pixel art canvas will be displayed here</p>
                            </div>
                        </div>
                    </div>
                    <div class="control-panel compact">
                        <h3 class="panel-title">Control Panel</h3>
                        <div class="controls-row">
                            <div class="control-group inline">
                                <label class="control-label">Pixel Size: {{ state.pixelSize }}px</label>
                                <input type="range" v-model.number="state.pixelSize" min="1" max="32" step="1"
                                    class="slider" @input="handlePixelSizeChange" />
                            </div>
                            <div class="control-group inline">
                                <label class="control-label">Image Size: {{ state.imageSize }}px</label>
                                <input type="range" v-model.number="state.imageSize" min="50" max="500" step="10"
                                    class="slider" @input="handleImageSizeChange" />
                            </div>
                            <div class="control-group inline">
                                <label class="toggle-label">
                                    <input type="checkbox" v-model="state.showGrid" @change="handleGridToggle" />
                                    <span class="toggle-text">Show Grid</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="download-inline">
                        <button class="download-btn" :disabled="!state.pixelData.length" @click="handleDownload">
                            <span class="download-icon">⬇</span>
                            Download Pixel Art
                        </button>
                        <div v-if="state.downloadError" class="download-error">
                            {{ state.downloadError }}
                        </div>
                    </div>
                </div>

                <!-- 右侧：仅使用统计 -->
                <div class="right-pane">
                    <div class="color-stats">
                        <h3 class="stats-title">Usage Statistics</h3>
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
                                    :style="{ backgroundColor: stat.color }" :title="`${stat.color} - ${stat.count} px`"
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
                                                <span class="points">{{ item.points }} Droplets</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="no-stats">
                            <p>No color statistics available</p>
                            <p class="hint">Color usage statistics will be displayed after uploading an image</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 底部整行：颜色调色板 -->
            <div class="color-palette palette-fullrow">
                <h3 class="palette-title">Color Palette</h3>
                <div class="palette-instructions">
                    <p class="instruction-text">
                        💡 <strong>Instructions:</strong>
                        The palette is for display only. Click on the color blocks in the "Usage Statistics" on the
                        right to replace colors.
                    </p>
                </div>
                <div class="color-grid">
                    <div v-for="(item, index) in FIXED_COLOR_ITEMS" :key="index" class="color-item" :class="{
                        'selected': item.hex === state.selectedColor,
                        'used': isColorUsed(item.hex),
                        'need-points': item.requiresPoints
                    }" :style="{ backgroundColor: item.hex }"
                        :title="`${item.hex}${item.requiresPoints ? ' - Points required' : ''}${isColorUsed(item.hex) ? ` - Used ${getColorCount(item.hex)} px` : ''}`">
                        <svg v-if="item.requiresPoints" class="lock-indicator" viewBox="0 0 24 24" aria-hidden="true"
                            focusable="false" title="Points required">
                            <path
                                d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2zm-7-2a2 2 0 014 0v2H10V7zm3 9a2 2 0 11.001-3.999A2 2 0 0113 16z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- 颜色替换对话框（内联到主模板，避免多 template 报错） -->
        <div v-if="replacementDialogVisible">
            <div class="replace-dialog-mask" @click="replacementDialogVisible = false"></div>
            <div class="replace-dialog" role="dialog" aria-modal="true">
                <div class="replace-header">
                    <h4>Color Replacement</h4>
                    <button class="close-btn" @click="replacementDialogVisible = false">×</button>
                </div>
                <div class="replace-body">
                    <div class="replace-instructions">
                        <p>Select the target color to replace <strong>{{ colorToReplace }}</strong> with:</p>
                    </div>
                    <div class="replace-target-section">
                        <div class="replace-label">Target Color</div>
                        <div class="replace-grid">
                            <div v-for="opt in replacementOptions" :key="'dst-' + opt.hex" class="replace-item"
                                :class="{ active: replacementTarget === opt.hex }" :style="{ backgroundColor: opt.hex }"
                                :title="`${opt.hex}${opt.requiresPoints ? '(Points required)' : ''}${opt.used ? ` - Used ${getColorCount(opt.hex)} px` : ''}`"
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
                    <button class="btn" @click="replacementDialogVisible = false">Cancel</button>
                    <button class="btn primary"
                        :disabled="!((colorToReplace && replacementTarget) && colorToReplace !== replacementTarget)"
                        @click="replaceColorGlobally(colorToReplace, replacementTarget); replacementDialogVisible = false">Confirm
                        Replacement</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, computed, onMounted, watch, nextTick } from 'vue'
import { FIXED_COLORS, FIXED_COLOR_ITEMS, DEFAULT_SELECTED_COLOR } from '../constants/colors.js'

export default {
    name: 'PixelArtGeneratorUnified',
    setup() {
        // 主要状态管理
        const state = reactive({
            originalImage: null,
            pixelData: [],
            pixelSize: 10,
            imageSize: 200,
            showGrid: true,
            selectedColor: DEFAULT_SELECTED_COLOR,
            colorStats: new Map(),
            downloadError: null,
            isProcessing: false,
            globalError: null,
            autoFillMode: true,
            isDeleteMode: false // 删除模式标志
        })

        // 上传状态管理
        const uploadState = reactive({
            previewImage: null,
            isLoading: false,
            errorMessage: ''
        })

        // Canvas相关
        const canvasRef = ref(null)
        const canvasContainerRef = ref(null)
        const fileInput = ref(null)
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

        // 图像采样和缩放算法 - 保持原始宽高比，透明区域转为白色
        const sampleImageData = (imageData, sourceWidth, sourceHeight, targetWidth, targetHeight) => {
            const sampledData = []
            const scaleX = sourceWidth / targetWidth
            const scaleY = sourceHeight / targetHeight

            for (let y = 0; y < targetHeight; y++) {
                const row = []
                for (let x = 0; x < targetWidth; x++) {
                    const sourceX = Math.floor(x * scaleX)
                    const sourceY = Math.floor(y * scaleY)
                    const blockWidth = Math.ceil(scaleX)
                    const blockHeight = Math.ceil(scaleY)

                    let totalR = 0, totalG = 0, totalB = 0, totalA = 0, pixelCount = 0

                    for (let by = 0; by < blockHeight && sourceY + by < sourceHeight; by++) {
                        for (let bx = 0; bx < blockWidth && sourceX + bx < sourceWidth; bx++) {
                            const pixelIndex = ((sourceY + by) * sourceWidth + (sourceX + bx)) * 4
                            if (pixelIndex < imageData.data.length) {
                                totalR += imageData.data[pixelIndex]
                                totalG += imageData.data[pixelIndex + 1]
                                totalB += imageData.data[pixelIndex + 2]
                                totalA += imageData.data[pixelIndex + 3] // Alpha通道
                                pixelCount++
                            }
                        }
                    }

                    if (pixelCount > 0) {
                        const avgR = Math.round(totalR / pixelCount)
                        const avgG = Math.round(totalG / pixelCount)
                        const avgB = Math.round(totalB / pixelCount)
                        const avgA = Math.round(totalA / pixelCount)

                        // 如果像素是透明的（Alpha < 128），则使用白色
                        if (avgA < 128) {
                            row.push('#FFFFFF') // 白色
                        } else {
                            const mappedColor = findClosestColor(avgR, avgG, avgB)
                            row.push(mappedColor)
                        }
                    } else {
                        row.push('#FFFFFF') // 默认白色
                    }
                }
                sampledData.push(row)
            }

            return sampledData
        }

        // （已移除）带颜色优先级的图像采样算法

        // 生成像素数据矩阵
        const generatePixelData = (image, pixelSize, imageSize) => {
            return new Promise((resolve) => {
                const tempCanvas = document.createElement('canvas')
                const tempCtx = tempCanvas.getContext('2d')

                // 保持图像原始宽高比，避免拉伸变形
                const maxPixels = Math.floor(imageSize / pixelSize)
                const aspectRatio = image.width / image.height

                let targetWidth, targetHeight
                if (aspectRatio >= 1) {
                    // 横向或正方形图像：以宽度为基准，高度按比例缩放
                    targetWidth = maxPixels
                    targetHeight = Math.floor(maxPixels / aspectRatio)
                } else {
                    // 纵向图像：以高度为基准，宽度按比例缩放
                    targetHeight = maxPixels
                    targetWidth = Math.floor(maxPixels * aspectRatio)
                }

                tempCanvas.width = targetWidth
                tempCanvas.height = targetHeight

                tempCtx.drawImage(image, 0, 0, targetWidth, targetHeight)
                const imageData = tempCtx.getImageData(0, 0, targetWidth, targetHeight)

                requestAnimationFrame(() => {
                    const pixelData = sampleImageData(
                        imageData,
                        targetWidth,
                        targetHeight,
                        targetWidth,
                        targetHeight
                    )
                    resolve(pixelData)
                })
            })
        }

        // （已移除）带颜色优先级的像素数据生成

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

        // 图片到像素艺术转换主函数
        const convertImageToPixelArt = async (image) => {
            try {
                state.isProcessing = true
                state.globalError = null

                const pixelData = await generatePixelData(image, state.pixelSize, state.imageSize)
                state.pixelData = pixelData
                updateColorStats(pixelData)

                await nextTick()
                render()
            } catch (error) {
                console.error('图片转换失败:', error)
                state.globalError = `图片转换失败: ${error.message}`
                state.pixelData = []
                state.colorStats.clear()
            } finally {
                state.isProcessing = false
            }
        }

        // （已移除）带颜色优先级的图片转换函数

        // Canvas初始化
        const initializeCanvas = () => {
            if (!canvasRef.value) return

            const canvas = canvasRef.value
            ctx = canvas.getContext('2d')

            const width = calculateCanvasWidth()
            const height = calculateCanvasHeight()

            // 简化Canvas设置，不使用devicePixelRatio缩放
            canvas.width = width
            canvas.height = height
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'

            ctx.imageSmoothingEnabled = false

            // 确保Canvas背景透明
            ctx.clearRect(0, 0, width, height)

            console.log(`Canvas初始化: ${width}x${height}`)
        }

        // Canvas渲染
        const render = () => {
            if (!ctx || !state.pixelData.length) return

            const width = calculateCanvasWidth()
            const height = calculateCanvasHeight()

            // 清除Canvas并设置透明背景
            ctx.clearRect(0, 0, width, height)

            // 可选：设置默认背景色（如果需要的话）
            // ctx.fillStyle = 'rgba(255, 255, 255, 0)' // 完全透明
            // ctx.fillRect(0, 0, width, height)

            // 计算图像居中位置
            const imageWidth = state.pixelData[0].length * state.pixelSize
            const imageHeight = state.pixelData.length * state.pixelSize
            const offsetX = (width - imageWidth) / 2
            const offsetY = (height - imageHeight) / 2

            // 绘制像素 - 居中显示
            for (let y = 0; y < state.pixelData.length; y++) {
                for (let x = 0; x < state.pixelData[y].length; x++) {
                    const color = state.pixelData[y][x]
                    if (color) {
                        ctx.fillStyle = color
                        ctx.fillRect(
                            offsetX + x * state.pixelSize,
                            offsetY + y * state.pixelSize,
                            state.pixelSize,
                            state.pixelSize
                        )
                    }
                }
            }

            // 绘制网格 - 铺满整个Canvas背景
            if (state.showGrid) {
                ctx.save()
                ctx.strokeStyle = '#cccccc'
                ctx.lineWidth = 1
                ctx.globalAlpha = 0.8

                // 计算整个Canvas的网格尺寸
                const canvasGridWidth = Math.max(state.pixelData[0].length, state.pixelData.length)
                const canvasGridHeight = Math.max(state.pixelData[0].length, state.pixelData.length)

                ctx.beginPath()
                // 绘制垂直网格线 - 覆盖整个Canvas宽度
                for (let x = 0; x <= canvasGridWidth; x++) {
                    const xPos = x * state.pixelSize + 0.5
                    ctx.moveTo(xPos, 0)
                    ctx.lineTo(xPos, canvasGridHeight * state.pixelSize)
                }
                // 绘制水平网格线 - 覆盖整个Canvas高度
                for (let y = 0; y <= canvasGridHeight; y++) {
                    const yPos = y * state.pixelSize + 0.5
                    ctx.moveTo(0, yPos)
                    ctx.lineTo(canvasGridWidth * state.pixelSize, yPos)
                }
                ctx.stroke()
                ctx.restore()
            }
        }

        // 计算Canvas尺寸 - 始终为正方形以铺满背景
        const calculateCanvasWidth = () => {
            if (!state.pixelData.length) return 400
            // 使用最大的尺寸来确保正方形Canvas
            const maxDimension = Math.max(state.pixelData[0].length, state.pixelData.length)
            return maxDimension * state.pixelSize
        }

        const calculateCanvasHeight = () => {
            if (!state.pixelData.length) return 400
            // 使用最大的尺寸来确保正方形Canvas
            const maxDimension = Math.max(state.pixelData[0].length, state.pixelData.length)
            return maxDimension * state.pixelSize
        }

        // 文件上传相关函数
        const validateFile = (file) => {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
            if (!validTypes.includes(file.type)) {
                return '请选择有效的图片格式 (JPG, PNG, GIF, WebP)'
            }
            if (file.size > 10 * 1024 * 1024) {
                return '文件大小不能超过 10MB'
            }
            return null
        }

        const processFile = async (file) => {
            const validationError = validateFile(file)
            if (validationError) {
                uploadState.errorMessage = validationError
                return
            }

            uploadState.isLoading = true
            uploadState.errorMessage = ''

            try {
                const previewUrl = URL.createObjectURL(file)
                uploadState.previewImage = previewUrl

                const img = new Image()
                img.onload = () => {
                    uploadState.isLoading = false
                    handleImageUploaded(img)
                }
                img.onerror = () => {
                    uploadState.isLoading = false
                    uploadState.errorMessage = '图片加载失败，请选择其他图片'
                    clearImage()
                }
                img.src = previewUrl
            } catch (error) {
                uploadState.isLoading = false
                uploadState.errorMessage = '处理图片时发生错误'
                console.error('Image processing error:', error)
            }
        }

        // 事件处理函数
        const triggerFileInput = () => {
            if (!uploadState.isLoading) {
                fileInput.value?.click()
            }
        }

        const handleFileSelect = (event) => {
            const file = event.target.files?.[0]
            if (file) {
                processFile(file)
            }
        }

        const handleDrop = (event) => {
            const file = event.dataTransfer.files?.[0]
            if (file) {
                processFile(file)
            }
        }

        const clearImage = () => {
            if (uploadState.previewImage) {
                URL.revokeObjectURL(uploadState.previewImage)
                uploadState.previewImage = null
            }
            uploadState.errorMessage = ''
            if (fileInput.value) {
                fileInput.value.value = ''
            }
            handleImageCleared()
        }

        const handleImageUploaded = (image) => {
            try {
                state.originalImage = image
                state.globalError = null
                state.downloadError = null
                convertImageToPixelArt(image)
            } catch (error) {
                console.error('图片上传处理失败:', error)
                state.globalError = `图片上传处理失败: ${error.message}`
            }
        }

        const handleImageCleared = () => {
            state.originalImage = null
            state.pixelData = []
            state.colorStats.clear()
            state.downloadError = null
            state.globalError = null
            state.isProcessing = false
        }

        const handleParameterChange = () => {
            if (state.originalImage) {
                state.downloadError = null
                convertImageToPixelArt(state.originalImage)
            }
        }

        const handlePixelSizeChange = () => {
            handleParameterChange()
        }

        const handleImageSizeChange = () => {
            handleParameterChange()
        }

        const handleGridToggle = () => {
            nextTick(() => {
                render()
            })
        }

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

        const openReplaceDialogForTarget = (targetCandidate) => {
            // 当点的是未用颜色时，先作为目标候选，用户需在弹窗中选择要替换掉的已有颜色
            colorToReplace.value = null
            replacementTarget.value = targetCandidate
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
                console.error('全局替换颜色失败:', error)
                state.globalError = `全局替换颜色失败: ${error.message}`
            }
        }

        const handleColorSelect = (color) => {
            state.downloadError = null
            state.selectedColor = color

            if (isColorUsed(color)) {
                // 点到的是“已有颜色”：弹出框，选择目标颜色进行替换
                openReplaceDialogForSource(color)
            } else {
                // 点到的是“未使用颜色”：弹出框，选择要被替换掉的已有颜色
                openReplaceDialogForTarget(color)
            }
        }

        // 针对单个像素变更优化的颜色统计更新
        const updateColorStatsForPixelChange = (oldColor, newColor) => {
            // 减少旧颜色的计数
            if (state.colorStats.has(oldColor)) {
                const oldCount = state.colorStats.get(oldColor)
                if (oldCount <= 1) {
                    state.colorStats.delete(oldColor)
                } else {
                    state.colorStats.set(oldColor, oldCount - 1)
                }
            }

            // 增加新颜色的计数
            const newCount = (state.colorStats.get(newColor) || 0) + 1
            state.colorStats.set(newColor, newCount)
        }

        const handleCanvasClick = (event) => {
            console.log('Canvas被点击了！')

            if (!state.pixelData.length) {
                console.log('没有像素数据')
                return
            }

            if (!state.selectedColor) {
                console.log('未选择颜色，当前选中:', state.selectedColor)
                return
            }

            const canvas = canvasRef.value
            if (!canvas) {
                console.log('Canvas元素不存在')
                return
            }

            const rect = canvas.getBoundingClientRect()
            // 获取相对于Canvas显示区域的坐标
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            console.log(`点击坐标: (${x}, ${y}), Canvas显示尺寸: ${rect.width}x${rect.height}, 像素大小: ${state.pixelSize}`)

            // 计算图像居中后的偏移量
            const imageWidth = state.pixelData[0].length * state.pixelSize
            const imageHeight = state.pixelData.length * state.pixelSize
            const offsetX = (rect.width - imageWidth) / 2
            const offsetY = (rect.height - imageHeight) / 2

            // 考虑偏移量计算像素位置
            const adjustedX = x - offsetX
            const adjustedY = y - offsetY
            const pixelX = Math.floor(adjustedX / state.pixelSize)
            const pixelY = Math.floor(adjustedY / state.pixelSize)

            console.log(`计算的像素坐标: (${pixelX}, ${pixelY})`)
            console.log(`像素数据尺寸: ${state.pixelData.length} x ${state.pixelData[0]?.length || 0}`)

            if (pixelX >= 0 && pixelX < state.pixelData[0].length &&
                pixelY >= 0 && pixelY < state.pixelData.length) {

                const oldColor = state.pixelData[pixelY][pixelX]
                let newColor

                if (state.isDeleteMode) {
                    // 删除模式：只删除选中的颜色，替换为白色或最接近的背景色
                    if (oldColor === state.selectedColor) {
                        newColor = '#FFFFFF' // 删除时替换为白色
                        console.log(`删除像素 (${pixelX}, ${pixelY}), 从 ${oldColor} 改为 ${newColor}`)
                    } else {
                        console.log('删除模式：只能删除选中的颜色')
                        return
                    }
                } else {
                    // 添加模式：将像素改为选中的颜色
                    newColor = state.selectedColor

                    // 如果颜色相同，不需要更改
                    if (oldColor === newColor) {
                        console.log('颜色相同，无需更改')
                        return
                    }

                    console.log(`添加像素 (${pixelX}, ${pixelY}), 从 ${oldColor} 改为 ${newColor}`)
                }

                // 更新像素颜色 - 创建新的数组以触发响应式更新
                const newPixelData = state.pixelData.map((row, rowIndex) => {
                    if (rowIndex === pixelY) {
                        return row.map((pixel, colIndex) => {
                            if (colIndex === pixelX) {
                                return newColor
                            }
                            return pixel
                        })
                    }
                    return row
                })

                state.pixelData = newPixelData

                // 更新颜色统计
                updateColorStatsForPixelChange(oldColor, newColor)

                // 重新渲染Canvas
                nextTick(() => {
                    render()
                })
            }
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
                link.download = `pixel-art-${Date.now()}.png`

                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)

            } catch (error) {
                console.error('下载失败:', error)
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

        // 颜色相关计算函数
        const isColorUsed = (color) => {
            return state.colorStats.has(color)
        }

        const getColorCount = (color) => {
            return state.colorStats.get(color) || 0
        }

        const getColorUsageText = (color) => {
            // 调色板不再显示使用次数，保留函数以兼容 title 调用已移除
            return ''
        }

        const getModeText = (color) => {
            return isColorUsed(color) ? '- 选择目标颜色进行替换' : '- 选择要被替换的已有颜色'
        }

        // 动态调整网格列数
        const getGridColumns = () => {
            // 根据像素大小动态调整调色板网格
            if (state.pixelSize <= 5) return 16  // 小像素时显示更多列
            if (state.pixelSize <= 10) return 12
            if (state.pixelSize <= 15) return 10
            return 8  // 大像素时显示较少列
        }

        // 动态调整统计区域高度
        const getStatsHeight = () => {
            // 根据像素大小调整统计区域高度
            const baseHeight = 200
            const adjustment = (state.pixelSize - 10) * 5
            return Math.max(150, Math.min(400, baseHeight + adjustment)) + 'px'
        }

        // 生命周期
        onMounted(() => {
            initializeCanvas()
        })

        return {
            FIXED_COLORS,
            FIXED_COLOR_ITEMS,
            state,
            uploadState,
            canvasRef,
            canvasContainerRef,
            fileInput,
            hasStats,
            totalPixels,
            usedColorsCount,
            sortedStats,
            premiumUsage,
            // 替换对话框相关
            replacementDialogVisible,
            colorToReplace,
            replacementTarget,
            replacementOptions,
            replaceColorGlobally,
            openReplaceDialogForSource,
            openReplaceDialogForTarget,
            triggerFileInput,
            handleFileSelect,
            handleDrop,
            clearImage,
            handlePixelSizeChange,
            handleImageSizeChange,
            handleGridToggle,
            handleColorSelect,
            handleCanvasClick,
            handleDownload,
            calculateCanvasWidth,
            calculateCanvasHeight,
            updateColorStatsForPixelChange,
            isColorUsed,
            getColorCount,
            getColorUsageText,
            getModeText,
            getGridColumns,
            getStatsHeight
        }
    }
}
</script>

<style scoped>
.pixel-art-generator {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
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

/* 顶部上传区域 */
.top-upload {
    display: flex;
    justify-content: center;
}

.upload-section {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
}

/* 图片上传样式 */
.image-uploader {
    width: 50%;
    max-width: 400px;
}

.upload-area {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.3s ease;
    min-height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.upload-area:hover {
    border-color: #007bff;
}

.upload-prompt {
    color: #666;
}

.upload-icon {
    font-size: 48px;
    margin-bottom: 16px;
}

.upload-hint {
    font-size: 14px;
    color: #999;
    margin-top: 8px;
}

.loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
}

.preview-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.preview-image {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 4px;
}

.clear-button {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ff4444;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.clear-button:hover {
    background: #cc0000;
}

.error-message {
    margin-top: 12px;
    padding: 8px 12px;
    background: #ffe6e6;
    color: #cc0000;
    border-radius: 4px;
    font-size: 14px;
}

/* 控制面板样式 */
.control-panel-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.control-panel {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 10px;
}

.control-panel.compact .panel-title {
    margin-bottom: 10px;
}

.panel-title {
    margin: 0 0 20px 0;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
}

.control-group {
    margin-bottom: 15px;
}

.control-group.inline {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0;
}

.control-group.inline {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0;
}

.control-group.inline .control-label {
    margin-bottom: 0;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    color: #333;
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

.color-fill-info {
    background-color: #e8f4fd;
    border: 1px solid #b3d9ff;
    border-radius: 6px;
    padding: 12px;
}

.info-text {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #0066cc;
}

.info-icon {
    font-size: 16px;
}

/* 底部左右布局 */
.bottom-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
}

.left-pane {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.top-row {
    display: flex;
    gap: 16px;
}

.controls-row {
    display: flex;
    align-items: center;
    gap: 20px;
}

.control-group.inline {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 0;
}

.canvas-wrap {
    width: 50%;
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 10px;
    min-height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.download-inline {
    display: flex;
    align-items: center;
    gap: 12px;
}

.right-pane {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.canvas-container {
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
}

canvas {
    display: block;
    background-color: transparent;
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
    padding: 10px;
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

/* 移除模式指示相关样式 */

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
    grid-template-columns: repeat(11, 1fr);
    max-width: 100%;
}

/* 在较小容器宽度下自动减少列数，避免越界 */
@media (max-width: 1280px) {
    .color-grid {
        grid-template-columns: repeat(8, 1fr);
    }
}

@media (max-width: 1024px) {
    .color-grid {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media (max-width: 768px) {
    .color-grid {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media (max-width: 480px) {
    .color-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.color-item {
    width: 28px;
    height: 28px;
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

.used-dot {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(76, 175, 80, 0.9);
    pointer-events: none;
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

/* 替换对话框样式 */
.replace-dialog-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 999;
}

.replace-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(880px, 92vw);
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    display: flex;
    flex-direction: column;
}

.replace-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid #eee;
}

.replace-header h4 {
    margin: 0;
    font-size: 16px;
}

.close-btn {
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
}

.replace-body {
    padding: 12px;
}

.replace-instructions {
    margin-bottom: 12px;
    padding: 8px 12px;
    background: #f0f8ff;
    border: 1px solid #e3f2fd;
    border-radius: 6px;
}

.replace-instructions p {
    margin: 0;
    font-size: 12px;
    color: #1976d2;
    line-height: 1.4;
}

.replace-target-section {
    margin-top: 12px;
}

.replace-label {
    font-size: 13px;
    color: #333;
    margin-bottom: 8px;
}

.replace-grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 4px;
}

.replace-item {
    width: 74px;
    height: 28px;
    border-radius: 6px;
    border: 2px solid transparent;
    cursor: pointer;
    position: relative;
}

.replace-item.active {
    border-color: #ff9800;
}

.replace-item.disabled {
    cursor: not-allowed;
    opacity: 0.4;
}

.replace-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 10px 12px;
    border-top: 1px solid #eee;
}

.btn {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
}

.btn.primary {
    background: #1976d2;
    color: #fff;
    border-color: #1976d2;
}


.color-item.used {
    border-color: #4CAF50;
    box-shadow: 0 0 0 1px rgba(76, 175, 80, 0.25);
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
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
    font-size: 14px;
    color: #666;
    gap: 16px;
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
    font-size: 18px;
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

.stat-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    border-bottom: 1px solid #e8e8e8;
    transition: background-color 0.2s ease;
}

.stat-item:hover {
    background-color: #f0f0f0;
}

.stat-item:last-child {
    border-bottom: none;
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

.percentage {
    font-size: 12px;
    color: #666;
    font-weight: bold;
}

.usage-bar {
    width: 100%;
    height: 3px;
    background: #e0e0e0;
    border-radius: 2px;
    margin-top: 4px;
    overflow: hidden;
}

.usage-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50, #8BC34A);
    border-radius: 2px;
    transition: width 0.3s ease;
}

.no-stats {
    text-align: center;
    padding: 40px 20px;
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
.download-section {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.download-btn {
    display: flex;
    align-items: center;
    gap: 5px;
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

/* 统计样式 */
.stats-section {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
}

.stats-section h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #333;
}

.color-stats {
    width: 100%;
    height: 100%;
}

.stats-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.total-colors,
.total-pixels {
    font-weight: 500;
}

.stats-list {
    flex: 1;
    overflow-y: auto;
    max-height: 300px;
}

.stat-item {
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f5f5f5;
    gap: 12px;
}

.stat-item:last-child {
    border-bottom: none;
}

.color-preview {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid #ddd;
    flex-shrink: 0;
}

.color-info {
    flex: 1;
    min-width: 0;
}

.color-hex {
    display: block;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #333;
    font-weight: 500;
}

.usage-info {
    display: flex;
    gap: 8px;
    margin-top: 2px;
}

.pixel-count {
    font-size: 11px;
    color: #666;
}

.percentage {
    font-size: 11px;
    color: #888;
    font-weight: 500;
}

.usage-bar {
    width: 60px;
    height: 6px;
    background-color: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
    flex-shrink: 0;
}

.usage-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50, #2196F3);
    border-radius: 3px;
    transition: width 0.3s ease;
}

.no-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #666;
    text-align: center;
}

.no-stats p {
    margin: 5px 0;
}

.hint {
    font-size: 12px;
    color: #999;
}

/* 底部整行调色板 */
.palette-fullrow {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 10px;
}

.palette-fullrow .color-grid {
    grid-template-columns: repeat(32, 1fr);
    gap: 4px;
    margin-top: 12px;
}

.palette-fullrow .color-item {
    width: 25px;
    height: 25px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .generator-header {
        margin-bottom: 10px;
    }

    .generator-header h2 {
        font-size: 20px;
    }

    .generator-header p {
        font-size: 13px;
    }

    .bottom-section {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .left-pane {
        gap: 12px;
    }

    .top-row {
        flex-direction: column;
        gap: 12px;
    }

    .image-uploader,
    .canvas-wrap {
        width: 100%;
        max-width: none;
    }

    .canvas-wrap {
        min-height: 200px;
    }

    .controls-row {
        flex-wrap: wrap;
        gap: 16px;
        align-items: stretch;
    }

    .control-group.inline {
        min-width: 140px;
    }

    .control-group.inline .control-label {
        font-size: 13px;
    }

    .slider {
        flex: 1;
        max-width: 200px;
    }

    .download-btn {
        padding: 8px 16px;
        font-size: 13px;
    }

    .download-icon {
        font-size: 16px;
    }

    .right-pane .color-stats {
        padding: 8px;
    }

    .stats-summary {
        padding: 8px;
        margin-bottom: 12px;
        gap: 12px;
    }

    .summary-item {
        gap: 2px;
    }

    .summary-label {
        font-size: 11px;
    }

    .summary-value {
        font-size: 16px;
    }

    .stats-grid {
        grid-template-columns: repeat(8, 1fr);
        gap: 2px;
        padding: 4px;
    }

    .stat-color-item {
        width: 24px;
        height: 24px;
    }

    .points-panel {
        padding: 8px;
        margin-top: 10px;
    }

    .points-title {
        font-size: 13px;
        margin-bottom: 6px;
    }

    .points-summary {
        gap: 8px;
        margin-bottom: 6px;
        font-size: 11px;
    }

    .points-list {
        max-height: 120px;
    }

    .points-item {
        gap: 8px;
        padding: 4px 0;
    }

    .color-preview {
        width: 18px;
        height: 18px;
    }

    .color-hex {
        font-size: 10px;
    }

    .usage-info {
        gap: 6px;
    }

    .pixel-count,
    .points {
        font-size: 10px;
    }

    .color-palette {
        padding: 8px;
    }

    .palette-instructions {
        margin-bottom: 10px;
        padding: 6px 10px;
    }

    .instruction-text {
        font-size: 11px;
    }

    .color-grid {
        grid-template-columns: repeat(8, 1fr);
        gap: 2px;
        margin-top: 10px;
    }

    .color-item {
        width: 24px;
        height: 24px;
    }

    .palette-fullrow .color-grid {
        grid-template-columns: repeat(20, 1fr);
        gap: 3px;
        margin-top: 10px;
    }

    .palette-fullrow .color-item {
        width: 22px;
        height: 22px;
    }

    .replace-dialog {
        width: 95vw;
        max-width: none;
    }

    .replace-header {
        padding: 8px 10px;
    }

    .replace-header h4 {
        font-size: 15px;
    }

    .replace-body {
        padding: 10px;
    }

    .replace-instructions {
        margin-bottom: 10px;
        padding: 6px 10px;
    }

    .replace-instructions p {
        font-size: 11px;
    }

    .replace-label {
        font-size: 12px;
        margin-bottom: 6px;
    }

    .replace-grid {
        grid-template-columns: repeat(6, 1fr);
        gap: 3px;
    }

    .replace-item {
        width: 50px;
        height: 20px;
    }

    .replace-footer {
        padding: 8px 10px;
        gap: 8px;
    }

    .btn {
        padding: 6px 12px;
        font-size: 13px;
    }
}

@media (max-width: 768px) {
    .generator-header h2 {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .generator-header p {
        font-size: 12px;
    }

    .global-error,
    .processing-indicator {
        padding: 10px 12px;
        font-size: 13px;
        margin-top: 12px;
    }

    .bottom-section {
        gap: 12px;
    }

    .left-pane {
        gap: 10px;
    }

    .top-row {
        gap: 10px;
    }

    .image-uploader {
        max-width: 100%;
    }

    .upload-area {
        min-height: 200px;
        padding: 8px;
    }

    .upload-icon {
        font-size: 36px;
        margin-bottom: 12px;
    }

    .upload-hint {
        font-size: 12px;
    }

    .canvas-wrap {
        min-height: 180px;
        padding: 8px;
    }

    .control-panel {
        padding: 8px;
    }

    .panel-title,
    .stats-title,
    .palette-title {
        margin: 0 0 12px 0;
        font-size: 14px;
        padding-bottom: 4px;
    }

    .controls-row {
        flex-direction: column;
        gap: 12px;
        align-items: stretch;
    }

    .control-group.inline {
        min-width: auto;
        justify-content: space-between;
    }

    .control-group.inline .control-label {
        font-size: 13px;
    }

    .slider {
        flex: 1;
        max-width: 200px;
    }

    .download-btn {
        padding: 8px 16px;
        font-size: 13px;
    }

    .download-icon {
        font-size: 16px;
    }

    .right-pane .color-stats {
        padding: 8px;
    }

    .stats-summary {
        padding: 8px;
        margin-bottom: 12px;
        gap: 12px;
    }

    .summary-item {
        gap: 2px;
    }

    .summary-label {
        font-size: 11px;
    }

    .summary-value {
        font-size: 16px;
    }

    .stats-grid {
        grid-template-columns: repeat(6, 1fr);
        gap: 2px;
        padding: 4px;
    }

    .stat-color-item {
        width: 24px;
        height: 24px;
    }

    .points-panel {
        padding: 8px;
        margin-top: 10px;
    }

    .points-title {
        font-size: 13px;
        margin-bottom: 6px;
    }

    .points-summary {
        gap: 8px;
        margin-bottom: 6px;
        font-size: 11px;
    }

    .points-list {
        max-height: 120px;
    }

    .points-item {
        gap: 8px;
        padding: 4px 0;
    }

    .color-preview {
        width: 18px;
        height: 18px;
    }

    .color-hex {
        font-size: 10px;
    }

    .usage-info {
        gap: 6px;
    }

    .pixel-count,
    .points {
        font-size: 10px;
    }

    .color-palette {
        padding: 8px;
    }

    .palette-instructions {
        margin-bottom: 10px;
        padding: 6px 10px;
    }

    .instruction-text {
        font-size: 11px;
    }

    .color-grid {
        grid-template-columns: repeat(8, 1fr);
        gap: 2px;
        margin-top: 10px;
    }

    .color-item {
        width: 24px;
        height: 24px;
    }

    .palette-fullrow .color-grid {
        grid-template-columns: repeat(10, 1fr);
        gap: 3px;
        margin-top: 10px;
    }

    .palette-fullrow .color-item {
        width: 22px;
        height: 22px;
    }

    .replace-dialog {
        width: 95vw;
        max-width: none;
    }

    .replace-header {
        padding: 8px 10px;
    }

    .replace-header h4 {
        font-size: 15px;
    }

    .replace-body {
        padding: 10px;
    }

    .replace-instructions {
        margin-bottom: 10px;
        padding: 6px 10px;
    }

    .replace-instructions p {
        font-size: 11px;
    }

    .replace-label {
        font-size: 12px;
        margin-bottom: 6px;
    }

    .replace-grid {
        grid-template-columns: repeat(6, 1fr);
        gap: 3px;
    }

    .replace-item {
        width: 50px;
        height: 20px;
    }

    .replace-footer {
        padding: 8px 10px;
        gap: 8px;
    }

    .btn {
        padding: 6px 12px;
        font-size: 13px;
    }
}
</style>
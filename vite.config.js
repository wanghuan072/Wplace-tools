import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { getAllRoutes } from './src/config/seo.js'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    sitemap({
      hostname: 'https://wplacetools.org', // 使用临时有效域名，后期替换
      dynamicRoutes: getAllRoutes(),
      readable: true,
      exclude: ['/404', '/error'],
      outDir: 'dist'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    cssCodeSplit: true, // 启用CSS代码分割，按需加载
    minify: 'terser', // 使用terser进行更激进的压缩
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true, // 移除debugger
        pure_funcs: ['console.log', 'console.info'], // 移除特定函数调用
      },
      mangle: {
        safari10: true, // 兼容Safari 10
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 将Vue相关库分离
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router') || id.includes('node_modules/pinia')) {
            return 'vue-vendor'
          }
          // 将i18n分离
          if (id.includes('node_modules/vue-i18n')) {
            return 'i18n'
          }
          // 将大型组件分离
          if (id.includes('PixelArtGeneratorUnified')) {
            return 'pixel-generator'
          }
          if (id.includes('TextToPixelArt')) {
            return 'text-to-pixel'
          }
          if (id.includes('WplacePluginsView')) {
            return 'plugins-view'
          }
          // 将博客相关组件分离
          if (id.includes('Blog') || id.includes('blog')) {
            return 'blog'
          }
        },
        // 优化chunk大小
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000
  },
  // 优雅的CSS优化方案
  css: {
    // 启用CSS代码分割
    devSourcemap: false
  },
  // 性能优化配置
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
    exclude: ['vue-demi']
  },
  // 预构建优化
  esbuild: {
    drop: ['console', 'debugger']
  },
  // 减少强制重排的优化
  server: {
    hmr: {
      overlay: false // 禁用HMR覆盖层，减少重排
    }
  }
})

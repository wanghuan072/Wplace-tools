import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { getAllRoutes } from './src/config/seo.js'

// 插件：移除index.css的HTML引用，让它按需加载
function removeIndexCSSPlugin() {
  return {
    name: 'remove-index-css',
    generateBundle(options, bundle) {
      // 查找HTML文件
      const htmlFiles = Object.keys(bundle).filter(fileName => fileName.endsWith('.html'))

      htmlFiles.forEach(htmlFile => {
        const htmlAsset = bundle[htmlFile]
        let html = htmlAsset.source

        // 移除index.css的link标签（更精确的匹配）
        html = html.replace(/<link rel="stylesheet" crossorigin href="\/assets\/index-[^"]*\.css"[^>]*>/g, '')

        htmlAsset.source = html
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    removeIndexCSSPlugin(),
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
    rollupOptions: {
      output: {
        manualChunks: {
          // 将Vue相关库分离
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          // 将i18n分离
          'i18n': ['vue-i18n']
        }
      }
    }
  }
})

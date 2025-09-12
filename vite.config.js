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

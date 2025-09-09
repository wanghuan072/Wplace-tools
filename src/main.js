import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18nPlugin)

// 将router和i18n实例暴露到全局，供组合式函数使用
window.$router = router
window.$i18n = app.config.globalProperties.$i18n

app.mount('#app')

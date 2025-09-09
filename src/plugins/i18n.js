/**
 * i18n插件配置
 */
import { i18n } from '@/locales'

export default {
  install(app) {
    app.use(i18n)
  }
}


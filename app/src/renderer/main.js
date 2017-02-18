import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Material from 'vue-material'
import VueI18n from 'vue-i18n'

import 'vue-material/dist/vue-material.css'
import 'font-awesome/css/font-awesome.min.css'

import App from './App'
import routes from './routes'
import store from './store'
import translations from '../translations/translation'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Material)
Vue.use(Router)

Vue.use(VueI18n)
Vue.config.lang = 'en'
Object.keys(translations).forEach(function (lang) {
  Vue.locale(lang, translations[lang])
})

Vue.config.debug = true

Vue.http.options.emulateJSON = true

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'orange'
})

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  store,
  ...App
}).$mount('#app')

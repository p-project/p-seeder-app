import Vue from 'vue'
import Electron from 'vue-electron'
import Router from 'vue-router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(VueMaterial)
Vue.use(Router)

Vue.material.theme.register('default', {
  primary: 'cyan',
  accent: 'pink'
})

Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')

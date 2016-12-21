import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(VueMaterial)
Vue.use(Router)
Vue.use(Resource)

Vue.material.theme.register('default', {
  primary: 'teal',
  accent: 'orange'
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

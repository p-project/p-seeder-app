import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Vuex from 'vuex'
import Router from 'vue-router'
import Material from 'vue-material'

import 'vue-material/dist/vue-material.css'
import 'font-awesome/css/font-awesome.min.css'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Vuex)
Vue.use(Material)
Vue.use(Router)
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
  ...App
}).$mount('#app')

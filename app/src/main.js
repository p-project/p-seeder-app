import Vue from 'vue'
import VueElectron from 'vue-electron'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css'

import App from './App'
import routes from './routes'

Vue.use(VueElectron)
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.emulateJSON = true

Vue.material.theme.register('default', {
  primary: 'teal',
  accent: 'orange'
})

Vue.config.debug = true

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')

import Vue from 'vue'
import Electron from 'vue-electron'
import VueMdl from 'vue-mdl'

Vue.use(Electron)
Vue.use(VueMdl)

Vue.config.debug = true

import App from './App'

new Vue({
  ...App
}).$mount('#app')

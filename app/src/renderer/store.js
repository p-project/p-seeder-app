import Vue from 'vue'
import Vuex from 'vuex'
import config from './config'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authUser: null,
    lang: config.get('lang')
  },
  mutations: {
    SET_USER: function (state, user) {
      state.authUser = user
    },
    SET_LANG: function (state, lang) {
      state.lang = lang
      config.set('lang', lang)
      Vue.config.lang = lang
    }
  },
  actions: {
    login ({ commit }) {
      return Vue.http.get('http://localhost:8001/accounts/1').then((response) => {
        if (response.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return JSON.parse(response.body)['username']
        }
      }).then((authUser) => {
        commit('SET_USER', authUser)
      })
    }
  }
})

export default store

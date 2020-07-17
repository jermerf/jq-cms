import Vue from 'vue'
import Vuex from 'vuex'
import jQuery from 'jquery'

const $ = jQuery

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      username: ""
    },
    notifications: [],
    bgColor: "#333333",
    ui: {
      username: "",
      password: ""
    }
  },
  mutations: {
    loginSuccessful(state, username) {
      state.user.loggedIn = true
      state.user.username = username
    },
    setBackground(state, newBgColor) {
      state.bgColor = newBgColor
    },
    setUiUsername(state, username) { state.ui.username = username },
    setUiPassword(state, password) { state.ui.password = password },
  },
  actions: {
    login(context) {
      $.post('/login', res => {
        if (res.success) {
          context.commit("loginSuccessful", res.username)
        }
      })
    }
  },
  modules: {
  }
})

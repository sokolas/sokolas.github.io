import { createStore } from 'vuex'
import axios from 'axios'
import { url } from '@/cfg'

export default createStore({
  state: {
    error: {},
    user: null,
    loggedIn: false,
    sid: window.localStorage.getItem('sid'),
    loading: false,
    webhook: null,
    editing: false
  },
  getters: {
    hasSid(state) {
      return state.sid !== undefined && state.sid != null
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    logIn(state, user) {
      state.user = user
      state.loggedIn = true
    },
    logOut(state) {
      state.loggedIn = false
    },
    setUser(state, user) {
      state.user = user
    },
    removeUser(state) {
      state.user = null
    },
    setSid(state, sid) {
      state.sid = sid
      window.localStorage.setItem('sid', sid)
    },
    removeSid(state) {
      state.sid = null
      window.localStorage.removeItem('sid')
    },
    startLoading(state) {
      console.log('loading')
      state.loading = true
    },
    stopLoading(state) {
      console.log('loaded')
      state.loading = false
    },
    setWebhook(state, webhook) {
      state.webhook = webhook
    },
    editing(state, editing) {
      state.editing = editing
    }
  },
  actions: {
    logIn({ commit, state }) {
      console.log(`logging in, ${state.sid}`)
      commit('setSid', state.sid)
      commit('startLoading')
      axios.get(url + '/getCurrentUser', {
          headers: {
            token: state.sid
          }
        })
        .then(response => {
          console.log(response.status)
          if (response.status === 200) {
            commit('logIn', response.data)
            commit('setWebhook', response.data.webhook)
            commit('setError', null)
            // response.data
          }
          commit('stopLoading')
        })
        .catch(error => {
          commit('setError', error)
          commit('stopLoading')
        })
    },
    setWebhook({ commit, state }, webhook) {
      console.log('Setting webhook: ' + webhook)
      commit('startLoading')
      axios.post(url + '/updateWebhook', JSON.stringify({ webhook: webhook }), {
        headers: {
          token: state.sid
        }
      })
      .then(response => {
        console.log(response.status)
        if (response.status === 200) {
          commit('setWebhook', webhook)
          commit('editing', false)
          commit('setError', null)
          // response.data
        }
        commit('stopLoading')
      })
      .catch(error => {
        commit('setError', error)
        commit('stopLoading')
      })
    },
    logOut({ commit }) {
      commit('logOut')
      commit('removeUser')
      commit('removeSid')
    }
  },
  modules: {
  }
})

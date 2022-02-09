const state = {
  GOOGLE_TOKEN: '',
  GOOGLE_ACCOUNT: '',
  GOOGLE_EMAIL: ''
}

const getters = {
  getGOOGLE: state => state.GOOGLE_TOKEN
}

const actions = {
  oAuthLogin({ commit }, payload) {
    commit('getGOOGLE', payload)
  },
}

const mutations = {
  getGOOGLE(state, payload) {
    state.GOOGLE_TOKEN = payload.id_token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
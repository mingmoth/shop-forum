const state = {
  FB: null
}

const getters = {
  getFB: state => state.FB
}

const actions = {
  fetchFB({ commit }, payload) {
    commit ('getFB', payload)
  },
}

const mutations = {
  getFB(state, payload) {
    state.FB = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
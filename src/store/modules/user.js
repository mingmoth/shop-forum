const state = {
  currentUser: '',
  isAithenticated: false
}

const getters = {
  getCurrentUser: state => state.currentUser
}

const actions = {
  setCurrentUser({ commit }, user) {
    commit('getCurrentUser', user)
  },
}

const mutations = {
  getCurrentUser(state, user) {
    state.currentUser = {
      ...state.currentUser,
      ...user
    }
    state.isAithenticated = true
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
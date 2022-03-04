import userAPI from '../../apis/user'

const state = {
  currentUser: '',
  isAuthenticated: false
}

const getters = {
  getCurrentUser: state => state.currentUser
}

const actions = {
  async setCurrentUser({ commit }, user) {
    const { data } = await userAPI.getCurrentUser()
    commit('getCurrentUser', data)
    commit('getCurrentUser', user)
  },
  setLogout({ commit }) {
    commit('logoutUser')
  }
}

const mutations = {
  getCurrentUser(state, user) {
    state.currentUser = {
      ...state.currentUser,
      ...user
    }
    state.isAuthenticated = true
  },
  logoutUser(state) {
    localStorage.removeItem('token')
    state.currentUser = ''
    state.isAuthenticated = false
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
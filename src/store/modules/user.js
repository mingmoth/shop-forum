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
    try {
      const { data } = await userAPI.getCurrentUser()
      commit('getCurrentUser', data)
    } catch (error) {
      console.log(error)
    }
    commit('getCurrentUser', user)
  },
}

const mutations = {
  getCurrentUser(state, user) {
    state.currentUser = {
      ...state.currentUser,
      ...user
    }
    state.isAuthenticated = true
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
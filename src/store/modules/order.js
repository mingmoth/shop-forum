const state = {
  orders: [],
}

const getters = {
  getOrders: state => state.orders
}

const actions = {
  fetchOrders({ commit }, orders) {
    commit('getOrders', orders)
  }
}

const mutations = {
  getOrders(state, orders) {
    state.orders = orders
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
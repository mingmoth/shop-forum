const state = {
  adminProducts: [],
  adminProduct: {},
  adminOrders: [],
}

const getters = {
  getAdminProducts: state => state.adminProducts,
  getAdminProduct: state => state.adminProduct,
  getAdminOrders: state => state.adminOrders
}

const actions = {
  fetchAdminProducts({ commit }, products) {
    commit('getAdminProducts', products)
  },
  fetchAdminProduct({ commit }, product) {
    commit('getAdminProduct', product)
  },
  fetchAdminOrders({ commit }, orders) {
    commit('getAdminOrders', orders)
  }
}

const mutations = {
  getAdminProducts(state, products) {
    state.adminProducts = products
  },
  getAdminProduct(state, product) {
    state.adminProduct = product
  },
  getAdminOrders(state, orders) {
    state.adminOrders = orders
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
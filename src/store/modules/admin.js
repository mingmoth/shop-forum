const state = {
  adminProducts: [],
  adminProduct: {}
}

const getters = {
  getAdminProducts: state => state.adminProducts,
  getAdminProduct: state => state.adminProduct,
}

const actions = {
  fetchAdminProducts({ commit }, products) {
    console.log('fetch')
    commit('getAdminProducts', products)
  },
  fetchAdminProduct({ commit }, product) {
    commit('getAdminProduct', product)
  }
}

const mutations = {
  getAdminProducts(state, products) {
    state.adminProducts = products
  },
  getAdminProduct(state, product) {
    state.adminProduct = product
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
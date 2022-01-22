const state = {
  products: [],
}

const getters = {
  getProducts: state => state.products,
}

const actions = {
  fetchProducts({ commit }, products) {
    commit('getProducts', products)
  },
}

const mutations = {
  getProducts(state, products) {
    state.products = products
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
const state = {
  products: [],
  product: {}
}

const getters = {
  getProducts: state => state.products,
  getProduct: state => state.product,
}

const actions = {
  fetchProducts({ commit }, products) {
    commit('getProducts', products)
  },
  fetchProduct({ commit }, product) {
    commit('getProduct', product)
  }
}

const mutations = {
  getProducts(state, products) {
    state.products = products
  },
  getProduct(state, product) {
    state.product = product
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
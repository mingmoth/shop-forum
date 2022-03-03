const state = {
  products: [],
  product: {},
  totalPage: 1,
}

const getters = {
  getProducts: state => state.products,
  getProduct: state => state.product,
  getTotalPage: state => state.totalPage,
}

const actions = {
  fetchProducts({ commit }, products) {
    commit('getProducts', products)
  },
  fetchProduct({ commit }, product) {
    commit('getProduct', product)
  },
  fetchTotalPage({ commit }, totalPage) {
    commit('getTotalPage' ,totalPage)
  }
}

const mutations = {
  getProducts(state, products) {
    state.products = products
  },
  getProduct(state, product) {
    state.product = product
  },
  getTotalPage(state, totalPage) {
    state.totalPage = totalPage
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
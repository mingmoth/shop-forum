const state = {
  products: [],
  product: {},
  totalPage: 1,
  currentPage: 1,
  prev: 1,
  next: 2,
  searchKeyword: '',
  searchProducts: []
}

const getters = {
  getProducts: state => state.products,
  getProduct: state => state.product,
  getTotalPage: state => state.totalPage,
  getCurrentPage: state => state.currentPage,
  getPrev: state => state.prev,
  getNext: state => state.next,
  getSearchKeyword: state => state.searchKeyword,
  getSearchProducts: state => state.searchProducts,
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
  },
  fetchCurrentPage({ commit }, currentPage) {
    commit('getCurrentPage', currentPage)
  },
  fetchPrev({ commit }, prev) {
    commit('getPrev', prev)
  },
  fetchNext({ commit }, next) {
    commit('getNext', next)
  },
  fetchSearchKeyword({ commit }, searchKeyword) {
    commit('getSearchKeyword', searchKeyword)
  },
  fetchSearchProducts({ commit }, searchProducts) {
    commit('getSearchProducts', searchProducts)
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
  },
  getCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  getPrev(state, prev) {
    state.prev = prev
  },
  getNext(state, next) {
    state.next = next
  },
  getSearchKeyword(state, searchKeyword) {
    state.searchKeyword = searchKeyword
  },
  getSearchProducts(state, searchProducts) {
    state.searchProducts = searchProducts
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
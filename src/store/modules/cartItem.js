const state = {
  cart: [],
  cartTotalPrice: 0,
}

const getters = {
  getCart: state => state.cart,
  getTotalPrice: state => state.cartTotalPrice
}

const actions = {
  fetchCart({ commit }, cart) {
    commit('getCart', cart)
  }
}

const mutations = {
  getCart(state, cart) {
    state.cart = cart.cart.items
    state.cartTotalPrice = cart.totalPrice
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
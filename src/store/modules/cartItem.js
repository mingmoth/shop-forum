const state = {
  cart: [],
  cartId: 0,
  cartTotalPrice: 0,
}

const getters = {
  getCart: state => state.cart,
  getCartId: state => state.cartId,
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
    state.cartId = cart.cart.id
    state.cartTotalPrice = cart.totalPrice
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
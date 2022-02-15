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
  },
  setCartItemDelete({ commit }, cartItemId) {
    commit('removeCartItem', cartItemId)
  },
  setCartItemMinus({ commit }, cartItemId) {
    commit('minusCartItem', cartItemId)
  },
  setCartItemPlus({ commit }, cartItemId) {
    commit('plusCartItem', cartItemId)
  }
}

const mutations = {
  getCart(state, cart) {
    state.cart = cart.cart.items
    state.cart = state.cart.map(c => {
      return c = {
        ...c,
        quantity: c.CartItem.quantity,
        cartItemId: c.CartItem.id
      }
    })
    state.cartId = cart.cart.id
    state.cartTotalPrice = cart.totalPrice
  },
  removeCartItem(state, cartItemId) {
    state.cartTotalPrice = 0
    state.cart = state.cart.filter(cart => cart.cartItemId !== cartItemId)
    state.cart.map(cart => {
      state.cartTotalPrice += (cart.price * cart.quantity)
    })
  },
  minusCartItem(state, cartItemId) {
    state.cart = state.cart.map(cart => {
      if (cart.CartItem.id === cartItemId) {
        state.cartTotalPrice -= cart.price
        return {
          ...cart,
          quantity: cart.quantity - 1
        }
      } else {
        return cart
      }
    })
  },
  plusCartItem(state, cartItemId) {
    state.cart = state.cart.map(cart => {
      if (cart.CartItem.id === cartItemId) {
        state.cartTotalPrice += cart.price
        return {
          ...cart,
          quantity: cart.quantity + 1
        }
      } else {
        return cart
      }
    })
    
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
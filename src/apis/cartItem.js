import { apiHelper } from "../utils/apis";

export default {
  getCart() {
    return apiHelper.get('/cart')
  },
  addCartItem(cartItemId) {
    return apiHelper.post(`/cartItem/${cartItemId}`)
  },
  removeCartItem(cartItemId) {
    return apiHelper.delete(`/cartItem/${cartItemId}`)
  },
  increaseCartItem(cartItemId) {
    return apiHelper.put(`/cartItem/${cartItemId}/add`)
  },
  decreaseCartItem(cartItemId) {
    return apiHelper.put(`/cartItem/${cartItemId}/sub`)
  }
}
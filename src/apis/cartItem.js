import { apiHelper } from "../utils/apis";

export default {
  getCart() {
    return apiHelper.get('/cart')
  },
  addCartItem(productId) {
    return apiHelper.post(`/cartItem/`, { productId })
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
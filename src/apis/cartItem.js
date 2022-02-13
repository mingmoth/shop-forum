import { apiHelper } from "../utils/apis";

export default {
  getCart() {
    console.log()
    return apiHelper.get('/cart' )
  },
  addCartItem({ productId, idToFindCart }) {
    return apiHelper.post(`/cartItem/`, { productId, idToFindCart })
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
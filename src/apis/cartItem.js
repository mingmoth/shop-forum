import { apiHelper } from "../utils/apis";

export default {
  getCart() {
    console.log()
    return apiHelper.get('/cart' )
  },
  addCartItem({ productId }) {
    return apiHelper.post(`/cartItem/`, { productId })
  },
  removeCartItem({ cartItemId }) {
    return apiHelper.put('/cartItem/del', { cartItemId })
  },
  increaseCartItem({cartItemId}) { 
    return apiHelper.put('/cartItem/add', { cartItemId })
  },
  decreaseCartItem({cartItemId}) {
    return apiHelper.put('/cartItem/sub', { cartItemId })
  }
}
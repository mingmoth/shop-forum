import { apiHelper } from "../utils/apis";

export default {
  getCart() {
    console.log()
    return apiHelper.get('/api/cart' )
  },
  addCartItem({ productId }) {
    return apiHelper.post(`/api/cartItem/`, { productId })
  },
  removeCartItem({ cartItemId }) {
    return apiHelper.put('/api/cartItem/del', { cartItemId })
  },
  increaseCartItem({cartItemId}) { 
    return apiHelper.put('/api/cartItem/add', { cartItemId })
  },
  decreaseCartItem({cartItemId}) {
    return apiHelper.put('/api/cartItem/sub', { cartItemId })
  }
}
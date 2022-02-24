import { apiHelper } from "../utils/apis";

export default {
  createOrder(payload) {
    return apiHelper.post('/order', payload)
  },
  getOrders() {
    return apiHelper.get('/order')
  },
  deleteOrder(orderId) {
    return apiHelper.delete(`/orders/${orderId}`)
  }
}
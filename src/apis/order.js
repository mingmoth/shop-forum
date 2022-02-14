import { apiHelper } from "../utils/apis";

export default {
  createOrder(payload) {
    return apiHelper.post('/order', payload)
  },
  getOrders() {
    return apiHelper.get('/orders')
  },
  getOrder(orderId) {
    return apiHelper.get(`/orders/${orderId}`)
  },
  deleteOrder(orderId) {
    return apiHelper.delete(`/orders/${orderId}`)
  }
}
import { apiHelper } from "../utils/apis";

export default {
  createOrder() {
    return apiHelper.post('/orders')
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
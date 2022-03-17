import { apiHelper } from "../utils/apis";

export default {
  createOrder(payload) {
    return apiHelper.post('/api/order', payload)
  },
  getOrders() {
    return apiHelper.get('/api/order')
  },
  deleteOrder(orderId) {
    return apiHelper.delete(`/api/orders/${orderId}`)
  },
  postTradeInfo(data) {
    return apiHelper.post('/api/order', data)
  },
}
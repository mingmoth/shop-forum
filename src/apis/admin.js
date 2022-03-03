import { apiHelper } from "../utils/apis";

export default {
  adminProducts() {
    return apiHelper.get('/api/admin/products')
  },
  adminProduct(productId) {
    return apiHelper.get(`/api/admin/product/${productId}`)
  },
  adminProductEdit(payload) {
    return apiHelper.put('/api/admin/product', payload)
  },
  adminOrders() {
    return apiHelper.get('/api/orders')
  }
}
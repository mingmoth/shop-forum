import { apiHelper } from "../utils/apis";

export default {
  adminProducts() {
    return apiHelper.get('/admin/products')
  },
  adminProduct(productId) {
    return apiHelper.get(`/admin/product/${productId}`)
  },
  adminProductEdit(payload) {
    return apiHelper.put('/admin/product', payload)
  },
  adminOrders() {
    return apiHelper.get('/orders')
  }
}
import { apiHelper } from "../utils/apis";

export default {
  adminProducts() {
    return apiHelper.get('/admin/products')
  },
  adminProduct() {
    return apiHelper.get('/admin/product')
  }
}
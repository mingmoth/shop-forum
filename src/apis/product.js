import { apiHelper } from "../utils/apis";

export default {
  getProducts() {
    return apiHelper.get('/api/products')
  },
  getProduct(productId) {
    return apiHelper.get(`/api/product/${productId}`)
  },
  searchProduct() {
    return apiHelper.get('/search/product' ,{})
  }
}
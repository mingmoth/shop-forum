import { apiHelper } from "../utils/apis";

export default {
  getProducts({page}) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/api/products?${searchParams.toString()}`)
  },
  getProduct(productId) {
    return apiHelper.get(`/api/product/${productId}`)
  },
  searchProducts(keyword) {
    return apiHelper.post('/api/search/product', keyword)
  }
}
import { apiHelper } from "../utils/apis";

export default {
  getProducts() {
    return apiHelper.get('/products')
  }
}
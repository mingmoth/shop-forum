import { mapActions } from 'vuex'
import { errorToast } from '../utils/toast'
import productAPI from '../apis/product'

export const productLoader = {
  methods: {
    ...mapActions(['fetchProducts', 'fetchProduct']),
    async setProducts() {
      try {
        const response = await productAPI.getProducts()
        const { data } = response
        this.fetchProducts(data.products.rows)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async setProduct(productId) {
      try {
        const { data, statusText } = await productAPI.getProduct(productId)
        if(statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
        }
        this.fetchProduct(data)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    }
  }
}
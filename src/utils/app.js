import { mapActions } from 'vuex'
import productAPI from '../apis/product'

export const productLoader = {
  methods: {
    ...mapActions(['fetchProducts']),
    async setProducts() {
      try {
        const response = await productAPI.getProducts()
        console.log(response)
        const { data } = response
        this.fetchProducts(data.products.rows)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
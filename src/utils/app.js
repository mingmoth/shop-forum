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
        this.fetchProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
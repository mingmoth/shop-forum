import { mapActions } from 'vuex'
import { successToast, errorToast } from '../utils/toast'
import productAPI from '../apis/product'
import orderAPI from '../apis/order'
import cartAPI from '../apis/cartItem'

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
        if (statusText !== 'OK') {
          throw new Error(data.message)
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

export const orderLoader = {
  methods: {
    ...mapActions(['fetchOrders']),
    async setOrders() {
      try {
        const { data, statusText } = await orderAPI.getOrders()
        if (statusText !== "OK") {
          throw new Error(data.message)
        }
        this.fetchOrders(data.orders)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    }
  }
}

export const cartLoader = {
  methods: {
    ...mapActions(['fetchCart']),
    async setCart() {
      try {
        const { data, statusText } = await cartAPI.getCart()
        if (statusText !== "OK") {
          throw new Error(data.message)
        }
        console.log(data)
        this.fetchCart(data)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async addCartItem(productId) {
      try {
        const { data, statusText } = await cartAPI.addCartItem(productId)
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    }
  }
}
import { mapActions } from 'vuex'
import { successToast, errorToast } from '../utils/toast'
import productAPI from '../apis/product'
import orderAPI from '../apis/order'
import cartAPI from '../apis/cartItem'
import adminAPI from '../apis/admin'

export const productLoader = {
  methods: {
    ...mapActions(['fetchProducts', 'fetchProduct']),
    async setProducts() {
      try {
        const response = await productAPI.getProducts()
        const { data } = response
        this.fetchProducts(data.products.rows)
      } catch (error) {
        console.log(error)
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
    },
    async postOrder(payload) {
      try {
        const { data, statusText } = await orderAPI.createOrder(payload)
        if (statusText !== "OK") {
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

export const cartLoader = {
  methods: {
    ...mapActions(['fetchCart', 'setCartItemDelete', 'setCartItemMinus', 'setCartItemPlus']),
    async setCart(userId) {
      try {
        const { data, statusText } = await cartAPI.getCart({idToFindCart: userId})
        if (statusText !== "OK") {
          throw new Error(data.message)
        }
        this.fetchCart(data)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async addCartItem(productId) {
      try {
        const { data, statusText } = await cartAPI.addCartItem({
          productId
        })
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
    },
    async removeCartItem(cartItemId) {
      try {
        const { data, statusText } = await cartAPI.removeCartItem({cartItemId: cartItemId})
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        this.setCartItemDelete(cartItemId)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    }, 
    async minusCartItem(cartItemId) {
      try { 
        const response = await cartAPI.decreaseCartItem({ cartItemId })
        console.log(response)
        this.setCartItemMinus(cartItemId)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async plusCartItem(cartItemId) {
      try {
        const response = await cartAPI.increaseCartItem({cartItemId})
        console.log(response)
        this.setCartItemPlus(cartItemId)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    }
  }
}

export const adminLoader = {
  methods: {
    ...mapActions(['fetchAdminProducts', 'fetchAdminProduct']),
    async setAdminProducts() {
      try {
        const { data, statusText }= await adminAPI.adminProducts()
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        console.log(data)
        this.fetchAdminProducts(data.products.rows)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async setAdminProduct() {
      try {
        const { data, statusText } = await adminAPI.adminProduct()
        if (statusText !== 'OK') {
          throw new Error(data.message)
        }
        console.log(data)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    }
  }
}
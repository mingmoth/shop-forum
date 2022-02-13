<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="cart-container">
        <p>購物車列表</p>
        <div class="cart-wrapper">
          <CartItem v-for="cartItem in getCart" :key="cartItem.id" :cartItem="cartItem"/>
        </div>
        <div class="cart-total">總金額 :<span class="cart-amount"><span>$ </span>{{getTotalPrice}}</span></div>
        
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { cartLoader } from '../utils/app'
import Navbar from "../components/Navbar.vue";
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  mixins: [ cartLoader ],
  components: { Navbar, CartItem },
  computed: {
    ...mapGetters(['getCart', 'getTotalPrice', 'getCurrentUser'])
  },
  created() {
    this.setCart(this.getCurrentUser.id)
  },
};
</script>

<style lang="sass" scoped>
.cart-container
  max-width: 1280px
  margin: 1em auto
  padding: 2%
  border: 1px solid $border-grey
  border-radius: 8px
  font-size: 1.3em
  font-weight: 500
  color: $text-content
  p
    border-bottom: 1px solid $border-grey
    padding-bottom: 0.5em
  .cart-wrapper
    height: 550px
    overflow-y: auto
    &::-webkit-scrollbar
      display: none
  .cart-total
    padding-top: 0.5em
    font-size: 0.9em
    font-weight: 400
  .cart-amount
    float: right
    color: $mainPink
</style>
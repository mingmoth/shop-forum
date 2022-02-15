<template>
  <div class="cart">
    <div class="cart-head">
      <router-link to="/products">
      <img :src="cartItem.image" alt="" class="cart-image"></router-link>
      <div></div>
    </div>
    <div class="cart-body">
      <div class="cart-sum">
        <div class="cart-name">{{cartItem.name}}</div>
        <div class="cart-count">
          <button 
            class="cart-minus"
            :disabled="cartItem.quantity<2"
            @click.stop.prevent="decreaseCartItem(cartItem.CartItem.id)">-</button>
          <div class="cart-quantity">{{cartItem.quantity}}</div>
          <button
            class="cart-plus"
            @click.stop.prevent="increaseCartItem(cartItem.CartItem.id)">+</button>
        </div>
      </div>
      <div class="cart-price"><span>$ </span>{{cartItem.price * cartItem.quantity}}</div>
      <img src="../assets/trash-solid.png" alt="" class="cart-delete" @click.stop.prevent="deleteCartItem(cartItem.CartItem.id)">
    </div>
  </div>
</template>

<script>
import { cartLoader } from '../utils/app'
export default {
  name: 'CartItem',
  mixins: [ cartLoader ],
  props: {
    cartItem: {
      type: Object,
    }
  },
  methods: {
    deleteCartItem(cartItemId) {
      this.removeCartItem(cartItemId)
    },
    decreaseCartItem(cartItemId) {
      this.minusCartItem(cartItemId)
    },
    increaseCartItem(cartItemId) {
      this.plusCartItem(cartItemId)
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../styles/_cart'
</style>
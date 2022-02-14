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
          <img src="../assets/minus_light.png" type="button" alt="" class="cart-minus">
          <div class="cart-quantity">{{cartItem.CartItem.quantity}}</div>
          <img src="../assets/plus_light.png" type="button" alt="" class="cart-plus" :disabled="cartItem.CartItem.quantity<2">
        </div>
      </div>
      <div class="cart-price"><span>$ </span>{{cartItem.price * cartItem.CartItem.quantity}}</div>
      <img src="../assets/trash-solid.png" alt="" class="cart-delete" @click.stop.prevent="deleteCartItem()">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/_cart'
</style>
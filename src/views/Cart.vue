<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="cart-container">
        <p>購物車列表</p>
        <div class="cart-wrapper">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  components: { Navbar, CartItem },
};
</script>

<style lang="sass" scoped>
.cart-container
  max-width: 1280px
  margin: 2% auto
  padding: 2%
  border: 1px solid $border-grey
  border-radius: 8px
  font-size: 1.3em
  font-weight: 500
  p
    border-bottom: 1px solid $border-grey
    padding-bottom: 1em
  .cart-wrapper
    max-height: 600px
    overflow-y: auto
    &::-webkit-scrollbar
      display: none
</style>
<template>
  <div class="cart">
    <div class="cart-head">
      <router-link to="/products">
      <img src="../assets/product_detail.jpeg" alt="" class="cart-image"></router-link>
      <div></div>
    </div>
    <div class="cart-body">
      <div class="cart-sum">
        <div class="cart-name">力宏Wanggggggggg</div>
        <div class="cart-count">
          <img src="../assets/minus_light.png" alt="" class="cart-minus">
          <div class="cart-quantity">1</div>
          <img src="../assets/plus_light.png" alt="" class="cart-plus">
        </div>
      </div>
      <div class="cart-price"><span>$ </span>律師費</div>
      <img src="../assets/trash-solid.png" alt="" class="cart-delete">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
}
</script>

<style lang="sass" scoped>
@import '../styles/_cart'
</style>
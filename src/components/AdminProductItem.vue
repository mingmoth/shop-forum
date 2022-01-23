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
          <div class="cart-description">多的是你不知道的事</div>
        </div>
      </div>
      <div class="cart-price"><span>$ </span>律師費</div>
      <div class="cart-action">
        <img src="../assets/cart_edit.png" alt="" class="cart-edit">
        <img src="../assets/trash-solid.png" alt="" class="cart-delete">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminProductItem',
}
</script>

<style lang="sass" scoped>
@import '../styles/_cart'
</style>
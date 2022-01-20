<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <CartItem />
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CartItem from '../components/CartItem.vue'
export default {
  name: 'Cart',
  components: { Navbar, CartItem }
}
</script>
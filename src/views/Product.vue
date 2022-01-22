<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <ProductDetail />
    </div>
    <div class="foot"></div>
  </div> 
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductDetail from '../components/ProductDetail.vue'
export default {
  name: 'Product',
  components: { Navbar, ProductDetail },
  
}
</script>
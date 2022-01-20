<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="row">
        <ProductItem v-for="product in products" :key="product" />
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProductItem from "../components/ProductItem.vue";
export default {
  name: "Home",
  components: { Navbar, ProductItem },
  data() {
    return {
      products: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
  },
  //
};
</script>

<style lang="sass" scoped>
.main
  .row
    max-width: 1280px
    margin: 0 auto
    padding: 2%
    +breakpoint(mobile)
      height: calc( 100vh - 110px )
      overflow-y: auto
</style>
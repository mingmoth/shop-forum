<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="row">
        <ProductItem v-for="product in getProducts" :key="product.id" :product="product"/>
        <Pagination />
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { productLoader } from '../utils/app'

import Navbar from "../components/Navbar.vue";
import ProductItem from "../components/ProductItem.vue";
import Pagination from '../components/Pagination.vue'
export default {
  name: "Home",
  mixins: [ productLoader ],
  components: { Navbar, ProductItem, Pagination },
  data() {
    return {
    };
  },
  created() {
    this.setProducts()
  },
  computed: {
    ...mapGetters(['getProducts'])
  }
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
      height: calc( 100vh - 120px )
      overflow-y: auto
      &::-webkit-scrollbar
        display: none
</style>
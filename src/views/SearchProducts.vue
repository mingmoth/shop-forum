<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <h4 class="search-title">使用" {{getSearchKeyword}} "搜尋結果為: </h4>
      <div class="row">
        <ProductItem v-for="product in getSearchProducts" :key="product.id" :product="product"/>
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

export default {
  name: "SearchProducts",
  mixins: [ productLoader ],
  components: { Navbar, ProductItem },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['getSearchKeyword', 'getSearchProducts'])
  }
};
</script>

<style lang="sass" scoped>
.main
  text-align: center
  .search-title
    margin-top: 1em
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
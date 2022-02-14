<template>
  <div class="product">
    <div class="product-container">
      <div class="product-head">
        <router-link :to="{ name: 'products', params: { id: product.id }}" >
          <img :src="product.image" alt="" class="product-image" />
        </router-link> 
      </div>
      <div class="product-body">
        <router-link :to="{ name: 'products', params: {id: product.id}}" class="product-name">{{product.name}}</router-link>
        <div class="product-description">{{product.description}}</div>
        <div class="product-price"><span>$</span> {{product.price}}</div>
        <form action="">
          <input type="number" class="product-quantity" min="1" />
          <button class="product-add" @click.stop.prevent="addCart(product.id)">加入購物車</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { cartLoader } from '../utils/app'
export default {
  name: "ProductItem",
  mixins: [ cartLoader ],
  props: {
    product: {
      type: Object,
    }
  },
  methods: {
    addCart(productId) {
      this.addCartItem(productId)
    },
  },
};
</script>

<style lang="sass">
@import '../styles/_product'
</style>
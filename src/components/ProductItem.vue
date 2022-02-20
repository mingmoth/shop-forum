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
import { mapGetters } from 'vuex'
import { cartLoader } from '../utils/app'
import { errorToast } from '../utils/toast';
export default {
  name: "ProductItem",
  mixins: [ cartLoader ],
  props: {
    product: {
      type: Object,
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    addCart(productId) {
      if(!this.getCurrentUser.name) {
        errorToast.fire({
          title: '請先登入後再加入商品'
        })
        this.$router.push('/signin')
      } else {
        this.addCartItem(productId)
      }
    },
  },
};
</script>

<style lang="sass">
@import '../styles/_product'
</style>
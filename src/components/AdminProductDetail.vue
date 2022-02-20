<template>
  <div class="detail-container">
    <div class="detail-head">
      <div class="detail-image">
        <div class="detail-back" @click="$router.back()">
          <img src="../assets/angle-left-solid.svg" alt="" class="detail-back-img">
        </div>
        <img :src="getProduct.image" alt="" class="detail-photo">
      </div>
      <div class="detail-canvas"></div>
    </div>
    <div class="detail-body">
      <div class="detail-name">{{getProduct.name}}</div>
      <div class="detail-price"><span>$ </span>{{getProduct.price}}</div>
      <div class="detail-description">
        {{getProduct.description}}
      </div>
      <form action="">
        <div class="detail-quantity">
          <label for="quantity">數量  :</label>
          <input type="number" id="quantity" name="quantity" min="0"/>
        </div>
        <button class="detail-add" @click.stop.prevent="addCart(getProduct.id)"></button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { productLoader, cartLoader } from '../utils/app'
import { errorToast } from '../utils/toast'

export default {
  name: "ProductDetail",
  mixins: [productLoader, cartLoader],
  computed: {
    ...mapGetters(['getProduct', 'getCurrentUser'])
  },
  created() {
    const { id: productId } = this.$route.params
    this.setProduct(productId)
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
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/_detail'
</style>
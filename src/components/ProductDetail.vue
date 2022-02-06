<template>
  <div class="detail-container">
    <div class="detail-head">
      <div class="detail-image">
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
        <button class="detail-add">加入購物車</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { productLoader } from '../utils/app'
export default {
  name: "ProductDetail",
  mixins: [productLoader],
  computed: {
    ...mapGetters(['getProduct'])
  },
  created() {
    const { id: productId } = this.$route.params
    this.setProduct(productId)
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/_detail'
</style>
<template>
  <div class="detail-container">
    <div class="detail-head">
      <div class="detail-image">
        <div class="detail-back" @click="$router.back()">
          <img src="../assets/angle-left-solid.svg" alt="" class="detail-back-img">
        </div>
        <img :src="getAdminProduct.image" alt="" class="detail-photo">
      </div>
      <div class="detail-canvas"></div>
    </div>
    <div class="detail-body">
      <label class="detail-label" for="description">商品名稱  :</label>
      <div class="detail-name">{{getAdminProduct.name}}</div>
      <label class="detail-label" for="description">商品價格  :</label>
      <div class="detail-price"><span>$ </span>{{getAdminProduct.price}}</div>
      <label class="detail-label" for="description">商品描述  :</label>
      <div class="detail-description">
        {{getAdminProduct.description}}
      </div>
      <form action="">
        <router-link :to="{name: 'admin-edit', params: { id: getAdminProduct.id }}"><button class="detail-add">編輯</button></router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { productLoader, cartLoader, adminLoader } from '../utils/app'

export default {
  name: "AdminProductDetail",
  mixins: [productLoader, cartLoader, adminLoader],
  computed: {
    ...mapGetters(['getAdminProduct', 'getCurrentUser'])
  },
  created() {
    const { id: productId } = this.$route.params
    this.setAdminProduct(productId)
  },
  beforeRouteUpdate(to, from , next) {
    const { id: productId } = to.params
    this.setAdminProduct(productId)
    next()
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/_detail'

.detail-label
  color: $footer-text-grey
</style>
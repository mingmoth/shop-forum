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
      <input class="detail-name" type="text" id="name" name="name" v-model="name">
      <label class="detail-label" for="description">商品價格  :</label>
      <input class="detail-price" type="number" min="1" id="price" name="price" v-model="price">
      <label class="detail-label" for="description">商品描述  :</label>
      <input class="detail-description" type="text" id="description" name="description" v-model="description">
      <form action="">
        <button class="detail-add" @click.stop.prevent="updateProduct(getAdminProduct.id)">儲存</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { productLoader, cartLoader, adminLoader } from '../utils/app'
import { errorToast } from '../utils/toast'

export default {
  name: "AdminProductEditing",
  mixins: [productLoader, cartLoader, adminLoader],
  computed: {
    ...mapGetters(['getAdminProduct', 'getCurrentUser'])
  },
  data() {
    return {
      name: '',
      price: 0,
      description: ''
    }
  },
  created() {
    const { id: productId } = this.$route.params
    this.setAdminProduct(productId)
    this.setProduct()
  },
  beforeRouteUpdate(to, from, next) {
    const { id: productId } = to.params
    this.setAdminProduct(productId)
    this.setProduct()
    next()
  },
  methods: {
    setProduct() {
      this.name = this.getAdminProduct.name
      this.price = this.getAdminProduct.price
      this.description = this.getAdminProduct.description
    },
    updateProduct(productId) {
      if(!this.name || !this.description || this.price<1) {
        errorToast.fire({
          title: '請完成填寫商品資訊'
        })
        return
      }
      const payload = {
        id: productId,
        name: this.name,
        price: this.price,
        description: this.description
      }
      this.setProductEdit(payload)
      this.$router.back()
    },
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/_detail'
.detail-body
  .detail-label
    display: block
    color: $footer-text-grey
  input
    margin-bottom: 2px !important
    width: 100%
  .detail-add
    margin-top: 5px
</style>
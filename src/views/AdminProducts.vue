<template>
  <div class="admin-title">
    <p>產品列表</p>
    <div class="admin-wrapper">
      <AdminProductItem v-for="product in getAdminProducts" :key="product.id" :product="product"/>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { adminLoader } from '../utils/app'
import AdminProductItem from '../components/AdminProductItem.vue'
import Pagination from '../components/Pagination.vue'
export default {
  name: "AdminProducts",
  mixins: [ adminLoader ],
  components: { AdminProductItem, Pagination },
  computed: {
    ...mapGetters(['getAdminProducts'])
  },
  created() {
    this.setAdminProducts()
  }
};
</script>

<style lang="sass" scoped>
.admin-wrapper
  max-height: 600px
  overflow-y: auto
  &::-webkit-scrollbar
    display: none 
</style>
<template>
  <div class="admin-title">
    <p>產品列表</p>
    <div class="admin-wrapper">
      <AdminProductItem />
      <AdminProductItem />
      <AdminProductItem />
      <AdminProductItem />
      <AdminProductItem />
    </div>
  </div>
</template>

<script>
import AdminProductItem from '../components/AdminProductItem.vue'
export default {
  name: "AdminProducts",
  components: { AdminProductItem }
};
</script>

<style lang="sass" scoped>
.admin-wrapper
  max-height: 600px
  overflow-y: auto
  &::-webkit-scrollbar
    display: none 
</style>
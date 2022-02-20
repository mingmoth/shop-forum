<template>
  <div class="app-contianer">
    <div class="main">
      <AdminProductDetail />
    </div>
    <div class="foot"></div>
  </div> 
</template>

<script>
import AdminProductDetail from '../components/AdminProductDetail.vue'
export default {
  name: 'AdminProduct',
  components: { AdminProductDetail },
}
</script>
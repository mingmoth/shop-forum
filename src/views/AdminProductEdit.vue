<template>
  <div class="app-contianer">
    <div class="main">
      <AdminProductEditing/>
    </div>
    <div class="foot"></div>
  </div> 
</template>

<script>
import AdminProductEditing from '../components/AdminProductEditing.vue'
export default {
  name: 'AdminProductEdit',
  components: { AdminProductEditing },
}
</script>
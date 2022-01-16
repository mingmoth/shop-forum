<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main"></div>
    <div class="foot"></div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  components: { Navbar },
}
</script>

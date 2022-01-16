<template>
  <div>
    <nav>
      <div class="nav-container">
        <img src="../assets/logo_dark.png" alt="" class="nav-logo">
        <div class="search-container">
            <input type="text" name="search" id="search">
            <button>
              <img src="../assets/search_icon.png" alt="" class="search-icon">
            </button>
          </div>
        <div class="nav-options">
          <img src="../assets/setting logo.png" alt="" class="admin-icon">
          <img src="../assets/cart_icon.png" alt="" class="cart-icon">
          <img src="../assets/user logo.png" alt="">
          <img src="../assets/moon_icon.png" alt="" class="theme-toggle-icon">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="sass">
@import '../styles/_navbar'
</style>
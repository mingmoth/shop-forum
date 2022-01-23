<template>
  <div>
    <nav>
      <div class="nav-container">
        <router-link to="/home" class="nav-logo" >
          <img src="../assets/logo_text.png" alt="" />
        </router-link>
        <div class="search-container">
          <input type="text" name="search" id="search" />
          <button>
            <img
              src="../assets/icon_light_search.png"
              alt=""
              class="search-icon"
            />
          </button>
        </div>
        <div class="nav-options">
          <router-link to="/admin/products">
            <img src="../assets/setting logo.png" alt="" class="admin-icon" />
          </router-link>
          <router-link to="/carts">
            <img src="../assets/cart_icon.png" alt="" class="cart-icon"
          /></router-link>
          <router-link to="/orders"><img src="../assets/user logo.png" alt="" /></router-link>
          
          <img src="../assets/moon_icon.png" alt="" class="theme-toggle-icon" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="sass">
@import '../styles/_navbar'
</style>
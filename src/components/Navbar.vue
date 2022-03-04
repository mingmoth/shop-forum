<template>
  <div>
    <nav>
      <div class="nav-container">
        <router-link to="/home" class="nav-logo">
          <span>My JEANS</span>
        </router-link>
        <div class="search-container">
          <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder="開始搜尋" 
            v-model="keyword"
            @keydown.enter.prevent="submitSearch()" />
          <button @click.prevent.stop="submitSearch()">
            <img
              src="../assets/icon_light_search.png"
              alt=""
              class="search-icon"
              
            />
          </button>
        </div>
        <div
          :class="['nav-toggle', { 'nav-toggled': open }]"
          @click.stop.prevent="toggle"
        >
          <div class="nav-ham"></div>
        </div>
        <div class="nav-options" v-show="open">
          <router-link
            v-if="getCurrentUser.role === 'admin'"
            to="/admin/products"
            class="nav-options-item mb-2"
          >
            後臺管理
          </router-link>
          <router-link to="/carts" class="nav-options-item mb-2">
            購物車</router-link
          >
          <router-link to="/orders" class="nav-options-item mb-2"
            >訂單列表</router-link
          >
          <div
            v-if="this.getCurrentUser.name"
            class="nav-options-item mb-2"
            @click="logout"
            >登出</div
          >
          <div v-else>
            <router-link to="/signin"  class="nav-options-item mb-2"
            >登入</router-link
          >
          <router-link to="/signup"  class="nav-options-item mb-2"
            >註冊</router-link
          >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { productLoader } from '../utils/app'
export default {
  name: "Navbar",
  mixins: [ productLoader ],
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  data() {
    return {
      open: false,
      keyword: '',
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    submitSearch() {
      if(!this.keyword.trim()) return
      this.setSearchProducts(this.keyword.trim())
      this.keyword = ''
      this.$router.push('/search').catch(()=>{})
    },
    logout() {
      this.$store.dispatch('setLogout')
      this.$router.push('/signin')
    }
  },
};
</script>

<style lang="sass">
@import '../styles/_navbar'
</style>
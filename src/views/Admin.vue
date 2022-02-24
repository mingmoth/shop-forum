<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="main-container">
        <div class="admin-nav">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/newProduct" class="nav-link" id="admin-new">新增產品</router-link>
            </li>
          </ul>
        </div>
        <router-view />
      </div>
    </div>
    <div class="foot"></div>
  </div> 
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Admin',
  components: { Navbar },
  
}
</script>

<style lang="sass" scoped>
.main-container
  max-width: 1280px
  margin: 1em auto
  padding: 2%
  .admin-nav
    margin-left: 1em
    +breakpoint(mobile)
    margin-left: 0
    ul
      +breakpoint(mobile-landscape)
        min-width: 300px
      .nav-item
        .nav-link
          padding: 1em
          text-decoration: none
          color: $text-content
          border-bottom: 2px solid $border-grey
          border-radius: 0
          font-weight: 500
          &:hover, &.active
            background: $light
            color: $text-content
            border-bottom: 2px solid $text-content
          +breakpoint(mobile)
            padding: 0.5em
        #admin-new
          border-radius: 4px 4px 0 0
          &:hover
            color: $light
            background: $text-content
  .admin-title
    padding: 1em
    font-size: 1.3em
    font-weight: 500
    +breakpoint(mobile)
      padding: 0.4em
      font-size: 1em
           


</style>
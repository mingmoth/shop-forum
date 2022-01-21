<template>
  <div class="product">
    <div class="product-container">
      <div class="product-head">
        <router-link to="/products" >
          <img src="../assets/product_demo.jpg" alt="" class="product-image" />
        </router-link> 
      </div>
      <div class="product-body">
        <router-link to="/products" class="product-name">力宏wang</router-link>
        <div class="product-description">多的是你不知道的事</div>
        <div class="product-price"><span>$</span> 律師費</div>
        <form action="">
          <input type="number" class="product-quantity" min="1" />
          <button class="product-add" @click="$router.push('/signin')">加入購物車</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
};
</script>

<style lang="sass">
@import '../styles/_product'
</style>
<template>
  <div class="product">
    <div class="product-container">
      <div class="product-head">
        <router-link :to="{ name: 'products', params: { id: product.id }}" >
          <img :src="product.image" alt="" class="product-image" />
        </router-link> 
      </div>
      <div class="product-body">
        <router-link :to="{ name: 'products', params: {id: product.id}}" class="product-name">{{product.name}}</router-link>
        <div class="product-description">{{product.description}}</div>
        <div class="product-price"><span>$</span> {{product.price}}</div>
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
  props: {
    product: {
      type: Object,
    }
  }
};
</script>

<style lang="sass">
@import '../styles/_product'
</style>
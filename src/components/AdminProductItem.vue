<template>
  <div class="cart">
    <div class="cart-head">
      <router-link :to="{ name: 'admin-product', params: { id: product.id } }">
        <img :src="product.image" alt="" class="cart-image"
      /></router-link>
    </div>
    <div class="cart-body">
      <div class="cart-sum">
        <router-link
          class="cart-name"
          :to="{ name: 'admin-product', params: { id: product.id } }"
          >{{ product.name }}</router-link
        >
        <div class="cart-count">
          <div class="cart-description">{{ product.description }}</div>
        </div>
      </div>
      <div class="cart-price"><span>$ </span>{{ product.price }}</div>
      <div class="cart-action">
        <img src="../assets/cart_edit.png" alt="" class="cart-edit" />
        <img src="../assets/trash-solid.png" alt="" class="cart-delete" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminProductItem",
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/_cart'
</style>
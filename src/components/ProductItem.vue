<template>
  <div class="product">
    <div class="product-container">
      <div class="product-head">
        <img src="../assets/product_demo.jpg" alt="" class="product-image" />
      </div>
      <div class="product-body">
        <div class="product-name">力宏wang</div>
        <div class="product-description">多的是你不知道的事</div>
        <div class="product-price"><span>$</span> 律師費</div>
        <form action="">
          <input type="number" class="product-quantity" />
          <button class="product-add">Add to cart</button>
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
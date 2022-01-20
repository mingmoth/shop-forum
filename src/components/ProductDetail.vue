<template>
  <div class="detail-container">
    <div class="detail-head">
      <div class="detail-image">
        <img src="../assets/product_detail.jpeg" alt="" class="detail-photo">
      </div>
      <div class="detail-canvas"></div>
    </div>
    <div class="detail-body">
      <div class="detail-name">力宏Wangggggg</div>
      <div class="detail-price"><span>$ </span>律師費</div>
      <div class="detail-description">
        蝴蝶眨幾次眼睛才學會飛行  多的是你不知道的事
      </div>
      <form action="">
        <div class="detail-quantity">
          <label for="quantity">數量  :</label>
          <input type="number" id="quantity" name="quantity" min="0"/>
        </div>
        <button class="detail-add">加入購物車</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
};
</script>

<style lang="sass" scoped>
@import '../styles/_detail'
</style>
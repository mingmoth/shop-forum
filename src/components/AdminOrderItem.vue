<template>
  <tr class="order">
    <!-- <th scope="row"></th> -->
    <td>#011245</td>
    <td><span>$ </span> 律師費</td>
    <td>已和解</td>
    <td>送往門市</td>
    <img src="../assets/order_more.png" alt="" class="order-more" />
  </tr>
</template>

<script>
export default {
  name: "AdminOrderItem",
};
</script>

<style lang="sass" scoped>
tr
  position: relative
  td
    font-size: 0.8em
    font-weight: 400
  .order-more
    width: 30px
    height: 30px
    object-fit: cover
    position: absolute
    top: calc( 50% - 15px)
    right: 0
    cursor: pointer
    +breakpoint(mobile-landscape)
      width: 26px
      height: 26px
      top: calc( 50% - 13px)
</style>
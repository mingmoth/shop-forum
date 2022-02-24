<template>
    <tr class="order">
      <!-- <th scope="row"></th> -->
      <td>#{{ order.serial_number }}</td>
      <td><span>$ </span> {{ order.amount }}</td>
      <td>{{ order.payment_status }}</td>
      <td>{{ order.shipping_status }}</td>
      <img src="../assets/order_more.png" alt="" class="order-more" />
    </tr>
</template>

<script>
export default {
  name: "AdminOrderItem",
  props: {
    order: {
      type: Object,
    },
  },
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
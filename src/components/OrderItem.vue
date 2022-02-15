<template>
  <tr class="order">
    <!-- <th scope="row"></th> -->
    <td>{{item.name}}</td>
    <td>{{item.OrderItem.quantity}}</td>
    <td><span></span> {{item.price}}</td>
  </tr>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    item: {
      type: Object,
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/_order'
</style>
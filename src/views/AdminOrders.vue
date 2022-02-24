<template>
  <div class="admin-title">
    <p>訂單列表</p>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">編號</th>
          <th scope="col">金額</th>
          <th scope="col">付款狀態</th>
          <th scope="col">運送狀態</th>
        </tr>
      </thead>
      <tbody>
        <AdminOrderItem v-for="order in getAdminOrders" :key="order.id" :order="order"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { adminLoader } from '../utils/app'

import AdminOrderItem from '../components/AdminOrderItem.vue'
export default {
  name: "AdminOrders",
  mixins:[ adminLoader ],
  components: { AdminOrderItem },
  created() {
    this.setAdminOrders()
  },
  computed: {
    ...mapGetters(['getAdminOrders'])
  }
};
</script>

<style lang="sass" scoped>
table
  min-width: 300px
  tr
    th
      font-size: 0.9em
      font-weight: 500
</style>
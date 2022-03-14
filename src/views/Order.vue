<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="order-container">
        <p>訂單資訊</p>
        <div class="order-panel" v-for="order in getOrders" :key="order.id">
          <div class="order-wrapper">
            <div class="order-info">
              <p class="order-serial">
                訂單編號 : <span class="order-serialNum"># {{order.serial_number}}</span>
              </p>
              <table class="table">
                <thead class="thead-datk">
                  <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">商品</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <OrderItem v-for="item in order.items" :key="item.id" :item="item"/>
                </tbody>
              </table>

              
            </div>
            <div class="order-pay">
              <div class="order-total">
                總金額 :<span class="order-amount"><span>$ </span>{{order.amount}}</span>
              </div>
              <p class="order-status">訂單狀態</p>
              <ul>
                付款狀態 : {{order.payment_status}}
              </ul>
              <ul>
                運送狀態 : {{order.shipping_status}}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { orderLoader } from '../utils/app'
import { errorToast } from '../utils/toast'

import Navbar from "../components/Navbar.vue";
import OrderItem from "../components/OrderItem.vue";
export default {
  name: "Order",
  mixins: [ orderLoader ],
  components: { Navbar, OrderItem },
  computed: {
    ...mapGetters(['getOrders', 'getCurrentUser']),
  },
  created() {
    if(!this.getCurrentUser.name) {
      errorToast.fire({
        title: '請先登入後再瀏覽歷史訂單'
      })
      this.$router.push('/signin')
    } else {
      this.setOrders()
    }
  },
};
</script>

<style lang="sass" scoped>
.order-container
  max-width: 1280px
  max-height: calc( 100vh - 120px - 1em)
  margin: 1em auto
  padding: 2%
  border: 1px solid $border-grey
  border-radius: 8px
  font-size: 1.3em
  font-weight: 500
  color: $text-content
  overflow-y: auto
  p
    border-bottom: 1px solid $border-grey
    padding-bottom: 0.5em
  .order-panel
    max-height: 550px
    overflow-y: auto
    padding-bottom: 0.8em
    &::-webkit-scrollbar
      display: none
  .order-wrapper
    display: flex
    padding: 0.8em
    border: 1px solid $border-grey
    border-radius: 6px
    box-shadow: 1px 1px 0px 1px $border-grey
    +breakpoint(mobile-landscape)
      display: block
      padding: 1%
    .order-info
      min-width: 50%
      +breakpoint(mobile-landscape)
      padding: 0.5em
      .order-serial
        font-size: 0.9em
        font-weight: 500
        border: none
        margin-bottom: 0
        .order-serialNum
          color: $step-checked
      table
        width: calc( 100% - 1em )
        font-size: 16px
        border-radius: 4px 4px 0 0
        thead
          background: $step-checked
          color: $light
          font-weight: 300
      +breakpoint(mobile)
        border-bottom: 1px solid $border-grey
    .order-pay
      border-left: 1px solid $border-grey
      padding: 0.8em
      min-width: 50%
      font-size: 0.9em
      font-weight: 500
      +breakpoint(mobile-landscape)
        border: none
        padding-left: 0.5em
        padding-top: 0.5em
      .order-total
        padding-bottom: 0.5em
        border-bottom: 1px solid $border-grey
        margin-bottom: 0.5em
      .order-amount
        float: right
        color: $step-checked
      .order-status
        border: none
      ul
        margin: 1em
        padding: 0
        font-size: 0.8em
</style>
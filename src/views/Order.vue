<template>
  <div class="app-contianer">
    <div class="head">
      <Navbar />
    </div>
    <div class="main">
      <div class="order-container">
        <p>訂單資訊</p>
        <div class="order-wrapper">
          <div class="order-info">
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
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </tbody>
            </table>

            <div class="order-total">
              總金額 :<span class="order-amount"><span>$ </span>律師費</span>
            </div>
          </div>
          <div class="order-pay">
            訂單狀態
            <ul>
              付款狀態 :
            </ul>
            <ul>
              運送狀態 :
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import OrderItem from "../components/OrderItem.vue";
export default {
  name: "Order",
  components: { Navbar, OrderItem },
};
</script>

<style lang="sass" scoped>
.order-container
  max-width: 1280px
  margin: 1em auto
  padding: 2%
  border: 1px solid $border-grey
  border-radius: 8px
  font-size: 1.3em
  font-weight: 500
  color: $text-content
  p
    border-bottom: 1px solid $border-grey
    padding-bottom: 0.5em
  .order-wrapper
    max-height: 500px
    overflow-y: auto
    display: flex
    &::-webkit-scrollbar
      display: none
    +breakpoint(mobile)
      display: block
    .order-info
      min-width: 50%
      table
        width: calc( 100% - 1em )
        font-size: 16px
        border-radius: 4px 4px 0 0
        thead
          background: $mainPink
          color: $light
          font-weight: 300

      +breakpoint(mobile)
        border-bottom: 1px solid $border-grey
      .order-total
        padding: 0.5em
        padding-right: 1em
        font-size: 0.9em
        font-weight: 500
      .order-amount
        float: right
        color: $mainPink
    .order-pay
      border-left: 1px solid $border-grey
      padding: 0.5em
      min-width: 50%
      font-size: 0.9em
      font-weight: 500
      +breakpoint(mobile)
        border: none
      ul
        margin: 1em
        padding: 0
        font-size: 0.8em
</style>
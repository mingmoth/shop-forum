<template>
  <div class="modal fade" id="check-out-info" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-head">
            <img 
            src="../assets/icon_close_admin.png" 
            alt=""
            class="modal-close"
            data-bs-dismiss="modal"
            aria-label="Close">
            <span class="modal-title"> 請填寫收件人資訊</span>
          </div>
          <button
            class="btn-checkout"
            @click.stop.prevent="checkoutCart(getCartId)"
          >
            確認
          </button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="form-label-group mb-2">
              <label for="name">稱謂 *</label>
              <input
                id="name"
                v-model="name"
                name="name"
                type="name"
                class="form-control"
                placeholder="name"
                autocomplete="username"
                required
                autofocus
              />
            </div>
            <div class="form-label-group mb-2">
              <label for="address">地址 *</label>
              <input
                id="address"
                v-model="address"
                name="address"
                type="address"
                class="form-control"
                placeholder="address"
                autocomplete="useraddress"
                required
                autofocus
              />
            </div>
            <div class="form-label-group mb-2">
              <label for="phone">電話 *</label>
              <input
                id="phone"
                v-model="phone"
                name="phone"
                type="tel"
                class="form-control"
                placeholder="phone"
                autocomplete="userphone"
                required
                autofocus
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { errorToast } from "../utils/toast";
import { orderLoader } from '../utils/app'
export default {
  name: "CheckoutModal",
  mixins: [ orderLoader ],
  computed: {
    ...mapGetters(["getCart", "getCartId", "getTotalPrice"]),
  },
  data() {
    return {
      name: "",
      address: "",
      phone: "",
    };
  },
  methods: {
    checkoutCart(cartId) {
      if (!this.name || !this.address || !this.phone) {
        errorToast.fire({
          title: "請確認所有欄位皆填寫後送出",
        });
        return;
      }
      let payload = {
        cartId: cartId,
        amount: this.getTotalPrice,
        name: this.name,
        address: this.address,
        phone: this.phone,
      };
      this.postOrder(payload);
      this.$router.push("/orders");
    },
  },
};
</script>

<style lang="sass" scoped>
.modal-header
  align-items: center
.modal-close
  width: 25px
  height: 25px
  cursor: pointer
  margin-bottom: 4px
.modal-title
  line-height: 30.16px
  font-size: 18px
  color: #657786
.btn-checkout
  border: none
  background: $mainPink
  color: $light
  font-size: 18px
  border-radius: 6px
</style>
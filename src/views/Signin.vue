<template>
  <div class="app-container">
    <div class="head">
      <Navbar />
    </div>
    <div class="container">
      <form class="wrapper" @submit.prevent.stop="handleSubmit">
        <div class="text-center mb-4">
          <h1 class="signin-title">登入 My JEANS</h1>
        </div>

        <div class="form-label-group mb-2">
          <label for="email">電子郵件</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            class="form-control"
            placeholder="email"
            autocomplete="username"
            required
            autofocus
          />
        </div>

        <div class="form-label-group mb-3">
          <label for="password">密碼</label>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="form-control"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
        </div>
        <button class="btn-signin my-2" type="submit" :disabled="isProcessing">
          登入
        </button>
        <div class="mb-2">
          <p class="signup-direct">還沒有加入My JEANS? 立即<router-link to="/signup" class="signUp">註冊</router-link>吧
          </p>
        </div>
        <button
          class="btn-signin my-2"
          @click.stop.prevent="fbLogin()"
          :disabled="isProcessing"
        >
          使用Google登入
        </button>
        <!-- <GoogleBUtton @sign-in="oAuthSignIn('google', $event)" /> -->
        <button
          class="btn-signin my-2"
          @click.stop.prevent="fbLogin()"
          :disabled="isProcessing"
        >
          使用FaceBook登入
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { initialFB } from "../utils/fb";
import { errorToast } from "../utils/toast";
import authorizationAPI from "../apis/authorization";

import Navbar from "../components/Navbar.vue";
// import GoogleBUtton from "../components/GoogleButton.vue";

export default {
  name: "SignIn",
  components: { Navbar },
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapGetters(["getGOOGLE"]),
  },
  created() {
    initialFB();
  },
  methods: {
    async oAuthSignIn(provider, id_token) {
      try {
        await this.$store.dispatch("oAuthLogin", {
          provider,
          id_token,
        });
        this.$emit("submit");
      } catch (error) {
        console.error(error);
      }
    },
    fbLogin() {
      /* global FB */
      let vm = this;
      FB.login(
        function (response) {
          console.log("res when login", response);
          vm.getProfile();
        },
        {
          scope: "email, public_profile",
          return_scopes: true,
        }
      );
    },
    getProfile() {
      FB.api("/me?fields=name,id,email", function (response) {
        console.log("res in graphAPI", response);
      });
    },
    async handleSubmit(e) {
      try {
        console.log(e);
        if (!this.email || !this.password) {
          errorToast.fire({
            icon: "warning",
            title: "請填入email和password",
          });
          return;
        }
        this.isProcessing = true;
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        // 取得 API 請求後的資料
        const { data, statusText } = response;
        // 驗證伺服器回傳status
        if (data.status !== "success" || statusText !== 'OK') {
          throw new Error(data.message);
        }
        // 將 token 存放在 localStorage 內
        localStorage.setItem("token", data.token);
        // 將資料傳到 Vuex 中
        this.$store.commit('getCurrentUser', data.user)
        // 成功登入後轉址到餐廳首頁
        this.$router.push("/home");
      } catch (error) {
        // 將密碼欄位清空
        this.password = "";
        // 顯示錯誤提示
        errorToast.fire({
          title: "請確認您輸入正確的帳號密碼",
        });
        this.isProcessing = false;
        console.log("error", error);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.container
  margin-top: 100px
.wrapper
  max-width: 500px
  border-radius: 1em
  with: 90%
  margin: 0 auto
  padding: 1.5em
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px
  +breakpoint(mobile)
    width: 100%
.signin-title
  font-size: 28px
  font-weight: 900
.form-label-group
  input
    margin-top: 0.5em
.btn-signin
  width: 100%
  border: 1px solid $step-checked
  background: $step-checked
  color: $light
  height: 40px
  font-size: 1em
  font-weight: 500
  border-radius: 0.25em
  &:hover
    background: $light
    color: $step-checked
.signup-direct
  color: $footer-text-grey
  font-size: 1em
.signUp
  color: $step-checked
  font-size: 1em
  font-weight: 500
  text-decoration: none
</style>
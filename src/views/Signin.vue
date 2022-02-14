<template>
  <div class="app-container">
    <div class="head">
      <Navbar />
    </div>
    <div class="container">
      <form class="wrapper" @submit.prevent.stop="handleSubmit">
        <div class="text-center mb-4">
          <h1 class="h3 mb-3 font-weight-bold">登入 Alpha Shop</h1>
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
        <GoogleBUtton @sign-in="oAuthSignIn('google', $event)" />
        <button
          class="btn-signin my-2"
          @click.stop.prevent="fbLogin()"
          :disabled="isProcessing"
        >
          使用FaceBook登入
        </button>

        <div class="text-center mb-3">
          <p>
            <router-link to="/signup" class="signUp">註冊</router-link>
          </p>
        </div>
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
import GoogleBUtton from "../components/GoogleButton.vue";

export default {
  name: "SignIn",
  components: { Navbar, GoogleBUtton },
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
  margin-top: 200px
.wrapper
  width: 50%
  margin: 0 auto
  +breakpoint(mobile)
    width: 100%
.btn-signin
  width: 100%
  border: none
  background: $mainPink
  color: $light
  height: 40px
  font-size: 1em
  font-weight: 500
  border-radius: 40px
.signUp
  color: $mainPink
  font-size: 1em
  font-weight: 500
</style>
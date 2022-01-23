<template>
  <div class="app-container">
    <div class="head">
      <Navbar />
    </div>
    <div class="container">
      <form class="wrapper" @submit.prevent.stop="handleSubmit">
        <div class="text-center mb-4">
          <h1 class="h3 mb-3 font-weight-normal">註冊使用 Alpha Shop</h1>
        </div>

        <div class="form-label-group mb-2">
          <label for="email">名稱</label>
          <input
            id="name"
            v-model="name"
            name="name"
            type="text"
            class="form-control"
            placeholder="name"
            autocomplete="username"
            required
            autofocus
          />
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
            autocomplete="email"
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

        <div class="form-label-group mb-3">
          <label for="password">密碼確認</label>
          <input
            id="passwordCheck"
            v-model="passwordCheck"
            name="passwordCheck"
            type="password"
            class="form-control"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
        </div>

        <button class="btn-signup my-2" type="submit" :disabled="isProcessing">
          註冊
        </button>

        <div class="text-center mb-3">
          <p>
            <router-link to="/signin" class="signIn">取消</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
// import authorizationAPI from '../apis/authorization'
// import {Toast} from '../utils/helpers'

import Navbar from '../components/Navbar.vue'
export default {
  name: "SignIn",
  components: { Navbar },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    // async handleSubmit() {
    //   try {
    //     if(!this.name || !this.email || !this.password || !this.passwordCheck) {
    //       Toast.fire({
    //         icon: 'warning',
    //         title: '尚有空白欄位未填寫'
    //       })
    //       return
    //     }
    //     if(this.password !== this.passwordCheck) {
    //       Toast.fire({
    //         icon: 'warning',
    //         title: '兩次輸入的密碼不同'
    //       })
    //       this.passwordCheck = ''
    //       return
    //     }
    //     this.isProcessing = true
    //     const {data} = await authorizationAPI.signUp({
    //       name: this.name,
    //       email: this.email,
    //       password: this.password,
    //       passwordCheck: this.passwordCheck
    //     })
    //     if(data.status === "error") {
    //       throw new Error(data.message)
    //     }
    //     Toast.fire({
    //       icon: 'success',
    //       title: data.message
    //     })
    //     this.$router.push('/signin')
    //   } catch (error) {
    //     console.log(error)
    //     this.isProcessing = false
    //     Toast.fire({
    //       icon: 'error',
    //       title: `無法註冊使用--${error.message}`
    //     })
    //   }
    // }
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
.btn-signup
  width: 100%
  border: none
  background: $mainPink
  color: $light
  height: 40px
  font-size: 1em
  font-weight: 500
  border-radius: 40px
.signIn
  color: $mainPink
  font-size: 1em
  font-weight: 500
</style>
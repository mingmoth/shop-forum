<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Name</label>
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
        <label for="email">email</label>
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
        <label for="password">Password</label>
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
        <label for="password">Password Check</label>
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

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>
    </form>
  </div>
</template>


<script>
// import authorizationAPI from '../apis/authorization'
// import {Toast} from '../utils/helpers'
export default {
  name: 'SignIn',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
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
  }
}
</script>
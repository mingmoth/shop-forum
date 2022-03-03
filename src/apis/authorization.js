import { apiHelper } from "../utils/apis";

export default {
  signIn({ email, password }) {
    return apiHelper.post('/api/signin', { email, password })
  },
  signUp({ name, email, password, passwordCheck }) {
    return apiHelper.post('/api/signup', { name, email, password, passwordCheck })
  },
  loginByFB() {
    console.log('token')
    return apiHelper.post('/auth/facebook', { })
  }
}
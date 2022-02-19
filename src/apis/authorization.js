import { apiHelper } from "../utils/apis";

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', { email, password })
  },
  signUp({ name, email, password, passwordCheck }) {
    return apiHelper.post('/signup', { name, email, password, passwordCheck })
  }
}
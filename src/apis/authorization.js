import { apiHelper } from "../utils/apis";

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', { email, password })
  },
  signUp({ name, account, email, password, checkPassword }) {
    return apiHelper.post('/users', { name, account, email, password, checkPassword })
  }
}
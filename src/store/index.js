import Vue from 'vue'
import Vuex from 'vuex'

import authorization from './modules/authorization'
import user from './modules/user'
import order from './modules/order'
import product from './modules/product'
import cartItem from './modules/cartItem'
import admin from './modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authorization,
    user,
    order,
    product,
    cartItem,
    admin
  }
})

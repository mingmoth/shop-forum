import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ValidationObserver, ValidationProvider, localize, configure } from 'vee-validate'
import zh from './zh_TW.js'


Vue.config.productionTip = false

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('tw', zh)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

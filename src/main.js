import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ValidationObserver, ValidationProvider, localize, configure } from 'vee-validate'
import zh from './zh_TW.js'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import MyLoading from './components/MyLoading'

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

Vue.component('MyLoading', MyLoading)
Vue.component('Loading', Loading)

Vue.use(Loading, {
  loader: 'dots',
  opacity: 0.8,
  isFullPage: false,
  height: 64,
  width: 64,
  color: 'rgb(255, 56, 92)'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

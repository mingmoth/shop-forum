import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  created() {
    window.gapi.load('auth2', () => {
      console.log('google sdk!')
      window.gapi.auth2.init({
        client_id: '538138516918-4q8uirnp5p3o2urbj6hg48drglcj48n8.apps.googleusercontent.com',
      });
      
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

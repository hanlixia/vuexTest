import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import Refresh from 'src/components/refresh'
import VueResource from 'vue-resource'

Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
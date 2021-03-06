// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'


/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(axios)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
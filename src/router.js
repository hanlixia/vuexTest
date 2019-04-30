import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home from 'src/components/home.vue'
import List from 'src/components/list.vue'
import Detail from 'src/components/detail.vue'
import Edit from 'src/components/edit.vue'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})

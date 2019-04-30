import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import List from 'src/components/list'
import Detail from 'src/components/detail'
import Test from 'src/components/test'
import Refresh from 'src/components/refresh'
import Refresh2 from 'src/components/refresh2'
import loadMore from 'src/components/load-more'


Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/refresh',
      name: 'Refresh',
      component: Refresh
    },
    {
      path: '/refresh2',
      name: 'Refresh2',
      component: Refresh2
    },
    {
      path: '/loadMore',
      name: 'loadMore',
      component: loadMore
    }
  ]
})

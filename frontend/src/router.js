import Vue from 'vue'
import Router from 'vue-router'
import Menu from './components/star/Menu.vue'
import Detail from './components/star/Detail.vue'
import Chu from './components/star/Chu.vue'
Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/chu',
      name: 'chu',
      component: Chu
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Menu from './components/star/Menu.vue'
import Frame from './components/star/Frame.vue'
import Chu from './components/star/Chu.vue'
import Detail from './components/star/Detail.vue'
import Login from './components/login/Login.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/Starbucks',
      name: 'Frame',
      component: Frame
    },
    {
      path: '/chu',
      name: 'chu',
      component: Chu
    },
    {
      path: '/Starbucks/:combiId',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: 'Login',
      name: 'Login',
      component: Login,
    },
  ]
})
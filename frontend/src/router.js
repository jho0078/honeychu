import Vue from 'vue'
import Router from 'vue-router'
import Starbucks from './components/star/Frame.vue'
import Chu from './components/star/Chu.vue'
import Detail from './components/star/Detail.vue'
import MakeCombi from './components/star/MakeCombi.vue'
import Admin from './components/admin/Admin.vue'
import Mypage from './components/test_HY/Mypage.vue'
import test from './components/test_HY/test.vue'
import Main from './components/main.vue'
import MainLoading from './components/mainloading.vue'
Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/honeyChu',
      name: 'Main',
      component: Main
    }, {
      path: '/',
      name: 'MainLoading',
      component: MainLoading
    }, {
      path: '/Starbucks',
      name: 'Starbucks',
      component: Starbucks
    },
    {
      path: '/Starbucks/:combiId',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/Starmenulist/:menu',
      name: 'chu',
      component: Chu,
      props: true
    },
    {
      path: '/MakeCombi',
      name: 'MakeCombi',
      component: MakeCombi
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Mypage/:userEmail',
      name: 'Mypage',
      component: Mypage,
      props:true
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
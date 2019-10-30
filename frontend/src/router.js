import Vue from 'vue'
import Router from 'vue-router'
import Frame from './components/star/Frame.vue'
import Chu from './components/star/Chu.vue'
import Detail from './components/star/Detail.vue'
import MakeCombi from './components/star/MakeCombi.vue'
import Mypage from './components/test_HY/Mypage.vue'
Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
      path: '/MakeCombi',
      name: 'MakeCombi',
      component: MakeCombi
    },
    {
      path: '/Mypage',
      name: 'Mypage',
      component: Mypage
    }

  ]
})
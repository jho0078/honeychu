import Vue from 'vue'
import Router from 'vue-router'
import Frame from './components/star/Frame.vue'
import Chu from './components/star/Chu.vue'
import Detail from './components/star/Detail.vue'
<<<<<<< HEAD

=======
import MakeCombi from './components/star/MakeCombi.vue'
>>>>>>> 1c8aeeb0314fa341d07ff6e0f67bddfb590fce2a
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
<<<<<<< HEAD
=======
    {
      path: '/MakeCombi',
      name: 'MakeCombi',
      component: MakeCombi
    }

>>>>>>> 1c8aeeb0314fa341d07ff6e0f67bddfb590fce2a
  ]
})
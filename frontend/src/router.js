import Vue from 'vue'
import Router from 'vue-router'
import Frame from './components/star/Frame.vue'
import Chu from './components/star/Chu.vue'
import Detail from './components/star/Detail.vue'
<<<<<<< HEAD
import Login from './components/login/Login.vue'

=======
import MakeCombi from './components/star/MakeCombi.vue'
>>>>>>> cc27bdf9dd2ac7fef9a131df9973021cb8f138c3
Vue.use(Router)

export default new Router({

  mode: 'history',
  base: process.env.BASE_URL,
<<<<<<< HEAD
  routes: [{
      path: '/menu',
      name: 'menu',
      component: Menu
    },
=======
  routes: [
>>>>>>> cc27bdf9dd2ac7fef9a131df9973021cb8f138c3
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
<<<<<<< HEAD
      path: 'Login',
      name: 'Login',
      component: Login,
    },
=======
      path: '/MakeCombi',
      name: 'MakeCombi',
      component: MakeCombi
    }

>>>>>>> cc27bdf9dd2ac7fef9a131df9973021cb8f138c3
  ]
})
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import GAuth from 'vue-google-oauth2'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(GAuth, {
  clientId: '503235171379-32dsqd6es3f6pb1hjjpcrtikd7vv0s6m.apps.googleusercontent.com'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
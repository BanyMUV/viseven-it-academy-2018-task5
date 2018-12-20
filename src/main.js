import Vue from 'vue'
import Shirts from './pages/T-Shirts.vue'
import VueRouter from 'vue-router'
import Main from './Main.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/main', component: Main },
  {path: '/t-shirts', component: Shirts},
  ]

const router = new VueRouter({
  routes
})
const wrapper = new Vue({
  router
}).$mount('#wrapper')

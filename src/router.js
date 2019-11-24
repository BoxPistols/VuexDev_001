import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/Product'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    }
  ]
})
export default router

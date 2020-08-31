import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/Product'
import Vuex from '@/views/Vuex'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/product',
            component: Product
        }, {
            path: '/vuex',
            component: Vuex
        }
    ]
})
export default router

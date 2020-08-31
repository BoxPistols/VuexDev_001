require('@/assets/sass/main.sass');
// import { sideBar_Open } from "./sideBar"; import navBar_Open from "./navBar";
// require('./navBar.js');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Header from './components/Header.vue'
import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)

// Vue.component('app-header', Header)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// TODO: move to other file
// Nav Toggle
export function navBar_Open() {

    const target = document.querySelector('.grid-container')
    const btn = document.querySelector('.nav_toggle')
    const nav = document.querySelector('nav.nav')

    // LocalStorage
    let navActive = localStorage.getItem('navActive')
    const enableNavActive = () => {
        localStorage.setItem('navActive', 'enable')
        target
            .classList
            .add('active_navBar')
        nav
            .classList
            .add('min_nav')
    }
    const disableNavActive = () => {
        localStorage.setItem('navActive', null)
        target
            .classList
            .remove('active_navBar')
        nav
            .classList
            .remove('min_nav')
    }
    if (navActive === "enable") {
        enableNavActive()
    } else {
        disableNavActive()
    }

    btn.addEventListener('click', () => {
        if (target.classList.contains('active_navBar')) {
            target
                .classList
                .remove('active_navBar')
            nav
                .classList
                .remove('min_nav')
        } else {
            target
                .classList
                .add('active_navBar')
            nav
                .classList
                .add('min_nav')
        }
        // LocalStorage
        navActive = localStorage.getItem('navActive')
        if (navActive !== 'enable') {
            enableNavActive()
        } else {
            disableNavActive()
        }
    })
}
navBar_Open();

/// SideBar
export function sideBar_Open() {
    // console.log("functionView");
    const target = document.querySelector('.grid-container')
    const btn = document.querySelector('.aside_toggle')

    btn.addEventListener('click', () => {
        if (target.classList.contains('active_sideBar')) {
            // console.log("Yes");
            target
                .classList
                .remove('active_sideBar');
        } else {
            target
                .classList
                .add('active_sideBar');
            // console.log("non");
        }
    })
}
sideBar_Open()

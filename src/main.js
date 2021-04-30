require('@/assets/sass/main.sass')
// import { sideBar_Open } from "./sideBar";
// require('./navBar.js')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// TODO: create  import file
// SideBar
// export function sideBar_Open() {
//     // console.log("functionView");
//     const target = document.querySelector('.grid-container')
//     const btn = document.querySelector('.aside_toggle')

//     btn.addEventListener('click', () => {
//         if (target.classList.contains('active_sideBar')) {
//             // console.log("Yes");
//             target.classList.remove('active_sideBar')
//         } else {
//             target.classList.add('active_sideBar')
//             // console.log("non");
//         }
//     })
// }
// sideBar_Open()

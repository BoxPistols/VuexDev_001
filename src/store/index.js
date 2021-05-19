import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'Hello Store index Msg',
        counter: 0,
        navStorage: false,
        num: 77,
        // sideMenuRightDrawer: false,
    },
    mutations: {
        //
        // toggleSideMenuRightDrawer (state) {
        //     state.sideMenuRightDrawer = !state.sideMenuRightDrawer
        // },
        // for Object
        countObj (state, obj) {
            state.msg = obj.addMsg
            state.counter += obj.addCount
        },
        // localStorage
        navStorage (state, n) {
            state.navStorage = n
        },
        // for methods
        increment (state, n) {
            state.counter += n
        },
        decrement (state, n) {
            state.counter -= n
        },
        reset (state) {
            state.counter = 0
            state.msg = 'Hello Store index Msg'
        },
        numView (state) {
            state.num
        },
    },
    actions: {
        // toggleSideMenuRightDrawer ({ commit }) {
        //     commit('toggleSideMenuRightDrawer')
        // },
    },
    modules: {},
    plugins: [createPersistedState()],
})

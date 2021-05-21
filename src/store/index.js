import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: '',
        counter: 0,
        navStorage: false,
        num: 0,
        sideMenuRightDrawer: false,
        menuOpen: false,
        active: true,
    },
    mutations: {
        toggleMenu (state) {
            state.active = !state.active
        },
        resetToggle (state) {
            state.menuOpen = false
        },
        inc2 (state, n) {
            state.num = state.num + n
        },
        reset2 (state) {
            state.num = 0
        },
        division (state, val) {
            state.num = state.num / val
        },
        toggleSideMenuRightDrawer (state) {
            state.sideMenuRightDrawer = true
        },
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
            state.msg = ''
        },
        numView (state) {
            state.num
        },
        updateMsg (state, newMsg) {
            state.msg = newMsg
        },
    },
    getters: {
        doubleNum: (state) => state.num * 2,
        tripleNum: (state) => state.num * 3,
        msg: (state) => state.msg,
    },
    actions: {
        // toggleMenu (context) {
        //     context.commit('menuOpen')
        // },
        division (context, val) {
            context.commit('division', val)
        },
        toggleSideMenuRightDrawer (context) {
            context.commit('toggleSideMenuRightDrawer')
        },
        updateMsg (context, newMsg) {
            context.commit('updateMsg', newMsg)
        },
    },
    modules: {},
    plugins: [createPersistedState()],
})

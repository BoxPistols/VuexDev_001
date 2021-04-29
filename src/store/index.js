import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'Hello Store index Msg',
        counter: 0,
    },
    mutations: {
        increment(state, n) {
            state.counter += n
        },
        decrement(state, n) {
            state.counter -= n
        },
    },
    actions: {},
    modules: {},
})

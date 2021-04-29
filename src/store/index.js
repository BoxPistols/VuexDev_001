import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'Hello Store index Msg',
        counter: 0,
    },
    mutations: {
        // for Object
        countObj(state, obj) {
            state.msg = obj.addMsg
            state.counter += obj.addCount
        },
        // for methods
        increment(state, n) {
            state.counter += n
        },
        decrement(state, n) {
            state.counter -= n
        },
        reset(state) {
            state.counter = 0
        },
    },
    actions: {},
    modules: {},
})

<template>
    <div class="Vuex">
        <h1>Vuex</h1>
        <h2>
            <router-link to="/">Home</router-link>
        </h2>

        <h3>Counter</h3>
        <div class="keyNum">{{ keyNum }}</div>
        <h2>{{ $store.state.msg }}</h2>
        <h3>{{ $store.state.counter }}</h3>
        <button @click="setReset">setReset</button>
        <button @click="setIncrement">Increment</button>
        <button @click="setDecrement">Derement</button>
        <button @click="setObj">setObj</button>
        <button @click="setObj2">setObj2</button>
        <!-- <button @click.shift="setObj">setObj + Shift</button> -->
        <hr class="line" />
        <h3>ReTry</h3>
        <p>num: {{ setNum }}</p>
        <p>{{ double }}</p>
        <p>{{ triple }}</p>
        <p>
            <button class="btn" @click="incNum">Inc</button>
            <button class="btn" @click="inc2">inc2</button>
            <button class="btn" @click="reset2">reset2</button>
            <button class="btn" @click="incAction(4)">incAction</button>
            <!-- <button class="btn" @click="doubleCount">doubleCount</button> -->
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            keyNum: 'keyNum ',
        }
    },
    computed: {
        // ...mapGetters(['doubleNum', 'tripleNum']),
        ...mapGetters({
            double: 'doubleNum',
            triple: 'tripleNum',
        }),
        setNum() {
            return this.$store.state.num
        },
        doubleCount() {
            return this.$store.getters.doubleNum
        },
    },
    methods: {
        incAction(x) {
            this.$store.dispatch('incAction', x)
        },
        inc2() {
            this.$store.commit('inc2', 100)
        },
        reset2() {
            this.$store.commit('reset2')
        },
        // ...mapMutations([('inc2', 100), 'reset2']), // don't move
        incNum() {
            this.$store.state.num++
        },
        setObj() {
            this.$store.commit({
                type: 'countObj',
                addMsg: 'Hey!!',
                addCount: 3,
            })
        },
        setObj2() {
            if (this.$store.state.counter > 0) {
                this.$store.commit({
                    type: 'countObj',
                    addMsg: 'Hey2!!',
                    addCount: -3,
                })
            }
        },
        setIncrement() {
            this.$store.commit('increment', 2)
        },
        setDecrement() {
            if (this.$store.state.counter > 0) {
                this.$store.commit('decrement', 1)
            }
        },
        setReset() {
            this.$store.commit('reset')
        },
        // keyAction(e) {
        //     if (e.keyCode == 32) {
        //         this.setReset()
        //     } else if (e.keyCode == 91) {
        //         this.setDecrement()
        //     }
        //     //キーコードの表示
        //     this.keyNum = e.keyCode
        // },
    },
    created() {
        //キーコードによる動作の登録
        window.addEventListener('keydown', this.keyAction)
    },
    beforeDestroy() {
        //キーコードによる動作の削除
        window.removeEventListener('keydown', this.keyAction)
    },
}
</script>

<style lang="sass" scoped>
.Vuex
    padding: 24px 32px
    .line
        margin:  24px 0
</style>

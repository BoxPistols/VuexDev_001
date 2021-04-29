<template>
    <div class="Vuex">
        <router-link to="/">Home</router-link>

        <div class="keyNum">{{ keyNum }}</div>

        <h2>{{ $store.state.msg }}</h2>
        <h3>{{ $store.state.counter }}</h3>
        <button @click="setReset">setReset</button>
        <button @click="setIncrement">Increment</button>
        <button @click="setDecrement">Derement</button>
        <button @click="setObj">setObj</button>
        <button @click="setObj2">setObj2</button>
        <!-- <button @click.shift="setObj">setObj + Shift</button> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyNum: 'keyNum ',
        }
    },
    methods: {
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
</style>

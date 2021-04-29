<template>
    <div class="Vuex">
        <router-link to="/">Home</router-link>

        <h2>{{ $store.state.msg }}</h2>
        <h3>{{ $store.state.counter }} </h3>
        <button @click="setIncrement">Increment</button>
        <button @click="setDecrement">Derement</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        setIncrement(){
            this.$store.commit('increment')
        },
        setDecrement(){
            if(this.$store.state.counter > 0) {
                this.$store.commit('decrement')
            }
        }
    },
}
</script>

<style lang="sass" scoped>
.Vuex
    padding: 24px 32px
</style>

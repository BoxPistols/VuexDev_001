<template>
    <div id="app">
        <!-- <app-header /> -->
        <!-- <nav> -->
        <!-- <router-link to="/">Home</router-link> -->
        <!-- <router-link to="/product">Product</router-link> -->
        <!-- </nav> -->
        <router-view />
    </div>
</template>

<script>
export default { name: "App" };
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import "https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined";

#app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
<template>
    <nav :class="['nav', vueAdminDarkMode ? 'min_nav' : ' ' ]">
        <div class="nav_toggle">
            <input type="checkbox" id="theme-toggle" v-model="vueAdminDarkMode" />
            <label for="theme-toggle">
                <svg
                    width="100pt"
                    height="100pt"
                    version="1.1"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#333"
                >
                    <g>
                        <path
                            d="m63.801 55.5h-44.801c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h44.898c3 0 5.5 2.5 5.5 5.5-0.097657 3-2.5 5.5-5.5977 5.5z"
                        />
                        <path
                            d="m44.398 86.898h-25.398c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h25.398c3 0 5.5 2.5 5.5 5.5 0 3.1016-2.5 5.5-5.5 5.5z"
                        />
                        <path
                            d="m81.301 24h-62.301c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h62.398c3 0 5.5 2.5 5.5 5.5-0.097657 3-2.5 5.5-5.5977 5.5z"
                        />
                    </g>
                </svg>
            </label>
        </div>
        <div class="org_nav">
            <div class="mol_navRole">
                <div class="atm_navRole-img">
                    <img src="../assets/logo.png" alt />
                    <!-- if Side Nav Role has icon -->
                    <!-- <span>
                        <i class="material-icons">equalizer</i>
                    </span>-->
                </div>
                <div class="atm_navRole-name">AnyLogo</div>
            </div>

            <div class="mol_navList">
                <ul>
                    <li>
                        <router-link to="/vuex">
                            <i class="material-icons">equalizer</i>
                            <span class="text">Vuex</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">equalizer</i>
                            <span class="text">ItemName</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">equalizer</i>
                            <span class="text">ItemName</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">equalizer</i>
                            <span class="text">ItemName</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">equalizer</i>
                            <span class="text">ItemName</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            vueAdminDarkMode: false,
        }
    },
    mounted() {
        if (localStorage.vueAdminDarkMode) {
            this.vueAdminDarkMode = JSON.parse(
                localStorage.getItem('vueAdminDarkMode')
            )
        }
    },
    watch: {
        vueAdminDarkMode() {
            localStorage.setItem(
                'vueAdminDarkMode',
                JSON.stringify(this.vueAdminDarkMode)
            )
        },
    },
}
</script>

<style lang="scss" scoped="scoped">
    nav.min_nav {
        width: 80px;
        li a {
            display: flex;
            flex-direction: column;
            /* overflow: hidden; */
            padding: 0 12px;
            i,
            span {
                display: block;
            }
            i {
                order: 2;
            }
            span {
                order: 1;
                text-align: left;
            }
        }
        span.text {
            font-size: 12px;
        }
    }
</style>

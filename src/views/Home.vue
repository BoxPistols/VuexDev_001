<template>
    <div class="home">
        <p>state {{ stateActive }}</p>
        <!-- <button @click="toggleMenu">toggleMenu</button> -->
        <div :class="['grid-container', cont_width ? 'active_navBar' : '' ]">
            <Header />
            <Nav />
            <article class="article">
                <div class="contents">
                    <div class="row">
                        <div class="grd">
                            <div class="grd_l-12">
                                <div class="lay_card d_flex">
                                    <div class="grd_l-4 md_l-12">
                                        <div class="org_card">
                                            <div class="mol_card">
                                                <div class="mol_card-title">Step One</div>
                                                <div class="mol_card-content">
                                                    Lorem ipsum dolor sit amex consenter
                                                    adipisicing elif. Amt, esse?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grd_l-4 md_l-12">
                                        <div class="org_card">
                                            <div class="mol_card">
                                                <div class="mol_card-title">Step Two</div>
                                                <div class="mol_card-content">
                                                    Lorem ipsum dolor sit amex consenter
                                                    adipisicing elif. Amt, esse?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grd_l-4 md_l-12">
                                        <div class="org_card">
                                            <div class="mol_card">
                                                <div class="mol_card-title">Step Three</div>
                                                <div class="mol_card-content">
                                                    Lorem ipsum dolor sit amex consenter
                                                    adipisicing elif. Amt, esse?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ////// -->
                <div class="contents">
                    <div class="row">
                        <div class="grd">
                            <div class="grd_l-12">
                                <div class="org_board">
                                    <div class="mol_board-pd">
                                        <div class="mol_board-content">
                                            <h3 class="mol_board-title">Board</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut commodi quae,
                                            quis alias pariatur voluptatem voluptatum recusandae maiores iure. Hic non
                                            soluta illo error debitis quaerat eveniet fuga architecto. Ipsa iusto
                                            suscipit nisi, vero ab accusamus, inventore totam magni animi eligendi ad!
                                            Perferendis dolore aspernatur voluptatibus vero necessitatibus velit totam
                                            ipsa itaque iste at consectetur voluptate minus harum placeat in ullam
                                            suscipit reprehenderit, eum iusto sunt ex. Deserunt autem iste, accusamus
                                            maxime eum dignissimos molestiae necessitatibus. Rem dignissimos ducimus
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contents">
                    <div class="row">
                        <div class="grd">
                            <div class="grd_l-12">
                                <div class="org_board">
                                    <div class="mol_board">
                                        <div class="mol_board-content">
                                            <table>
                                                <tr>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Points</th>
                                                    <th>Value</th>
                                                    <th>Value</th>
                                                    <th>Value</th>
                                                    <th>Value</th>
                                                    <th>Value</th>
                                                </tr>
                                                <tr>
                                                    <td>Jill</td>
                                                    <td>Smith</td>
                                                    <td>50</td>
                                                    <td>1250</td>
                                                    <td>1250</td>
                                                    <td>1250</td>
                                                    <td>1250</td>
                                                    <td>1250</td>
                                                </tr>
                                                <tr>
                                                    <td>Eve</td>
                                                    <td>Jackson</td>
                                                    <td>94</td>
                                                    <td>294</td>
                                                    <td>294</td>
                                                    <td>294</td>
                                                    <td>294</td>
                                                    <td>294</td>
                                                </tr>
                                                <tr>
                                                    <td>Adam</td>
                                                    <td>Johnson</td>
                                                    <td>67</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                </tr>
                                                <tr>
                                                    <td>Adam</td>
                                                    <td>Johnson</td>
                                                    <td>67</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                </tr>
                                                <tr>
                                                    <td>Adam</td>
                                                    <td>Johnson</td>
                                                    <td>67</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                </tr>
                                                <tr>
                                                    <td>Adam</td>
                                                    <td>Johnson</td>
                                                    <td>67</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                    <td>467</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contents">
                    <div class="row">
                        <div class="grd">
                            <div class="grd_l-12">
                                <div class="org_board">
                                    <div class="mol_board">
                                        <div class="mol_board-content">
                                            <Chart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <aside class="aside">
                <!-- @click="openSideMenuRight" -->
                <div :class="['aside_toggle', { 'open' : isActive}]" @click="toggleMenu">MENU</div>
                <!-- eslint-disable-next-line vue/valid-v-model -->
                <!-- v-model="$store.state.toggleSideMenuRightDrawer" -->
                <div class="side-contents">
                    <div class="row">
                        <p>Side Contents</p>
                    </div>
                </div>
            </aside>

            <footer class="footer">
                <small>Copyright &copy; 2019-2020 Asagiri Design All Rights Reserved.</small>
            </footer>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Header from '../components/Header.vue'
import Chart from '../components/Chart.component.vue'

export default {
    name: 'home',
    data() {
        return {
            cont_width: this.$store.state.navStorage,
            isActive: this.$store.state.active,
        }
    },
    methods: {
        // toggleMenu() {
        //     // this.isActive = !this.isActive
        //     // this.isActive = this.$store.state('active')
        //     this.$store.commit('toggleMenu')
        // },
        toggleMenu() {
            this.isActive = !this.isActive
            this.$store.commit('toggleMenu')
        },
    },
    computed: {
        stateActive() {
            return this.$store.state.active
        },
        stateMenu() {
            return this.$store.state.menuOpen
        },
        incriment() {
            return this.$store.state.incriment
        },
    },
    components: {
        Chart,
        Nav,
        Header,
    },
}

// import ModalMessageHeader from './alert-message.vue'
//
// export default {   props: {     title: String,   },   data() {     return {
// showText: true     }   },   methods: {     close: function() { this.showText
// = !this.showText     }   } }
</script>

<style lang="scss">
    .cont {
        color: orange;
        &.on {
            color: teal;
        }
    }
    .mol_board-content {
        overflow: hidden;
        table {
            display: table;
            @media only screen and (max-width: 768px) {
                display: block;
            }
            overflow: scroll;
        }
    }
    .open + .side-contents {
        position: absolute;
        right: 0%;
        background: rgb(235 226 226 / 79%);
        display: block;
        min-height: 100vh;
        left: auto;
        top: 70px;
        bottom: 100%;
        padding: 12px 11px;
        min-width: 180px;
        height: 100%;
        z-index: 2;
    }
</style>
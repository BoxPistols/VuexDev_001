<template>

  <div class='home'>
    <!-- <h1>Home</h1>
          <h2>{{ $store.state.msg }}</h2>
          <p>{{ $store.state.counter }}</p>
          <button @click="incriment">Increment</button> -->
    <!-- <button @click="decriment">Decrement</button> -->

    <div class="grid-container">
      <header class="header">
        <div class="contents">
          <div class="grd">
            <div class="grd_l-12 d_flex">
              <div class="org_header">
                <div class="mol_header-search">
                  <input class="atm_header-search" type="text" placeholder="Search">
                </div>
                <div class="mol_header-item">
                  <div class="atm_header-item"> <a href="#"><i class="material-icons-outlined">email</i></a></div>
                  <div class="atm_header-item"> <a href="#"><i class="material-icons-outlined">notification_important</i>
                  </a></div>
                  <div class="atm_header-item">
                    <div class="img"></div>
                    <div class="text">MyName</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav class="nav">
        <div class="nav_toggle">

          <svg width="100pt"
               height="100pt"
               version="1.1"
               viewBox="0 0 100 100"
               xmlns="http://www.w3.org/2000/svg"
               fill="#333">
            <g>
              <path
                d="m63.801 55.5h-44.801c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h44.898c3 0 5.5 2.5 5.5 5.5-0.097657 3-2.5 5.5-5.5977 5.5z" />
              <path
                d="m44.398 86.898h-25.398c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h25.398c3 0 5.5 2.5 5.5 5.5 0 3.1016-2.5 5.5-5.5 5.5z" />
              <path
                d="m81.301 24h-62.301c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5h62.398c3 0 5.5 2.5 5.5 5.5-0.097657 3-2.5 5.5-5.5977 5.5z" />
            </g>
          </svg>

        </div>
        <div class="org_nav">
          <div class="mol_navRole">
            <div class="atm_navRole-img">

              <!-- <img src="" alt=""> -->
              <span> <i class="material-icons">equalizer</i> </span>
            </div>
            <div class="atm_navRole-name">
              AnyLogo
            </div>
          </div>

          <div class="mol_navList">
            <ul>
              <li>
                <a href="#">
                  <i class="material-icons">equalizer</i> <span class="text">ItemName</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">equalizer</i> <span class="text">ItemName</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">equalizer</i> <span class="text">ItemName</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">equalizer</i> <span class="text">ItemName</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="material-icons">equalizer</i> <span class="text">ItemName</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <article class="article">
        <div class="contents">
          <div class="row">
            <div class="grd">
              <div class="grd_l-12">
                <div class="lay_card d_flex">
                  <div class="grd_l-4 md_l-12">

                    <div class="org_card">
                      <div class="mol_card">
                        <div class="mol_card-title">Card</div>
                        <div class="mol_card-content">Lorem ipsum dolor sit amex consenter adipisicing elif. Amt, esse?
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="grd_l-4 md_l-12">
                    <div class="org_card">
                      <div class="mol_card">
                        <div class="mol_card-title">Card</div>
                        <div class="mol_card-content">Lorem ipsum dolor sit amex consenter adipisicing elif. Amt, esse?
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="grd_l-4 md_l-12">
                    <div class="org_card">
                      <div class="mol_card">
                        <div class="mol_card-title">Card</div>
                        <div class="mol_card-content">Lorem ipsum dolor sit amex consenter adipisicing elif. Amt, esse?
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
                      <h3 class="mol_board-title">board</h3>
                      Lorem ipsum dolor sit amex consenter adipisicing elif. Amt, esse?
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
                        </tr>
                        <tr>
                          <td>Jill</td>
                          <td>Smith</td>
                          <td>50</td>
                          <td>1250</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>94</td>
                          <td>294</td>
                        </tr>
                        <tr>
                          <td>Adam</td>
                          <td>Johnson</td>
                          <td>67</td>
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

      </article>

      <aside class="aside">
        <div class="aside_toggle">MENU</div>
        <div class="contents">
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

  export default {
    name: 'home',
    // methods: {
    //   incriment() {
    //     this.$store.commit('increment')
    //   }
    // }
    computed: {
      incriment() {
        return this.$store.state.incriment
      }
    }
  }

  // import ModalMessageHeader from './alert-message.vue'
  //
  // export default {
  //   props: {
  //     title: String,
  //   },
  //   data() {
  //     return {
  //       showText: true
  //     }
  //   },
  //   methods: {
  //     close: function() {
  //       this.showText = !this.showText
  //     }
  //   }
  // }

</script>
<style lang="scss" scoped>
</style>

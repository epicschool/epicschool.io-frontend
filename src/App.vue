<template>
  <div id="app">
      
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/">
                        <img src="./assets/epicschool_logo.png" alt="Logo">
                    </router-link>
                    <span class="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end"><div class="tabs is-right">
                        <ul>
                            <li>
                                <router-link class="navbar-item" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="navbar-item" to="/Courses">Courses</router-link>
                            </li>
                            <li>
                                <router-link class="navbar-item" to="/ContactUs">Contact us</router-link>
                            </li>
                            <li>
                                <router-link class="navbar-item" to="/Team">Team</router-link>
                            </li>
       
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </div>

        <router-view/>

        <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li><a>And this at the bottom</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

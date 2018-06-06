<template>
  <div id="app">
      
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav id="nav" class="navbar">
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
                                    <router-link  class="navbar-item" to="/"><span v-on:click="setActiveMenu('Home')">Home</span></router-link>
                                </li>
                                <li>
                                    <router-link  class="navbar-item" to="/Courses"><span v-on:click="setActiveMenu('Courses')">Courses</span></router-link>
                                </li>
                                <li>
                                    <router-link  class="navbar-item" to="/Team"><span v-on:click="setActiveMenu('Team')">Team</span></router-link>
                                </li>
                                <li>
                                    <router-link  class="navbar-item" to="/ContactUs"><span v-on:click="setActiveMenu('Contactus')">Contact us</span></router-link>
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
                        <li><a href="https://epicschool.io/"><b>(▀̿Ĺ̯▀̿ ̿) ©2018 Epicschool </b></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import router from 'vue-router'

    @Component({
        name:'App',
        components: {
        }
    })

    export default class App extends Vue {

        protected activeMenu:String = ''

        mounted() {
            this.bulmaNavbar();
        }

        setActiveMenu(menuName:String) {
            console.log('setting active menu',menuName);
            this.activeMenu = menuName ;
        }

        bulmaNavbar() {
            document.addEventListener('DOMContentLoaded', function() {

                // Get all "navbar-burger" elements
                var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

                // Check if there are any navbar burgers
                if ($navbarBurgers.length > 0) {
                    // Add a click event on each of them
                    $navbarBurgers.forEach(function($el) {
                        $el.addEventListener('click', function() {

                            // Get the target from the "data-target" attribute
                            var target = $el.dataset.target;
                            target = document.getElementById(target);

                            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                            $el.classList.toggle('is-active');
                            target.classList.toggle('is-active');
                        });
                    });
                }

            });
        }

    }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #a409af;
    }
  }
}
</style>

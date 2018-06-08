<template>
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav id="nav" class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link class="navbar-item" to="/">
                            <img src="./../assets/epicschool_logo_2.png" alt="Logo">
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
                                    <router-link  class="navbar-item" to="/">Home</router-link>
                                </li>
                                <li>
                                    <router-link  class="navbar-item" to="/courses">Courses</router-link>
                                </li>
                                <li>
                                    <router-link  class="navbar-item" to="/team">Team</router-link>
                                </li>
                                <li>
                                    <router-link  class="navbar-item" to="/contactUs">Contact us</router-link>
                                </li>
        
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>

        <router-view/>

       <Footer/>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import  Footer  from './Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Main extends Vue {
            protected activeMenu:String = ''

        mounted() {
            this.bulmaNavbar();
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

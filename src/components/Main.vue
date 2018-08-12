<template>
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav id="nav" class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link class="navbar-item" to="/">
                            <img src="./../assets/epicschool_logo_2.png" alt="Logo">
                        </router-link>
                        <span class="navbar-burger burger" v-on:click="toggleNavBar()" data-target="navbarMenu">
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

                                <li>
                                  <router-link  v-if="false"  class="navbar-item" to="/survey"> Survey </router-link>
                                </li>
                                
                                <li>
                                    <router-link v-if="loggedIn" class="navbar-item" to="/account"> Account &nbsp;<i class="fa fa-cog"></i></router-link>
                                </li>

                                <li>
                                    <router-link v-if="!loggedIn" class="navbar-item" to="/auth/register">Sign up</router-link>
                                </li>
                                <li>
                                    <router-link v-if="loggedIn" class="navbar-item" to="/auth/logout">Sign out</router-link>
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
    import { Getter } from 'vuex-class'

    @Component({
    components: {
        Footer,
    },
    })
    export default class Main extends Vue {
            protected activeMenu: String = '';

            @Getter('account/loggedIn') private loggedIn;
            @Getter('account/isEmailConfirmed') private isEmailConfirmed;
            @Getter('account/currentUser') private currentUser;

            private toggleNavBar() {
                console.log('toggling navbar');
                const active = 'is-active';
                const element = document.getElementById('navbarMenu');
                // element.classList returns an array of element class names
                // we check if it contains "is-active" we remove it else we add it
                // console.log(element.classList)
                if (element!.classList.contains(active)) {
                    element!.classList.remove(active);
                } else {
                    element!.classList.add(active);
                }
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

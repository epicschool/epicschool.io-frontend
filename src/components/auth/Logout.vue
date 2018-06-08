<template>
    <div class="columns is-mobile">
        <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile">
            <br/>
            <h2 class="subtitle">Abmelden</h2>
            <div>
                <p>
                   Benutzer wird abgemeldet..
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import router from 'vue-router';
    import { User } from '../../models/user';
    
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Getter, Action } from 'vuex-class'
    import { userWebservice } from '../../webservices/user' 
    
    @Component
    export default class Logout extends Vue {
        
        @Action('utils/RESET') reset

        // Mounted is called initially
        mounted() {
            console.log('Logout Mounted')
            this.logout();
        }
    
        // Methods
        logout() {
            let self = this;
            userWebservice.logout().then(function (response) {
                self.$store.commit('account/logout')

                self.reset()

                setTimeout(() => {
                    self.$router.push({ path: '/auth/login' })
                }, 300);
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style>
</style>

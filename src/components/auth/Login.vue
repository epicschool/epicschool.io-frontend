<template>
<div class="columns is-mobile">
    <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile">
        <br/>
        <h2 class="subtitle">Login</h2>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input required v-model.lazy="user.email" id="login_email" name="email" class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input required v-model.lazy="user.password" id="password" class="input" type="password" placeholder="Passwort">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success is-fullwidth" v-on:click="login()" @keyup.enter="login" :disabled="disabled">
                  Login
                </button>
            </p>
             <br/>
               <p> Noch kein Account? <router-link class="button is-light is-fullwidth" to="/auth/register?type=organisation">Registrieren</router-link></p>
        </div>

        <div class="form-group">
            <span id="errorMsg" style="color:red; font-weight: 600">{{errorMsg}}</span>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import axios from 'axios';
    import { User } from '../../models/user';
    
    import { Component, Prop, Vue } from 'vue-property-decorator';
    
    import { userWebservice } from '../../webservices/user' 
    
    @Component
    export default class Login extends Vue {
        
        // Data
        protected user: User = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            new_email: '',
            email_confirmation:'',
            password: '',
            password_confirmation: '',
            new_password:'',
            email_confirmed:false,
            address : '',
            address_addition: '',
            postcode : '',
            city : '',
            country : '',
        }
        protected disabled:boolean = false
        protected errorMsg: string = ''

        protected action: string = ''
        protected event_id: string = ''
    
        // Mounted is called initially
        mounted() {
            console.log('This is called on mounted')
            this.event_id = this.$route.query.hasOwnProperty('event_id')?this.$route.query.event_id:''
            this.action = this.$route.query.hasOwnProperty('action')?this.$route.query.action:''
        }
    
        // Methods
        login() {
            console.log("Login called")
    
            if(this.user.email === '' || this.user.password === '') {
                this.errorMsg = 'Die Emailadresse oder das Passwort fehlt.'
                return
            }
    
            var self = this

            userWebservice.login(this.user.email, this.user.password).then(function (response) {
                self.errorMsg = '';
                self.$store.commit('account/setApiToken', response.data.api_token)
    
                userWebservice.getUserInfo().then(function (response) {
                    self.$store.commit('account/setCurrentUser', response.data)
                    self.redirect();
                })
            }).catch(function (error) {
                self.errorMsg = 'Das Passwort oder der Benutzername sind nicht korrekt'
                console.log(error)
            })
        }

        redirect(){
            if(this.action == 'payment' && this.event_id != ''){
                this.$router.push({ path: '/events/payment?event_id=' + this.event_id })
            } else {
                this.$router.push({ path: '/' })
            }
        }
    }
</script>

<style scoped>

</style>

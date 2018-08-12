<template>
<div class="columns is-mobile">
    
    <div class="column is-4-desktop is-offset-4-desktop is-8-tablet is-offset-2-tablet is-12-mobile ">
          <h3 class="title has-text-grey">Sign in</h3>
          <p class="subtitle has-text-grey">Please Sign in to unlock teh 1337 Power</p>
          <div class="box">
            <figure class="avatar">
              <!-- <img src="img/icons/apple-touch-icon-114x114.png"> -->
              <!-- <img class="login-image" src="img/gifs/Sharingan.gif"> -->
              <!-- <img class="login-image" src="img/gifs/flame.gif"> -->
              <!-- <img class="login-image" src="img/gifs/codegeass.gif"> -->
              <img class="login-image" src="img/gifs/Satura_power.gif">
              
            </figure>

              <div class="field">
                <div class="control">
                  <input class="input is-large" v-model.lazy="user.email"  id="login_email" name="email" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" v-model.lazy="user.password" id="login_password" type="password" placeholder="Your Password">
                </div>
              </div>
      
              <button class="button is-block is-primary is-large is-fullwidth" v-on:click="login()" @keyup.enter="login" :disabled="disabled">Sign in</button>
     
          </div>
            <div class="form-group">
                <span id="errorMsg" style="color:red; font-weight: 600">{{errorMsg}}<br/></span>
            </div>
          <p class="has-text-grey">
            <router-link to="/auth/register">Sign up</router-link> &nbsp;·&nbsp;
            <router-link to="/contactUs">Forgot password?</router-link> &nbsp;·&nbsp;
            <router-link to="/contactUs">Need help?</router-link>
          </p>
    </div>

</div>
</template>

<script lang="ts">
    import axios from 'axios';
    import { User } from '../../models/user';
    
    import { Component, Prop, Vue } from 'vue-property-decorator';
    
    import { userWebservice } from '../../webservices/user';
    
    @Component
    export default class Login extends Vue {
        // Data
        protected user: User = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            new_email: '',
            email_confirmation: '',
            password: '',
            password_confirmation: '',
            new_password: '',
            email_confirmed: false,
            address : '',
            address_addition: '',
            postcode : '',
            city : '',
            country : '',
        }
        protected disabled: boolean = false;
        protected errorMsg: string = '';

        protected action: string = '';
        protected event_id: string = '';
    
        // Mounted is called initially
        private mounted() {
            // console.log('This is called on mounted')
            this.event_id = this.$route.query.hasOwnProperty('event_id')?this.$route.query.event_id:'';
            this.action = this.$route.query.hasOwnProperty('action')?this.$route.query.action:'';
        }

        // Methods
        private login() {
            console.log('Login called');
    
            if(this.user.email === '' || this.user.password === '') {
                this.errorMsg = 'The email address or password is missing.';
                return
            } else if (!this.validateEmail(this.user.email)) {
                this.errorMsg = 'Please enter a valid e-mail address.';
                return 0;
            } 
            const self = this
            self.disabled = true;

            userWebservice.login(this.user.email, this.user.password).then(function(response) {
                self.errorMsg = '';
                self.$store.commit('account/setApiToken', response.data.api_token)
    
                userWebservice.getUserInfo().then(function(response) {
                    self.$store.commit('account/setCurrentUser', response.data)
                    self.redirect();
                })
            }).catch(function (error) {
                self.errorMsg = 'The E-Mail or Password is incorrect'
                self.disabled = false;
                console.log(error)
            })
        }

        private redirect(){
            this.$router.push({ path: '/' })
        }

        private validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email.toLowerCase());
        }
    }
</script>

<style scoped>

</style>

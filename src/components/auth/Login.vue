<template>
<div class="columns is-mobile">
    
    <div class="column is-4-desktop is-offset-4-desktop is-8-tablet is-offset-2-tablet is-12-mobile ">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to unlock teh 1337 Power</p>
          <div class="box">
            <figure class="avatar">
              <!-- <img src="img/icons/apple-touch-icon-114x114.png"> -->
              <!-- <img class="login-image" src="img/gifs/Sharingan.gif"> -->
              <!-- <img class="login-image" src="img/gifs/flame.gif"> -->
              <!-- <img class="login-image" src="img/gifs/codegeass.gif"> -->
              <img class="login-image" src="img/gifs/Satura_power.gif">
              
            </figure>
            <form>
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
      
              <button class="button is-block is-primary is-large is-fullwidth" v-on:click="login()" @keyup.enter="login" :disabled="disabled">Login</button>
            </form>
          </div>
            <div class="form-group">
                <span id="errorMsg" style="color:red; font-weight: 600">{{errorMsg}}<br/></span>
            </div>
          <p class="has-text-grey">
            <router-link to="/auth/register">Sign Up</router-link> &nbsp;·&nbsp;
            <router-link to="/contactUs">Forgot Password</router-link> &nbsp;·&nbsp;
            <router-link to="/contactUs">Need Help?</router-link>
          </p>
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
html,body {
  font-family: 'Open Sans', serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
.login-image {
    height: 150px;
    width: 150px;
}
.login-image:hover {
    transform: scale(20);
}

input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>

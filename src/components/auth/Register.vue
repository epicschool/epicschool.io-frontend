<template>
<div class="columns is-mobile">

        <div class="column is-4-desktop is-offset-4-desktop is-8-tablet is-offset-2-tablet is-12-mobile ">
          <h3 class="title has-text-grey">Sign up</h3>
          <p class="subtitle has-text-grey">Please Sign up to unlock teh 1337 Power</p>
          <div class="box">
            <figure class="avatar">
              <img class="login-image" src="img/gifs/Satura_power.gif">
              
            </figure>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input required v-model.lazy="user.firstname"  id="login_firstname" name="firstname" class="input is-large" type="text" placeholder="First name">
                        <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                        </span>
                        <span v-if="errorMsg=='firstname'" class="help is-danger">Please enter your first name</span>      
                    </p>
                </div>

                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input required v-model.lazy="user.lastname"  id="login_lastname" name="lastname" class="input is-large" type="text" placeholder="Last name">
                        <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                        </span>
                        <span v-if="errorMsg=='lastname'" class="help is-danger">Please enter your last name</span>      
                    </p>
                </div>

                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input required v-model.lazy="user.email" id="login_email" name="email" class="input is-large" type="email" placeholder="E-Mail">
                        <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                        </span>
                        <span v-if="errorMsg=='email'" class="help is-danger">Please enter a valid e-mail address</span>    
                        <span v-if="errorMsg=='emailTaken'" class="help is-danger">This e-mail address is already in use</span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input required v-model.lazy="user.password" id="password" class="input is-large" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                        </span>
                        <span v-if="errorMsg=='password'" class="help is-danger">please enter a password</span> 
                        <span v-if="errorMsg=='passwordNotValid'" class="help is-danger">The password must be at least 8 characters long</span>
                    </p>
                </div>
              <button class="button is-block is-primary is-large is-fullwidth" v-on:click="register()" @keyup.enter="register" :disabled="disabled">Sign up</button>
          </div>
            <!-- <div class="form-group">
                <span id="errorMsg" style="color:red; font-weight: 600">{{errorMsg}}<br/></span>
            </div> -->

            <p class="has-text-grey">
                <router-link to="/auth/login">Already have an account? Sign in</router-link> &nbsp;·&nbsp;
                <router-link to="/contactUs">Need Help?</router-link>
            </p>
            <p class="terms">
                By clicking 'Sign up', you agree to our
                <router-link  class="" to="/TermsOfService">Terms</router-link>
                 and that you have read our <router-link  class="" to="/PrivacyPolicy">Privacy Policy</router-link>
            </p>
    </div>

</div>
</template>

<script lang="ts">
import axios from 'axios';
import router from 'vue-router';
import { User } from '../../models/user';

import { Component, Prop, Vue } from 'vue-property-decorator';

import { userWebservice } from '../../webservices/user';

export enum RegisterType {
    organisation = 'organisation',
    runner = 'runner',
    sponsor = 'sponsor',
    undefined = 'undefined',
}

@Component
export default class Register extends Vue {
    protected user: User = {} as User;

    protected disabled: boolean = false;
    protected errorMsg: string = '';

    private register() {
        const self = this;
        if (this.validate()) {
            self.disabled = true;

            userWebservice.register(this.user).then(function(response) {
                self.$store.commit('account/setApiToken', response.data.api_token);
                userWebservice.getUserInfo().then(function(getUserInfoResponse) {
                    self.$store.commit('account/setCurrentUser', getUserInfoResponse.data);
                    self.redirect();
                });


            }).catch(function(error) {
                self.disabled = false;

                // Check if the email is already taken
                // tslint:disable-next-line:max-line-length
                if (error.response && error.response.data && error.response.data.email === 'The email has already been taken.') {
                    self.errorMsg = 'emailTaken';
                }

                // Check if password was not
                // tslint:disable-next-line:max-line-length
                if (error.response && error.response.data && error.response.data.password === 'The password must be at least 8 characters long') {
                    self.errorMsg = 'passwordNotValid';
                }
            });
        }
    }

    private redirect() {
        this.$router.push({ path: '/' });
    }

    private validateEmail(email) {
        // tslint:disable-next-line:max-line-length
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    private validate() {
        if (this.user.firstname === '') {
            // this.errorMsg = 'Plaese enter your Name';
            this.errorMsg = 'firstname';
            return 0;
        } else if (this.user.lastname === '') {
            this.errorMsg = 'lastname';
            return 0;
        } else if (!this.validateEmail(this.user.email)) {
            this.errorMsg = 'email';
            return 0;
        } else if (this.user.password === '') {
            this.errorMsg = 'password';
            return 0;
        } else {
            return true;
        }
    }
}
</script>

<style scoped>
.terms{
    margin-top: 10px;
    font-size: 11pt;
    color: gray;
    text-align: left !important;
    font-weight: 100;
}
</style>

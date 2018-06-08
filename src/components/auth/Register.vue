<template>
<div class="columns is-mobile">
    <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet is-10-mobile is-offset-1-mobile">
        <br/>
        <h2 class="subtitle">Registrieren</h2>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input required v-model.lazy="user.firstname"  id="login_firstname" name="firstname" class="input" type="text" placeholder="Vorname">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                 <span v-if="errorMsg=='firstname'" class="help is-danger">Bitte geben Sie Ihren Namen ein</span>      
            </p>
        </div>

        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input required v-model.lazy="user.lastname"  id="login_lastname" name="lastname" class="input" type="text" placeholder="Nachname">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                 <span v-if="errorMsg=='lastname'" class="help is-danger">Bitte geben Sie Ihren Namen ein</span>      
            </p>
        </div>

        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input required v-model.lazy="user.email" id="login_email" name="email" class="input" type="email" placeholder="E-Mail">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span v-if="errorMsg=='email'" class="help is-danger">Bitte geben Sie eine gültige E-Mail-Adresse ein</span>    
                <span v-if="errorMsg=='emailTaken'" class="help is-danger">Diese E-Mail-Adresse wird schon verwendet</span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input required v-model.lazy="user.password" id="password" class="input" type="password" placeholder="Passwort">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="errorMsg=='password'" class="help is-danger">Bitte Passwort eingeben</span> 
                <span v-if="errorMsg=='passwords_not_same'" class="help is-danger">Passwörter stimmen nicht überein</span> 
                <span v-if="errorMsg=='passwordNotValid'" class="help is-danger">Das Passwort muss mindestens 8 Zeichen lang sein</span>
            </p>
        </div>

        <div class="field">
            <p class="control has-icons-left">
                <input required v-model.lazy="user.password_confirmation" id="password_confirmation" class="input" type="password" placeholder="Passwort Bestätigung">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="errorMsg=='password_confirmation'" class="help is-danger">Bitte bestätigen Sie Ihr Passwort</span> 
                <span v-if="errorMsg=='passwords_not_same'" class="help is-danger">Passwörter stimmen nicht überein</span> 
            </p>
        </div>

        <div class="field">
            <p class="control">
                <button class="button is-success is-fullwidth" v-on:click="register()" :disabled="disabled">
                  Registrieren
                </button>
                <br/>
               <span>
                   Hast du schon ein Login? <router-link class="button is-light is-fullwidth" to="/auth/login?type=organisation">Login</router-link>
               </span>
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

import { userWebservice } from '../../webservices/user' 

export enum RegisterType {
    organisation = "organisation",
    runner = "runner",
    sponsor = "sponsor",
    undefined = "undefined"
}

@Component
export default class Register extends Vue {
    
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

    protected params = {
        type: RegisterType.undefined,
        token: '',
        amount: '',
    }

    mounted() {
        this.params.type = RegisterType[this.$route.query.type] // Depending on the type passed it loads the enum values
        this.params.token = this.$route.query.token
        
        // Sponsor has also the amount
        if(this.$route.query.amount) {
            this.params.amount = this.$route.query.amount
        }
    }

    register() {
        var self = this
        if (this.validate()) {
            self.disabled = true;

            userWebservice.register(this.user).then(function (response) {

                self.$store.commit('account/setApiToken', response.data.api_token)

                userWebservice.getUserInfo().then(function (response) {
                    self.$store.commit('account/setCurrentUser', response.data)
                })
            }).catch(function (error) {
                self.disabled = false;

                // Check if the email is already taken
                if(error.response && error.response.data && error.response.data.email == "The email has already been taken.") {
                    self.errorMsg = "emailTaken"
                }

                // Check if password was not 
                if(error.response && error.response.data && error.response.data.password == "The password must be at least 8 characters.") {
                    self.errorMsg = "passwordNotValid"
                }
            })
        }
    }

    login() {
        let self = this

        userWebservice.login(this.user.email, this.user.password).then(function (response) {
            self.errorMsg = '';
            self.$store.commit('account/setApiToken', response.data.api_token)

            userWebservice.getUserInfo().then(function (response) {
                self.$store.commit('account/setCurrentUser', response.data)
                self.$router.push({ path: '/' })
            })
        }).catch(function (error) {
            console.log(error)
        })
    }

    
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    validate() {
        if (this.user.firstname == '') {
            // this.errorMsg = 'Plaese enter your Name';
            this.errorMsg = 'firstname';
            return 0;
        } else if (this.user.lastname == '') {
            this.errorMsg = 'lastname';
            return 0;
        } else if (!this.validateEmail(this.user.email)) {
            this.errorMsg = 'email';
            return 0;
        } else if (this.user.password == '') {
            this.errorMsg = 'password';
            return 0;
        } else if (this.user.password_confirmation == '') {
            this.errorMsg = 'password_confirmation';
            return 0;
        } else if (this.user.password_confirmation != this.user.password) {
            this.errorMsg = 'passwords_not_same';
            return 0;
        } else {
            return true;
        }
    }
}
</script>

<style scoped>

</style>

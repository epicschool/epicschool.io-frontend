<template>
    <div class="columns">
        <div class="column is-6-desktop is-offset-3-desktop is-6-tablet is-offset-3-tablet is-12-mobile ">
        <!-- email confirmation -->
            <div class="card rounded">
                <div class="card-image has-text-centered">
                    <figure class=" dashboard">
                        <!-- <img src="img/icons/logo_simple.png" alt="Hausaufgaben"> -->
                        <br/>
                        <span class="icon has-text-success">
                            <i v-if="!emailConfirmed" class="fa fa-5x fa-envelope"></i>
                            <i v-if="emailConfirmed" class="fa fa-5x fa-check-square-o "></i> 
                        </span>
                    </figure>
                </div>
                <div v-if="!emailConfirmed" class="card-content has-text-centered">
                    <span class="box-title"></span>
                    <div class="content">
                         <h4>Bestätige deine E-Mail-Adresse</h4>
                        <div class="field">
                            <br/>
                            <p class="control has-icons-left has-icons-right">
                                <input required  v-model.lazy="emailConfirmationToken" id="token" name="token" class="input has-text-centered" type="text" placeholder="Bestätigungscode">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                                <span v-if="errorMsg=='token'" class="help is-danger">Bitte gebe den Bestätigungscode ein</span>  
                                <span class="help is-danger">{{serverErrorMsg}}</span>   
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-right">
                                <button  class="button is-success is-fullwidth" @click.stop.prevent="confirmEmail()">Bestätigen</button> 
                                <br/>
                                <a v-on:click="resendConfirmationToken()" name="button" type="button" class="button is-text is-fullwidth">
                                    <span v-show="!resendingToken">E-Mail nochmals anfordern</span>
                                    <span v-if="resendingToken" class="icon">
                                        Bestätigungsmail wird versendet...
                                    </span>
                                </a>
                            </p>       
                        </div>
                    </div>
                </div>
                <div v-if="emailConfirmed"  class="card-content has-text-centered">
                    <span class="box-title"></span>
                    <div class="content">
                        <h4>Vielen Dank, deine E-Mail-Adresse wurde bestätigt!</h4>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import router from 'vue-router';
    import { User } from '../../models/user';
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';
    import { userWebservice } from '../../webservices/user';
    
    @Component({
        name: 'ConfirmEmail',
    })
    export default class ConfirmEmail extends Vue {
        // Data
        protected disabled: boolean = false;
        protected errorMsg: string = '';
        protected serverErrorMsg: string = '';
        protected emailConfirmationToken: string = '';
        protected emailConfirmed: boolean = false;
        protected resendingToken: boolean = false;

        @Getter('account/loggedIn') private loggedIn;

        // Mounted is called initially
        private mounted() {
            console.log('ConfirmEmail mounted');
            this.emailConfirmationToken = this.extractGetParameterFromVueURL('email_confirmation_token');
            if (this.emailConfirmationToken != '') {
                // setTimeout(() => {
                    this.confirmEmail();  
                // }, 1500);
            }
        }
    
        // Methods
        private confirmEmail() {
    
            if(this.emailConfirmationToken === '') {
                this.errorMsg = 'token'
                return
            }
    
            const self = this
    
            userWebservice.confirmEmail(this.emailConfirmationToken).then(function(response) {
                self.errorMsg = '';
                self.emailConfirmed = true;
                setTimeout(() => {
                        if (!self.loggedIn) {
                            self.$store.commit('account/setApiToken', response.data.api_token);
                       }
                        userWebservice.getUserInfo().then(function(response) {
                            self.$store.commit('account/setCurrentUser', response.data);
                            self.$router.push({ path: '/' });
                        })
                }, 2000);
            }).catch(function(error) {
                self.serverErrorMsg = 'Der Token sind nicht korrekt';
                console.log(error);
            })
        }

        private extractGetParameterFromVueURL(parameterName) {
            var result = '';
            var tmp = Array<string>();
            var url = window.location + '';
           
            url.split("#")[1].split("?")[1].split('&')
            .forEach(function(item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) {
                    result = decodeURIComponent(tmp[1]);
                }
            });
            
            if (result === null) {
                return 'none';
            }
            return result;
        }

        private resendConfirmationToken() {
            const self = this;
            self.resendingToken = true;
            userWebservice.resendEmailConfirmationToken().then(function(response) {
                self.resendingToken = false;
            }).catch(function(error) {
                console.log(error);
            })
        }
    }
</script>

<style scoped>
.box-title {
    color: #333;
    font-size: 30px;
}

figure.dashboard {
    margin: auto; 
    padding-top: 20px
}

.rounded {
    border-radius: 5px;
}
</style>

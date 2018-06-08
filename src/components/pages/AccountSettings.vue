<template>
    <div class="columns is-mobile is-tablet">
        <div class="column is-10 is-offset-1">

            <!-- Start of Change Email  -->
            <b-collapse class="card" :open.sync="isEmailOpen" >
                <div slot="trigger" class="card-header" >
                    <p class="card-header-title">
                        E-Mail
                    </p>
                    <a class="card-header-icon">
                        <b-icon :icon="isEmailOpen ? 'menu-down' : 'menu-right'"  type="is-dark"></b-icon>
                    </a>
                </div>
                <div class="card-content">
                    <div class="content">

                        <div class="control is-horizontal input-group">
                          <div class="control-label">
                            <label class="label">Aktuelle E-Mail Adresse</label>
                          </div>
                          <div class="control is-fullwidth">
                            <input :disabled="true" class="input" required v-model.lazy="currentUser.email" type="email">
                          </div>
                        </div>

                        <div class="control is-horizontal input-group">
                          <div class="control-label">
                            <label class="label">Neue E-Mail Adresse</label>
                          </div>
                          <div class="control is-fullwidth">
                            <input class="input" required v-model.lazy="user.new_email" type="email">
                          </div>
                        </div>

                        <div class="control is-horizontal input-group">
                          <div class="control-label">
                            <label class="label">E-Mail Adresse Bestätigung</label>
                          </div>
                          <div class="control is-fullwidth">
                            <input class="input" required v-model.lazy="user.email_confirmation" type="email">
                          </div>
                        </div>

                        <div class="control is-horizontal input-group">
                          <div class="control-label">
                            <h4 class="help is-danger">&nbsp;{{changeEmailErrorMsg}}</h4>
                          </div>
                        </div>

                        <div class="control is-horizontal input-group">
                            <p class="control">
                                <a v-on:click="changeEmail()" name="button" type="button" class="button is-success">Ändern&nbsp;&nbsp;
                                    <span class="icon">
                                        <img v-show='updatingEmail' src="img/icons/loaders/spinner.gif"/>
                                    </span>
                                </a>
                              
                            </p>
                        </div>
                      </div>
                </div>
            </b-collapse>
            <!-- End of Change Email -->
            <br/>
              <!-- Start of Change Password  -->

              <b-collapse class="card" :open.sync="isPasswordOpen" >
                  <div slot="trigger" class="card-header" >
                      <p class="card-header-title">
                          Passwort
                      </p>
                      <a class="card-header-icon">
                          <b-icon :icon="isPasswordOpen ? 'menu-down' : 'menu-right'"  type="is-dark"></b-icon>
                      </a>
                  </div>
                  <div class="card-content">
                      <div class="content">

                          <div class="control is-horizontal input-group">
                            <div class="control-label">
                              <label class="label">Aktuelles Passwort</label>
                            </div>
                            <div class="control is-fullwidth">
                              <input name="password" class="input" required v-model.lazy="user.password" type="password">
                            </div>
                          </div>

                          <div class="control is-horizontal input-group">
                            <div class="control-label">
                              <label class="label">Neues Passwort</label>
                            </div>
                            <div class="control is-fullwidth">
                              <input name="new_password" class="input" required v-model.lazy="user.new_password" type="password">
                            </div>
                          </div>

                          <div class="control is-horizontal input-group">
                            <div class="control-label">
                              <label class="label">Passwort Bestätigung</label>
                            </div>
                            <div class="control is-fullwidth">
                              <input name="password_confirmation" class="input" required v-model.lazy="user.password_confirmation" type="password">
                            </div>
                          </div>


                          <div class="control is-horizontal input-group">
                            <div class="control-label">

                              <h4 class="help is-danger">&nbsp;{{changePasswordErrorMsg}}</h4>
                            </div>
                          </div>

                          <div class="control is-horizontal input-group">
                            <div class="control-label">
                              <!--spacer-->
                            </div>
                            <div class="control is-horizontal input-group">
                              <p class="control">
                                <a v-on:click="changePassword()" name="button" type="button" class="button is-success">Ändern&nbsp;&nbsp;
                                    <span class="icon">
                                        <img v-show='updatingPasswprd' src="img/icons/loaders/spinner.gif"/>
                                    </span>
                                </a>
                              </p>

                            </div>
                          </div>

                      </div>
                  </div>
              </b-collapse>

              <!-- End of Change Password -->
            <br/>
              <!-- Start of Change Name  -->

              <b-collapse class="card" :open.sync="isNameOpen" >
                  <div slot="trigger" class="card-header" >
                      <p class="card-header-title">
                          Infos
                      </p>
                      <a class="card-header-icon">
                          <b-icon :icon="isNameOpen ? 'menu-down' : 'menu-right'"  type="is-dark"></b-icon>
                      </a>
                  </div>
                  <div class="card-content">
                      <div class="content">

                        <div class="control is-horizontal input-group">
                          <div class="control-label">
                            <label class="label"> Vorname</label>
                          </div>
                          <div class="control is-fullwidth">
                            <input class="input" required v-model.lazy="user.firstname" type="text">
                          </div>
                        </div>


                        <div class="control is-horizontal input-group">
                          <div class="control-label">
                            <label class="label"> Nachname</label>
                          </div>
                          <div class="control is-fullwidth">
                            <input class="input" required v-model.lazy="user.lastname" type="text">
                          </div>
                        </div>

                        <div class="control is-horizontal">
                            <div class="control-label">
                                <label class="label">Adresse</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input type="text" class="input" required v-model.lazy="user.address">
                            </div>
                        </div>

                        <div class="control is-horizontal">
                            <div class="control-label">
                                <label class="label">Zusätzliche Adresse</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input type="text" class="input" required v-model.lazy="user.address_Addition">
                            </div>
                        </div>

                        <div class="control is-horizontal">
                            <div class="control-label">
                                <label class="label">PLZ</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input type="text" class="input" required v-model.lazy="user.postcode">
                            </div>
                        </div>

                        <div class="control is-horizontal">
                            <div class="control-label">
                                <label class="label">Stadt</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input type="text" class="input" required v-model.lazy="user.city">
                            </div>
                        </div>

                        <div class="control is-horizontal">
                            <div class="control-label">
                                <label class="label">Land</label>
                            </div>
                            <div class="control is-fullwidth">
                                <select v-model.lazy="user.country" class="input" required >
                                    <option value="">Bitte wählen
                                    </option>
                                    <option value="Switzerland">Schweiz</option>
                                    <option value="Germany">Deutschland</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="France">France</option>
                                    <option value="Italy">Italy</option>
                                </select>
                            </div>
                        </div>

                        <div class="control is-horizontal">
                          <div class="control-label">

                            <h4 class="help is-danger">&nbsp;{{changeNameErrorMsg}}</h4>
                          </div>
                        </div>

                        

                      <div class="control is-horizontal">
                        <div class="control-label">
                        </div>
                        <div class="control is-horizontal">
                          <p class="control">
                            <a v-on:click="changeName()" name="button" type="button" class="button is-success">Ändern&nbsp;&nbsp;
                                <span class="icon">
                                    <img v-show='updatingNameAndAddress' src="img/icons/loaders/spinner.gif"/>
                                </span>

                            </a>
                          </p>
                        </div>
                      </div>

                      </div>
                  </div>
              </b-collapse>
              <br/>
              <br/>
          </div>
      </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Getter } from 'vuex-class'

    import { User } from '../../models/user';
    import { userWebservice } from '../../webservices/user' 

    @Component({
        name:'AccountSettings',
        components: {

        }
    })

    export default class AccountSettings extends Vue {

        protected  changeEmailErrorMsg: string = ''
        protected  changePasswordErrorMsg: string = ''
        protected  changeNameErrorMsg: string = ''

        protected isEmailOpen: boolean = false
        protected isPasswordOpen: boolean = false
        protected isNameOpen: boolean = false

        protected updatingEmail: boolean = false
        protected updatingNameAndAddress: boolean = false
        protected updatingPasswprd: boolean = false

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

        @Getter('account/currentUser') currentUser
        
        // Mounted is called initially
        mounted() {
            // deep copy the current user object
            this.user = JSON.parse(JSON.stringify(this.currentUser));
        }

        changeName() {
            var self = this;
            if (this.user.firstname == '' || this.user.lastname == '') {
                this.changeNameErrorMsg = "Bitte einen Namen eingeben";
                return false;
            } else if (this.user.firstname.length < 2 || this.user.lastname.length < 2) {
                this.changeNameErrorMsg = "Der Vorname/Nachname muss mindestens drei Zeichen lang sein";
                return false;
            }

            this.updatingNameAndAddress = true;

            // Update to firstname lastname
            userWebservice.changeNameAndAddress(this.user).then( function (response) {
                self.updatingNameAndAddress = false; 
                self.updateUserInfo();                
            })
        }

        changePassword() {
            if (this.user.password == '' || this.user.new_password == '' || this.user.password_confirmation == '') {
                this.changePasswordErrorMsg = "Bitte alle Felder ausfüllen";
            return false;
            } else if (this.user.new_password.length < 6) {
                this.changePasswordErrorMsg = "Das Passwort muss mindestens 6 Zeichen lang sein"
            return false;
            } else if (this.user.new_password != this.user.password_confirmation) {
                this.changePasswordErrorMsg = "Die Passwörter sind nicht identisch";
            return false;
            }

            var self = this;
            this.updatingPasswprd = true;
            

            userWebservice.changePassword(this.user.password,this.user.password_confirmation).then( function (response) {
                self.updatingPasswprd = false;
                
                self.user.password = '';
                self.user.new_password = '';
                self.user.password_confirmation = '';
                self.changePasswordErrorMsg = '';
                
            }).catch(function(error) {
                self.updatingPasswprd = false;
                
                self.changePasswordErrorMsg = error.response.data.message
            });

        }

        changeEmail() {
            if (this.user.new_email == '' || this.user.email_confirmation == '') {
                this.changeEmailErrorMsg = "Bitte alle Felder ausfüllen";
                return false;
            } else if (!this.validateEmail(this.user.new_email)) {
                this.changeEmailErrorMsg = "Die eingegebene E-Mail Adresse ist ungültig";
                return false;
            } else if (this.user.new_email != this.user.email_confirmation) {
                this.changeEmailErrorMsg = "Die E-Mail Adresse sind nicht identisch";
                return false;
            }

            var self = this;
            this.updatingEmail = true;
            

            userWebservice.changeEmail(this.user.new_email).then( function (response) {
                self.updatingEmail = false;
                
                self.user.new_email = '';
                self.user.email_confirmation = '';
                self.updateUserInfo();

                self.$toast.open({
                    duration: 5000,
                    message: 'Bitte bestätigen Sie Ihre E-Mail-Adresse. Wir haben eine Bestätigungs-E-Mail an Ihre neue E-Mail gesendet!',
                    type: 'is-success'
                    })
            }).catch(function(error) {
                self.updatingEmail = false;
                
                self.changeEmailErrorMsg = error.response.data.message
            });
        }

        validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email.toLowerCase());
        }

        updateUserInfo() {
            let self = this;
            userWebservice.getUserInfo().then(function (response) {
                self.$store.commit('account/setCurrentUser', response.data)
            })
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-group {
    margin-bottom: 10px;
}
</style>
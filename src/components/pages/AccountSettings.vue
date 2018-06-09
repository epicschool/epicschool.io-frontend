<template>
    <div class="columns is-mobile is-tablet">
        <div class="column is-8-widescreen is-offset-2-widescreen is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet is-12-mobile">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-12">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-gray">
                                <div class="content">

                                    <div class="control is-horizontal input-group">
                                    <div class="control-label">
                                        <label class="label">Current E-Mail address</label>
                                    </div>
                                    <div class="control is-fullwidth">
                                        <input :disabled="true" class="input" required v-model.lazy="currentUser.email" type="email">
                                    </div>
                                    </div>

                                    <div class="control is-horizontal input-group">
                                    <div class="control-label">
                                        <label class="label">New E-Mail address</label>
                                    </div>
                                    <div class="control is-fullwidth">
                                        <input class="input" required v-model.lazy="user.new_email" type="email">
                                    </div>
                                    </div>

                                    <div class="control is-horizontal input-group">
                                    <div class="control-label">
                                        <label class="label">Confirm E-Mail address</label>
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
                                            <a v-on:click="changeEmail()" name="button" type="button" class="button is-fullwidth is-success">Update&nbsp;&nbsp;
                                                <span class="icon">
                                                    <img v-show='updatingEmail' src="img/loaders/spinner.gif"/>
                                                </span>
                                            </a>
                                        
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article class="tile is-child notification is-gray">
                                <div class="content">

                                    <div class="control is-horizontal input-group">
                                        <div class="control-label">
                                        <label class="label">Current Password</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                        <input name="password" class="input" required v-model.lazy="user.password" type="password">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal input-group">
                                        <div class="control-label">
                                        <label class="label">New Password</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                        <input name="new_password" class="input" required v-model.lazy="user.new_password" type="password">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal input-group">
                                        <div class="control-label">
                                        <label class="label">Confirm Password</label>
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
                                            <a v-on:click="changePassword()" name="button" type="button" class="button is-fullwidth is-success">Update&nbsp;&nbsp;
                                                <span class="icon">
                                                    <img v-show='updatingPasswprd' src="img/loaders/spinner.gif"/>
                                                </span>
                                            </a>
                                        </p>

                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-gray">
                                <div class="content">

                                    <div class="control is-horizontal input-group">
                                        <div class="control-label">
                                            <label class="label">Firstname</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <input class="input" required v-model.lazy="user.firstname" type="text">
                                        </div>
                                    </div>


                                    <div class="control is-horizontal input-group">
                                        <div class="control-label">
                                            <label class="label">Lastname</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <input class="input" required v-model.lazy="user.lastname" type="text">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal">
                                        <div class="control-label">
                                            <label class="label">address</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <input type="text" class="input" required v-model.lazy="user.address">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal">
                                        <div class="control-label">
                                            <label class="label">Additional address</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <input type="text" class="input" required v-model.lazy="user.address_Addition">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal">
                                        <div class="control-label">
                                            <label class="label">Postal code</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <input type="text" class="input" required v-model.lazy="user.postcode">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal">
                                        <div class="control-label">
                                            <label class="label">City</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <input type="text" class="input" required v-model.lazy="user.city">
                                        </div>
                                    </div>

                                    <div class="control is-horizontal">
                                        <div class="control-label">
                                            <label class="label">Country</label>
                                        </div>
                                        <div class="control is-fullwidth">
                                            <select v-model.lazy="user.country" :required="true" class="input" >
                                                <option value="" >Please Select </option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Germany">Germany</option>
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
                                            <a v-on:click="changeName()" name="button" type="button" class="button is-fullwidth is-success">Update&nbsp;&nbsp;
                                                <span class="icon">
                                                    <img v-show='updatingNameAndAddress' src="img/loaders/spinner.gif"/>
                                                </span>
                                            </a>
                                        </p>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Getter } from 'vuex-class'

    import { User } from '../../models/user';
    import { userWebservice } from '../../webservices/user' 
    import toast from 'buefy'

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
            // this.$toast.open({
            //     duration: 5000,
            //     message: 'Ola lala',
            //     type: 'is-success'
            // })
        }

        changeName() {
            var self = this;
            if (this.user.firstname == '' || this.user.lastname == '') {
                this.changeNameErrorMsg = "Please enter firstname and lastname";
                return false;
            } else if (this.user.firstname.length < 3 || this.user.lastname.length < 3) {
                this.changeNameErrorMsg = "The firstname / lastname must be at least three characters long";
                return false;
            }

            this.updatingNameAndAddress = true;

            // Update to firstname lastname
            userWebservice.changeNameAndAddress(this.user).then( function (response) {
                self.updatingNameAndAddress = false; 
                
                self.$toast.open({
                    duration: 5000,
                    message: 'Personal info changed successfully!',
                    type: 'is-success'
                })
                self.updateUserInfo();                
            })
        }

        changePassword() {
            if (this.user.password == '' || this.user.new_password == '' || this.user.password_confirmation == '' || this.user.password == null || this.user.new_password == null || this.user.password_confirmation == null) {
                this.changePasswordErrorMsg = "Please fill in all fields";
            return false;
            } else if (this.user.new_password.length < 8) {
                this.changePasswordErrorMsg = "The password must be at least 8 characters long"
            return false;
            } else if (this.user.new_password != this.user.password_confirmation) {
                this.changePasswordErrorMsg = "The passwords are not identical";
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

                self.$toast.open({
                    duration: 5000,
                    message: 'Password changed successfully!',
                    type: 'is-success'
                })
                
            }).catch(function(error) {
                self.updatingPasswprd = false;
                
                self.changePasswordErrorMsg = error.response.data.message
            });

        }

        changeEmail() {
            if (this.user.new_email == '' || this.user.email_confirmation == '' || this.user.new_email == null || this.user.email_confirmation == null) {
                this.changeEmailErrorMsg = "Please fill in all fields";
                return false;
            } else if (!this.validateEmail(this.user.new_email)) {
                this.changeEmailErrorMsg = "Please enter a valid E-mail address";
                return false;
            } else if (this.user.new_email != this.user.email_confirmation) {
                this.changeEmailErrorMsg = "The E-mails are not identical";
                return false;
            }

            var self = this;
            this.updatingEmail = true;
            

            userWebservice.changeEmail(this.user.new_email).then( function (response) {
                self.updatingEmail = false;
                self.changeEmailErrorMsg = '';
                self.user.new_email = '';
                self.user.email_confirmation = '';
                self.updateUserInfo();

                self.$toast.open({
                        duration: 5000,
                        message: 'E-Mail changed successfully! <br/>Please check your e-mail address. We have sent a confirmation e-mail to your new e-mail!',
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
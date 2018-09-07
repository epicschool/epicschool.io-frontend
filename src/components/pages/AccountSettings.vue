<template>
    <div class="columns is-mobile is-tablet">
        <div class="column notification is-gunmetal is-6-widescreen is-offset-3-widescreen is-6-desktop is-offset-3-desktop is-10-tablet is-offset-1-tablet is-12-mobile">
           
            <div class="tile is-parent notification is-gunmetal">
                <article class="tile is-child notification is-light-gray">
                    <div class="content">

                        <div class="control is-horizontal input-group">
                            <div class="control-label">
                                <label class="label">FIRST NAME</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input class="input" required v-model.lazy="user.firstname" type="text">
                            </div>
                        </div>

                        <div class="control is-horizontal input-group">
                            <div class="control-label">
                                <label class="label">LAST NAME</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input class="input" required v-model.lazy="user.lastname" type="text">
                            </div>
                        </div>

                        <div class="control is-horizontal input-group">
                            <div class="control-label">
                                <label class="label">EMAIL</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input class="input" required v-model.lazy="user.email" type="email">
                            </div>
                        </div>

                        
                        <div class="control is-horizontal input-group">
                            <div class="control-label">
                            <label class="label">CURRENT PASSWORD</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input name="password" class="input" required v-model.lazy="user.password" type="password">
                            </div>
                        </div>
                        
                        <div v-if="changePassword == false" class="control is-horizontal input-group">
                            <span v-on:click="showNewPasswordField()" ><label class="label"><a class="on-hover-show-underline">Change Password?</a></label>
                            </span>
          
                        </div>

                        <div v-if="changePassword == true" class="control is-horizontal input-group">
                            <div class="control-label">
                                <label class="label">NEW PASSWORD</label>
                            </div>
                            <div class="control is-fullwidth">
                                <input name="new_password" class="input" required v-model.lazy="user.new_password" type="password">
                            </div>
                        </div>
                                    
                        <div class="control is-horizontal input-group">
                            <div class="control-label">
                                <h4 class="help is-danger">&nbsp;{{updatingUserInfoErrorMsg}}</h4>
                            </div>
                        </div>
                        <hr class="hr-line">
                        <div class="control is-horizontal input-group">
                            <p class="control">
                                <router-link  class="button is-medium is-gray" to="/">Cancel</router-link>&nbsp;
                                <a v-on:click="save()" name="button" type="button" class="button is-medium is-success">Save&nbsp;&nbsp;
                                    <span v-show='updatingUserInfo' class="icon">
                                        <img src="img/loaders/spinner.gif"/>
                                    </span>
                                
                                </a>
                                
                            </p>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    import { User } from '../../models/user';
    import { userWebservice } from '../../webservices/user';
    import toast from 'buefy';

    @Component({
        name: 'AccountSettings',
        components: {

        },
    })

    export default class AccountSettings extends Vue {

        protected updatingUserInfoErrorMsg: string = '';
        protected changePassword: boolean = false;
        protected updatingUserInfo: boolean = false;

        protected user: User = {} as User;
        protected userOld: User = {} as User;

        @Getter('account/currentUser') private currentUser;
        // Mounted is called initially
        private mounted() {
            // deep copy the current user object
            this.user = JSON.parse(JSON.stringify(this.currentUser));
            this.user.password = '';
            this.user.new_password = '';
            this.userOld = JSON.parse(JSON.stringify(this.user));
        }

        private showNewPasswordField() {
            this.changePassword = true;
        }

        private save() {
            const self = this;
            // tslint:disable-next-line:max-line-length
            if (this.user.firstname !== this.userOld.firstname || this.user.lastname !== this.userOld.lastname || this.user.email !== this.userOld.email || this.user.new_password !== '') {
                if (this.user.password === '') {
                        this.updatingUserInfoErrorMsg = 'Please enter the current password';
                        return false;
                } else if (this.user.firstname === '' || this.user.lastname === '') {
                    this.updatingUserInfoErrorMsg = 'Please enter first name and last name';
                    return false;
                } else if (this.user.firstname.length < 2 || this.user.lastname.length < 2) {
                    this.updatingUserInfoErrorMsg = 'The firstname / lastname must be at least two characters long';
                    return false;
                } else if (!this.validateEmail(this.user.email)) {
                    this.updatingUserInfoErrorMsg = 'Please enter a valid E-Mail address';
                    return false;
                } else if (this.changePassword && this.user.new_password !== '' ) {
                    if (this.user.password === '') {
                        this.updatingUserInfoErrorMsg = 'Please enter the current password';
                        return false;
                    } else if (this.user.password.length < 8) {
                        this.updatingUserInfoErrorMsg = 'Current password is incorrect!';
                        return false;
                    } else if (this.user.new_password.length < 8) {
                        this.updatingUserInfoErrorMsg = 'The password must be at least 8 characters long';
                        return false;
                    }
                }
            } else {
                // return false because there is no change
                self.$toast.open({
                    duration: 3000,
                    message: 'No changes detected!',
                    type: 'is-warning',
                });
                return false;
            }


            this.updatingUserInfo = true;

            // Update
            userWebservice.changeAccountInfo(this.user).then(function(response) {
                self.updatingUserInfo = false;
                self.updatingUserInfoErrorMsg = '';
                self.$toast.open({
                    duration: 5000,
                    message: 'Changes saved successfully!',
                    type: 'is-success',
                });
                self.user.password = '';
                self.user.new_password = '';
                self.updateUserInfo();
                self.userOld = JSON.parse(JSON.stringify(self.user));
            }).catch(function(error) {
                self.updatingUserInfo = false;
                self.updatingUserInfoErrorMsg = error.response.data.message;
            });

        }

        private validateEmail(email) {
            // tslint:disable-next-line:max-line-length
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email.toLowerCase());
        }

        private updateUserInfo() {
            const self = this;
            userWebservice.getUserInfo().then(function(response) {
                self.$store.commit('account/setCurrentUser', response.data);
            });
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-group {
    margin-bottom: 10px;
}
.input {
    background-color: #2b2d31 !important; 
    color:azure; 
    font-size: 1.1rem;
    border-color: #2b2d31;
}
.input:hover {
   border-color: #932290; 
}

.label {
    color:azure; 
      font-size: 0.9rem;
      margin-bottom: 2px;
}
.on-hover-show-underline {
        text-decoration: none !important;
}
.on-hover-show-underline:hover {
        text-decoration: underline !important;
}
hr.hr-line {
    background-color: #464646;
    color: #464646;
    border-color: #464646;
}
</style>
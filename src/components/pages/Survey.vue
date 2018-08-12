<template>
    <div class="columns is-mobile is-tablet">
        <div class="column notification is-gunmetal is-6-widescreen is-offset-3-widescreen is-6-desktop is-offset-3-desktop is-10-tablet is-offset-1-tablet is-12-mobile">
           
            <div class="tile is-parent notification is-gunmetal ">
                <article class="tile is-child notification is-light-gray">
                    <div class="content">

                        <div class="control is-horizontal input-group">
                            <div class="control-label">
                                <label class="label">Survey</label>
                            </div>

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
        name: 'Survey',
        components: {

        },
    })

    export default class Survey extends Vue {

        @Getter('account/currentUser') private currentUser;

        // Mounted is called initially
        // mounted() {

        // }

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

.is-full-height{
    height: 80vh;
}
</style>
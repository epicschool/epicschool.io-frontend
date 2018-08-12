<template>
    <div class="hero-foot">
        <div class="container">
            <div class="tabs is-centered">
                <ul>
                    <li>
                        <a :href="APP_BASE_URL"><b>(▀̿Ĺ̯▀̿ ̿) ©2018 Epicschool </b></a>
                    </li>
                    <li>
                        <router-link  class="navbar-item" to="/PrivacyPolicy">Privacy Policy</router-link>
                    </li>
                    <li>
                        <router-link  class="navbar-item" to="/TermsOfService">Terms of Service</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: 'Footer',
    })
    export default class Footer extends Vue {

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

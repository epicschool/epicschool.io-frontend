<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-vcentered">
                <div class="column is-5">
                    <figure class="image is-4by3">
                        <img src="img/letsTalk.jpg" alt="Description">
                    </figure>
                </div>
                <div class="column is-6 is-offset-1">
                    <h1 class="title is-2">
                        Contact us
                    </h1>
                    <h2 class="subtitle is-4">
                        Thanks for visiting our website. You can reach us through following channels
                    </h2>
                    <br>
                    <p class="has-text-centered">
                        <a class="button is-medium is-info is-outlined">
                           Discord
                        </a>
                        &nbsp;
                        <!-- <a href="mailto:winston@epicschool.io" class="button is-medium is-info is-outlined">
                           winston@epicschool.io
                        </a> -->
                        <a href="mailto:n4e.majed@gmail.com" class="button is-medium is-info is-outlined">
                          n4e.majed@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContactUs extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

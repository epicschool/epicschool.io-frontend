<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-vcentered">
                <div class="column is-5">
                    <figure class="image is-4by3">
                        <img src="https://picsum.photos/800/600/?random" alt="Description">
                    </figure>
                </div>
                <div class="column is-6 is-offset-1">
                    <h1 class="title is-2">
                        Courses
                    </h1>
                    <h2 class="subtitle is-4">
                       List of Courses 
                    </h2>
                    <br>
                    <p class="has-text-centered">
                        <a class="button is-medium is-info is-outlined">
                        Learn more
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
export default class Courses extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-multiline is-vcentered">
                <div class="column is-8">
                    <figure class="image is-4by3">
                        <img src="img/sci_fi_classroom_2.jpg" alt="Description">
                    </figure>
                </div>
                <div class="column is-3 is-offset-1">
                    <div class="title is-3">
                        Welcome to Epic School
                    </div>
                    <div class="subtitle is-4">
                      Epicschool is about learning epic things
                       
                    </div>
                    <br>
                    <p class="has-text-centered">
                        <!-- <router-link  class="button is-medium is-info is-outlined" to="/"><span >Learn more</span></router-link> -->
                        <router-link  class="button is-medium is-success is-outlined" to="/Courses"><span >Check out our Courses</span></router-link>
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

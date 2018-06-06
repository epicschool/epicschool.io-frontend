<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-vcentered">
                <div class="column is-4-fullhd is-6-widescreen is-6-desktop is-6-tablet is-12-mobile ">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img  src="../../assets/courses/php.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="../../assets/courses/code.jpg" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">basics of PHP</p>
                                    <p class="subtitle is-6">programming</p>
                                </div>
                            </div>

                            <div class="content height-150">
                                 PHP is one of the most widely used technologies on the internet today, supporting many large projects such as WordPress, Drupal, Wikipedia and Facebook.
                                <br>
                                
                            </div>
                        </div>
                        <footer class="card-footer"> 
                            <a href="#" class="button card-footer-item is-large is-success">Enroll NOW</a>
                        </footer>
                    </div>

                </div>

                <div class="column is-4-fullhd is-6-widescreen is-6-desktop is-6-tablet is-12-mobile ">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img  src="../../assets/courses/webdesign.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="../../assets/courses/code.jpg" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">basics of PHP</p>
                                    <p class="subtitle is-6">programming</p>
                                </div>
                            </div>

                            <div class="content height-150">
                                Learn to Code HTML & CSS is an interactive way
                                <br>
                                
                            </div>
                        </div>
                        <footer class="card-footer"> 
                            <a href="#" class="button card-footer-item is-large is-success">Enroll NOW</a>
                        </footer>
                    </div>
                </div>

                 <div class="column is-4-fullhd is-6-widescreen is-6-desktop is-6-tablet is-12-mobile ">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img  src="../../assets/courses/3d.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="../../assets/courses/3d.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">basics of PHP</p>
                                    <p class="subtitle is-6">programming</p>
                                </div>
                            </div>

                            <div class="content height-150">
                                Learn to Code HTML & CSS is an interactive way
                                <br>
                                
                            </div>
                        </div>
                        <footer class="card-footer"> 
                            <a href="#" class="button card-footer-item is-large is-success">Enroll NOW</a>
                        </footer>
                    </div>
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
.height-150 {
    height: 70px;
}
</style>

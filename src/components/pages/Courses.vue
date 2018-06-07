<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-multiline is-vcentered">
               
                <div v-for="course in courses" :key="course.id" class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen  is-4-fullhd">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <!-- <img  src="../../assets/courses/webdesign.jpg" alt="Placeholder image"> -->
                                <img  :src="course.imagePath" alt="Placeholder image">
                                
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img :src="course.categoryImagePath" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{course.title}}</p>
                                    <p class="subtitle is-6">{{course.categoryTitle}}</p>
                                </div>
                            </div>

                            <div class="content card-description">
                                 {{course.description}}
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
        protected courses = [
            {
                id: 1,
                title: 'PHP',
                description: 'PHP is one of the most widely used technologies on the internet today, supporting many large projects such as WordPress, Drupal, Wikipedia and Facebook.',
                categoryTitle: 'Programming',
                imagePath: 'img/courses/php.png',
                categoryImagePath: 'img/courses/code.jpg',
            },
            {
                id: 2,
                title: 'HTML & CSS',
                description: 'HTML and CSS are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.',
                categoryTitle: 'Programming',
                imagePath: 'img/courses/webdesign.jpg',
                categoryImagePath: 'img/courses/code.jpg',
            },
            {
                id: 3,
                title: '3D Modeling with Blender',
                description: '3D modeling is the use of software to create a virtual three-dimensional model of some physical object. 3D modeling is used in many different industries, including VR, video games, 3D printing, TV, motion pictures and etc',
                categoryTitle: 'Modeling and Animation',
                imagePath: 'img/courses/3d.png',
                categoryImagePath: 'img/courses/3d.png',
            },
            {
                id: 4,
                title: 'Laravel',
                description: 'Laravel fixed',
                categoryTitle: 'Web Programming',
                imagePath: 'img/courses/laravel.jpg',
                categoryImagePath: 'img/courses/code.jpg',
            },
        ];


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-description {
    height: 125px;
    text-align: left;
    // overflow-y: scroll;
}
</style>

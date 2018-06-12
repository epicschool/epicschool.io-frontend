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
                            <!-- <a href="#" class="button card-footer-item is-large is-success">Enroll NOW</a> -->
                             <router-link class="button card-footer-item is-large is-success" to="/contactUs">Enroll NOW</router-link>
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
                title: 'HTML & CSS',
                description: 'HTML and CSS are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.',
                categoryTitle: 'Web Development',
                imagePath: 'img/courses/webdesign.jpg',
                categoryImagePath: 'img/courses/code.jpg',
            },

            {
                id: 2,
                title: 'Javascript',
                description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web',
                categoryTitle: 'Web Development',
                imagePath: 'img/courses/javascript.jpg',
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
                title: 'PHP',
                description: 'PHP is one of the most widely used technologies on the internet today, supporting many large projects such as WordPress, Drupal, Wikipedia and Facebook.',
                categoryTitle: 'Programming',
                imagePath: 'img/courses/php.png',
                categoryImagePath: 'img/courses/code.jpg',
            },

            {
                id: 5,
                title: 'Laravel',
                description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.',
                categoryTitle: 'Web Development',
                imagePath: 'img/courses/laravel.jpg',
                categoryImagePath: 'img/courses/code.jpg',
            },

            {
                id: 6,
                title: 'Game Development',
                description: 'Video game development is the process of creating a video game. The effort is undertaken by a game developer, who may range from a single person to an international team dispersed across the globe.',
                categoryTitle: 'Game Development',
                imagePath: 'img/courses/gamedevelopment.jpg',
                categoryImagePath: 'img/courses/code.jpg',
            },

            {
                id: 7,
                title: 'Unity Game Engine',
                description: 'Unity is a cross-platform game engine developed by Unity Technologies, which is primarily used to develop both three-dimensional and two-dimensional video games and simulations for computers, consoles, and mobile devices.',
                categoryTitle: 'Game Development',
                imagePath: 'img/courses/unity_game_engine.jpg',
                categoryImagePath: 'img/courses/code.jpg',
            },

            // {
            //     id: 8,
            //     title: 'Vue',
            //     description: 'Vue.js is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is made easy with Vue because it is designed to be incrementally adoptable.',
            //     categoryTitle: 'Web Development',
            //     imagePath: 'img/courses/vue2.jpeg',
            //     categoryImagePath: 'img/courses/code.jpg',
            // },



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

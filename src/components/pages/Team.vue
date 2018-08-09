<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-vcentered">
                <div v-for="teamMember in teamMembers" :key="teamMember.id"  class="column is-6 ">
                    
                    <figure class="image" v-on:mouseover="showOverlay()">
                        <img :src="teamMember.imagePath" alt="Placeholder image">
                    </figure>    

                    <div class="animated" id="fadeBoi">
                        <div class="overlay" :style="teamMember.overlayBackgroundColor">
                            <div class="title is-2">
                            {{teamMember.name}}                        
                            </div>

                            <div class="subtitle is-4">
                                <!-- Rank : {{teamMember.rank}} -->                        
                            </div>

                            <div class="subtitle is-6 team-description">
                                {{teamMember.description}}
                            </div>

                            <br>

                            <p class="has-text-centered">
                                <a class="button is-info is-outlined" :href="teamMember.githubProfileLink" target="blank">
                                    <i class="fa fa-github fa-2x"></i>
                                    <!-- <font-awesome-icon :icon="['far', 'spinner']" /> -->
                                </a>
                                &nbsp;
                                <a class="button is-info is-outlined">
                                    Learn more
                                </a>
                            </p>   

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
@Component({
  components: {
    // FontAwesomeIcon,
  },
})
export default class Team extends Vue {

        protected teamMembers = [
            {
                id: 1,
                name: 'Majed',
                rank: 'Junin',
                description: 'A.k.a Sensei, Full Stack Software Developer',
                imagePath: 'img/team/transparentSensei.png',
                githubProfileLink: 'https://github.com/m16',
                overlayBackgroundColor: 'background-color:#4286f4;',
            },
            {
                id: 2,
                name: 'Mark',
                rank: 'Genin',
                description: 'Student, often referred to by others as "noob"',
                imagePath: 'img/team/transparentNoob.png',
                githubProfileLink: 'https://github.com/tenderribs',
                overlayBackgroundColor: 'background-color:#f44141;',
            },
        ];
        showOverlay(){
            console.log('function activated')
            let status = "fadeIn"
            var element = document.getElementById("fadeBoi")
            if (element!.classList.contains(status)) {
                element!.classList.remove(status)       
            } else {
                element!.classList.add(status)    
            }
            console.log(element)
        }
}
        

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.team-description {
    height: 35px;
    // text-align: left;
    // overflow-y: scroll;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
//   position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  width: 100%;
//   opacity: 0;
//   transition: .5s ease;
}
.text {
  color: white;
  font-size: 20px;
//   position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
// .column:hover .overlay {
//   opacity: 0.7;
// }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-vcentered">
                <div v-for="teamMember in teamMembers" :key="teamMember.id"  class="column is-3 ">
           
                            <figure class="image is-4by3">
                                <img :src="teamMember.imagePath" alt="Placeholder image">
                            </figure>
            
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
                    <p class="has-text-centered">
                 
                    </p>
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
                description: 'Full Stack Software Developer',
                imagePath: 'img/team/majed.png',
                githubProfileLink:'https://github.com/m16',
            },
            {
                id: 2,
                name: 'Mark',
                rank: 'Genin',
                description: 'Student & Technology Geek',
                imagePath: 'img/team/mark.png',
                githubProfileLink:'https://github.com/tenderribs',
            },
        ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.team-description {
    height: 35px;
    // text-align: left;
    // overflow-y: scroll;
}
</style>

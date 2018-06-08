<template>
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <router-view/>
            </div>
        </div>
        <Footer/>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import  Footer  from './Footer.vue';

@Component({
  components: {
    Footer,
  },
})

export default class Auth extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <intro></intro>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Intro from '@/components/Intro.vue'; 

@Component({
  components: {
    HelloWorld,
    Intro
  },
})
export default class Home extends Vue {}
</script>

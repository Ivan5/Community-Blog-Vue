<template lang="html">
  <h1 class="text-center">{{  }}</h1>
</template>

<script>
import axios from 'axios';
import config from '@/config';

export default {
  mounted(){
    this.getArticle();
  },
  methods:{
    getArticle(){
      axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(response => {
        console.log(response);
      });
    }
  }
}
</script>

<style lang="css">
</style>

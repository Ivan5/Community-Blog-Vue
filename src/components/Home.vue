<template lang="html">
  <div class="row">
    <div class="col-sm-8 offset-2"v-for="article in articles.data" :key="article.id" v-if="articles.data">
      <Article :article="article"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/config';
import Article from '@/components/Article.vue';
export default {
  mounted(){
    this.getArticles();
  },
  components:{
    Article
  },
  data(){
    return {
      articles: {}
    }
  },
  methods:{
    getArticles(){
      axios.get(`${config.apiUrl}/articles`).then(response => {
        this.articles = response.data.data;
      })
    }
  }
}
</script>

<style lang="css">
</style>

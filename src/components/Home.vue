<template lang="html">
  <div class="mt-4">
    <div class="d-flex justify-content-between">
      <button @click="getPrevArticles()" class="btn btn-warning" :disable="articles.prev_page_url === null">Prev Page</button>
      <button @click="getNextArticles()" class="btn btn-warning" :disable="articles.next_page_url === null">Next Page</button>
    </div>
    <div class="row"  v-if="!loading">
        <div class="col-sm-8 offset-2" v-for="article in articles.data" :key="article.id" >
          <Article :article="article"/>
        </div>
    </div>
      <div class="loader  text-center" v-else>
        <i class="fas fa-3x fa-spin fa-spinner"></i>
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
      articles: {},
      loading:true
    }
  },
  methods:{
    getArticles(url = `${config.apiUrl}/articles`){
      this.loading = true;
      axios.get(url).then(response => {
        this.loading = false;
        this.articles = response.data.data;
      })
    },
    getNextArticles(){
      this.getArticles(this.articles.next_page_url);
    },
    getPrevArticles(){
      this.getNextArticles(this.articles.prev_page_url)
    }
  }
}
</script>

<style lang="css">
.btn-warning{
  color:#fff;
}
</style>

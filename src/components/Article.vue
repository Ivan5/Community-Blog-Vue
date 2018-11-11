<template lang="html">
  <div class="card mt-4">
    <div class="card-header font-weight-bold">
      {{article.title}}
    </div>
    <div class="card-body">
      <div class="my-3" v-html="article.content.substring(0,200)"></div>
      <router-link class="btn btn-primary" :to="`/article/${article.id}`">Read more..</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:['article']
}
</script>

<style lang="css">
</style>

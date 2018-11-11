<template lang="html">
  <div class="card mt-4">
    <div class="card-header font-weight-bold">
      {{article.title}}
    </div>
    <div class="card-body">
      <p class="my-3">{{ article.content.substring(0,200) }}</p>
      <button class="btn btn-primary">Read more..</button>
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

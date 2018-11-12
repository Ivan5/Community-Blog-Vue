<template lang="html">
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <input type="text" name="" class=" mb-3 form-control" placeholder="Title">
            <wysiwyg v-model="content" />
            <div class="text-center">
              <button type="button" class="btn btn-success btn-block mt-3">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content:''
    }
  }
}
</script>

<style lang="css">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>

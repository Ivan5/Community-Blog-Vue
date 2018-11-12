<template lang="html">
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <picture-input
              ref="pictureInput"
              accept="image/jpeg,image/png"
              size="5"
              button-class="btn btn-danger"
              @change="onChange">
            </picture-input>
            <input type="text" name="" class=" mb-3 form-control" placeholder="Title">
            <wysiwyg v-model="content" />
            <div class="text-center">
              <button @click="createArticle" type="button" class="btn btn-success btn-block mt-3">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PictureInput from 'vue-picture-input'
export default {
  data(){
    return{
      content:'',
      image:null
    }
  },
  components: {
    PictureInput
  },
  methods:{
    onChange(image){
      this.image = image;
    },
    createArticle(){
      const form = new FormData();
      form.append('file', this.image);
      form.append('upload_preset','g5ziunzg');
      form.append('key','');

      axios.post('')
        .then()
        .catch();
    }
  }
}
</script>

<style lang="css">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>

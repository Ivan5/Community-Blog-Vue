<template lang="html">
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input type="text" placeholder="Username" class="form-control" v-model="name" v-bind:class="{ 'is-invalid':errors.name, 'is-valid': !errors.name && this.submited} ">
            <div class="errors" v-if="errors.name">
              <small class="text-danger" v-for="error in errors.name" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input type="text" placeholder="Emial" class="form-control" v-model="email" v-bind:class="{ 'is-invalid':errors.email, 'is-valid': !errors.name && this.submited}">
            <div class="errors" v-if="errors.email">
              <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control" v-model="password" v-bind:class="{ 'is-invalid':errors.password, 'is-valid': !errors.name && this.submited}">
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-success btn-block" @click="registerUser()" :disabled="loading"><i class="fas fa-spin fa-spinner" v-if="loading"></i>{{ loading ? '' : 'Signup'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      name:'',
      email:'',
      password:'',
      errors:{},
      submited: false,
      loading:false
    }
  },
  methods:{
    registerUser(){
      this.loading = true;
      axios.post('https://react-blog-api.bahdcasts.com/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then((response) => {
        this.loading = false;
        this.submited = true
        localStorage.setItem('auth', JSON.stringify(response.data.data))
        this.$root.auth = response.data.data;
        this.$noty.success('Successfully registerd in ')
        this.$router.push('/');
      }).catch(({response}) => {
        this.$noty.error('Ooops something went wrong')
        this.loading = false;
        this.submited = true
        this.errors = response.data
      })
    }
  }
}
</script>

<style lang="css">
</style>

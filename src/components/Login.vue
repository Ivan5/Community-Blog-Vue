<template lang="html">
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Login</h3>
          <div class="form-group">
            <input type="text" placeholder="Emial" class="form-control" v-model="email">
            <div class="errors" v-if="errors.email">
              <small class="text-danger" v-for="error in errors.email" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control" v-model="password">
            <div class="errors" v-if="errors.password">
              <small class="text-danger" v-for="error in errors.password" :key="error">{{error}}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button :disabled="loading" type="submit" class="btn btn-success btn-block" @click="loginUser()"><i class="fas fa-spin fa-spinner" v-if="loading"></i>{{ loading ? '' : 'Login'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/config'
export default {
  mounted(){
    if(localStorage.getItem('auth')){
      this.$router.push('/');
    }else{
      this.$router.push('/login');
    }

  },
  data(){
    return {
      email:'',
      password:'',
      errors: {},
      loading: false
    }
  },
  methods:{
    loginUser(){
      this.loading = true;
      axios.post(`${config.apiUrl}/auth/login`,{
        email: this.email,
        password: this.password
      }).then((response) => {
        this.loading = false;
        this.$root.auth = response.data.data
        localStorage.setItem('auth', JSON.stringify(response.data.data))
        this.$noty.success('Successfully logged in')
        this.$router.push('/');
      }).catch(({response}) => {
        this.loading = false;
        this.$noty.error('Ooops something went wrong')
        if(response.status === 401){
          this.errors = {
            email: ["These credentials do not match our records"]
          }
        }else{
          this.errors = response.data
        }

      })
    }
  }
}
</script>

<style lang="css">
</style>

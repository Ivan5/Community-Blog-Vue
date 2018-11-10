<template lang="html">
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input type="text" placeholder="Username" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Emial" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control" v-model="password">
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-success btn-block" @click="registerUser()">Signup</button>
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
      password:''
    }
  },
  methods:{
    registerUser(){
      axios.post('https://react-blog-api.bahdcasts.com/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then((response) => {
        localStorage.setItem('auth', JSON.stringify(response.data.data))
        this.$root.auth = response.data.data;

        this.$router.push('home');
      }).catch((response) => {
        //console.log(response);
      })
    }
  }
}
</script>

<style lang="css">
</style>

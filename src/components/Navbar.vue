<template lang="html">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <router-link class="navbar-brand" to="/">Community-Blog</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-if="!authUser">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item" v-if="!authUser">
        <router-link class="nav-link" to="/signup">Signup</router-link>
      </li>
      <li class="nav-item" v-if="authUser">
        <router-link class="nav-link" to="/article/create">Create New Article</router-link>
      </li>
      <li class="nav-item dropdown" v-if="authUser">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hey {{authUser.name}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" @click="logout()" href="#">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</div>
</nav>
</template>

<script>
export default {
  mounted(){
    console.log(this.$root);
  },
  computed:{
    authUser(){
      return this.$root.auth.user
    },
  },
  methods:{
    logout(){
      localStorage.removeItem('auth');
      this.$root.auth = {};
      this.$noty.success('Successfully logout')
    }
  }
}
</script>

<style lang="css">
</style>

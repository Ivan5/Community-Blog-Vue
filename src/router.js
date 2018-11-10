import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Home from '@/components/Home';
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path:'/login',
      component: Login
    },
    {
      path:'/signup',
      component: Signup
    },
    {
      path:'/home',
      component: Home
    }
  ]
})


export default router;

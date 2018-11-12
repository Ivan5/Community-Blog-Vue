import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Home from '@/components/Home';
import ShowArticle from '@/components/ShowArticle';
import CreateArticle from '@/components/CreateArticle';

Vue.use(Router)


const router = new Router({
  mode:'history',
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
      path:'/',
      component: Home
    },
    {
      path:'/article/create',
      component: CreateArticle
    },
    {
      path:'/article/:id',
      component: ShowArticle
    }
  ]
})


export default router;

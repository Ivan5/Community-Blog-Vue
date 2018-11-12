import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import VueDisqus from 'vue-disqus'
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.config.productionTip = false

Vue.use(VueNoty)
Vue.use(VueDisqus)
const authData = localStorage.getItem("auth");

new Vue({
  data:{
    auth:authData ? JSON.parse(authData) : {}
  },
  router,
  render: h => h(App),
}).$mount('#app')

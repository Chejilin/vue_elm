// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由
import router from '@/router/router'

/* axios */
import Axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,Axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注册路由
  router,
  template: '<App/>',
  components: { App }
});

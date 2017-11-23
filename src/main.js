// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router'; // 路由
import store from './store'; // vuex管理器
import * as filters from './filters'; // 全局filter
import ElementUI from 'element-ui'; // element引入
import 'element-ui/lib/theme-chalk/index.css'; // elelemtCSS
import App from './App.vue'; // 最上层组件
import 'bootstrap/dist/css/bootstrap.css'; // boostrap样式
Vue.use(ElementUI);

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

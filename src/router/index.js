import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'index', component: _import('index/index')},
    {path: '/creatPlan', name: 'creatPlan', component: _import('creatPlan/creatPlan')}
  ]
});

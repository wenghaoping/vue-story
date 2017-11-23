/**
 * Created by Admin on 2017/11/21.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);

const store = new Vuex.Store({
  mutations,
  actions,
  state: {
    totalIndex: 0,
    list: [{
      name: 'story',
      avatar: 'https://i.imgur.com/LIvj3YT.jpg',
      date: '2017年11月23日15:34',
      introduce: '请看,这是我女神'
    }]
  }
});

export default store;

/**
 * Created by Admin on 2017/11/22.
 */
import * as types from './mutation-types';

export default {
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    state.list.push(
      Object.assign({ }, plan)
    );
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  },

  // 删除某计划
  [types.GET_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};

/**
 * Created by Admin on 2017/11/22.
 */
import * as types from './mutation-types';

export default {
  savePlan ({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan ({ commit }, plan) {
    commit(types.DELETE_PLAN, plan);
  }
};

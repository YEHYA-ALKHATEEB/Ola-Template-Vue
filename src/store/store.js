import Vuex from "vuex";

import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

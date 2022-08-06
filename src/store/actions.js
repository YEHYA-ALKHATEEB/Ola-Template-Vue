//import i18n from "@/main.js";

const actions = {
  // ////////////////////////////////////////////
  // SYSTEM
  // ////////////////////////////////////////////

  setSession({ commit }, payload) {
    commit("setSession", payload);
  },
  resetState({ commit }) {
    commit("resetState");
  },
};

export default actions;

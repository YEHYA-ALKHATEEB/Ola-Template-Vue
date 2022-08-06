import { getDefaultState } from "@/store/state";

const mutations = {
  // ////////////////////////////////////////////
  // SYSTEM
  // ////////////////////////////////////////////

  setSession(state, payload) {
    state.session.token = payload.token || state.session.token;
    localStorage.setItem("token", state.session.token);
  },
  resetState(state) {
    localStorage.clear();
    const defaultState = getDefaultState();
    state.session = defaultState.session;
  },
};

export default mutations;

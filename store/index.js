import {LOGOUT} from "../services/actionTypes";
import { SET_AUTH } from "../services/mutationTypes";

export const state = () => ({
  auth: {}
})

export const getters = {
  loggedIn() {
    const { auth } = state;
    return !!(auth & auth?.secretKey)
  }
}

export const actions = {
  [LOGOUT]() {
    this.$axios.setToken(false);
    this.$cookiz.removeAll();
    // this.app.router.push('/')
  }
}

export const mutations = {
  [SET_AUTH](state, data) {
    state.auth = data;
  }
}
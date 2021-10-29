import {LOGOUT} from "../services/actionTypes";
import { SET_AUTH } from "../services/mutationTypes";

export const state = () => ({
  auth: {}
})

export const getters = {
  loggedIn(state) {
    const { auth } = state;
    return auth && !!auth.secretKey
  }
}

export const actions = {
  [LOGOUT]({state}) {
    console.log(state)
    this.$axios.setToken(false);
  }
}

export const mutations = {
  [SET_AUTH](state, data) {
    state.auth = data;
  }
}
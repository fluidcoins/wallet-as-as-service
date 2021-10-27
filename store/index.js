import {LOGOUT} from "../services/actionTypes";

export const state = () => ({
  auth: {}
})

export const getters = {
  loggedIn() {
    const { auth } = state;
    return !!(auth & !!auth?.token && !!auth?.user)
  }
}

export const actions = {
  [LOGOUT]() {
    this.$axios.setToken(false);
    this.$cookiz.removeAll();
    // this.app.router.push('/')
  }
}
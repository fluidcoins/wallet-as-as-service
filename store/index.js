import {LOGOUT, FETCH_CURRENCIES} from "../services/actionTypes";
import { SET_AUTH, SET_CURRENCIES } from "../services/mutationTypes";
import { CURRENCIES } from "../services/getterTypes"

export const state = () => ({
  auth: {},
  currencies: []
})

export const getters = {
  loggedIn(state) {
    const { auth } = state;
    return auth && !!auth.secretKey
  },
  [CURRENCIES](state) {
    const { currencies } = state

    return currencies.filter( c => !c.is_fiat )
  }
  
}

export const actions = {
  [LOGOUT]({state}) {
    this.$axios.setToken(false);
  },
  async [FETCH_CURRENCIES]({state, commit}) {
    try {
      if(state.currencies.length > 0) {
        return true
      }
      const { data } =  await this.$api.currency.all()
      const { currencies } =  data

      commit(SET_CURRENCIES, currencies)

      return true

    } catch(error) {
      const {message} = this.$utils.getAxiosErrorResponse(error);
      this.$toast.error(message);
      this.$utils.captureError(error)
      return true
    }
  }
}

export const mutations = {
  [SET_AUTH](state, data) {
    state.auth = data;
  },
  [SET_CURRENCIES](state, data) {
    state.currencies = data;
  }
}
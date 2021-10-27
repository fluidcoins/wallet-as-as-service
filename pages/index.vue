<template>
  <form class="w-84 mx-auto mt-48" @submit.prevent="handleSubmit">
    <h1 class="mb-2 text-center text-3.5xl">Login</h1>
    <p class="text-center mb-14">Login to your account</p>
    <label for="email">Email</label>
    <Input 
      id="email"
      v-model="email"
      label="email"                        
      type="email"
      :error="error"
      :v="$v.email"
    />
    <div class="mt-10"></div>
    <Button 
      type="submit" 
      label="Login"
      :invalid="!$v.$anyDirty"
      :loading='apiState === API_STATE_ENUM.PENDING'
    />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import { email, required } from "vuelidate/lib/validators"
import Input from "~/components/Input"
import Button from "~/components/Button/Button"

import {API_STATE_ENUM} from "~/services/constants.js"
import { SET_AUTH, AUTH_DATA } from "~/services/mutationTypes.js"


export default {
  components: {
    Input,
    Button
  },
  middleware({ store, redirect }) {
    const isLoggedIn = !!store.getters.loggedIn;
    if(isLoggedIn) return redirect('/home')
  },
  layout: 'auth',
  data() {
    return {
      email: "",
      apiState: API_STATE_ENUM.IDLE,
      API_STATE_ENUM,
      loading: false
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    ...mapMutations([
      SET_AUTH
    ]),
    async handleSubmit(){
      this.$v.$touch();

      if(this.$v.invalid || this.apiState === API_STATE_ENUM.PENDING) return;
      this.apiState = API_STATE_ENUM.PENDING;

      try{
        const {email, password} = this;
        const payload = {email, password};
        const { data } = await this.$api.auth.login(payload);
        const {token, user} = data;
        this.$axios.setToken(`Bearer ${token}`)
        this[SET_AUTH]({token, user})

        this.$utils.setCookie(AUTH_DATA, {token, user})

        this.apiState = API_STATE_ENUM.RESOLVED;

        const query = this.$route.query
        const path = query.redirectTo || '/home'
        if (query.redirectTo) {
          delete query.redirectTo
        }
        this.$router.push({ path, query })

      }catch(error) {
        this.apiState = API_STATE_ENUM.REJECTED;
        const {message} = this.$utils.getAxiosErrorResponse(error);
        this.$toast.error(message);
      }

    }
  },
  computed: {
    
    error() {
      return this.$v.email.$error ? 'Email is invalid' : ''
    }
  }
}
</script>

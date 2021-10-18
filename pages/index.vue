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
      :invalid="$v.$invalid"
      :loading='loading'
    />
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators"
import Input from "~/components/Input"
import Button from "~/components/Button/Button"

export default {
  components: {
    Input,
    Button
  },
  layout: 'auth',
  data() {
    return {
      email: "",
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
    handleSubmit(){
      this.$v.$touch()
    }
  },
  computed: {
    error() {
      return this.$v.email.$error ? 'Email is invalid' : ''
    }
  }
}
</script>

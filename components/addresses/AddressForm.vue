<template>
  <div class="flex flex-col items-center">
    <div class="w-3/5 flex flex-col items-center">
      <div class="text-center mb-16">
        <h3 class="text-2xl">Generate new address</h3>
        <p class="text-lg">Select the cryptocurrency and generate a new address</p>
      </div>
       <form @submit.prevent="submit">
        <div class="form-control mb-10">
          <label for="cryto">Select Crypto</label>
          <select
            id="cryto"
            v-model="$v.form.crypto.$model"
            :class="{ error: $v.form.crypto.$error }"
          >
            <option value="" selected>Choose crypto</option>
            <option v-for="currency in currencies" :key="currency.id" :value="currency.code">{{ currency.human_readable_name }}</option>
          </select>
          <template v-if="$v.form.crypto.$error">
            <p class="caption text-error mt-2">crypto is required</p>
          </template>
        </div>

        <div class="form-control">
          <label for="network">Select Network</label>
          <select
            id="network"
            v-model="$v.form.network.$model"
            :class="{ error: $v.form.network.$error }"
          >
            <option value="" selected>Choose network</option>
            <option v-for="network in networks" :key="network" :value="network">{{ network }}</option>
          </select>
          <template v-if="$v.form.network.$error">
            <p class="caption text-error mt-2">network is required</p>
          </template>
        </div>
        <div class="grid grid-cols-3 gap-x-5 pt-10">
          <Button 
            type="submit"
            label="Generate new address"
            :invalid="!$v.form.$anyDirty"
            :loading="apiState === API_STATE_ENUM.PENDING"
            class="btn--small col-span-2 btn-primary" 
          >
          </Button>
          <div class="btn btn-outlined btn--small" @click="cancel">
            Cancel
          </div>
        </div>
      </form>
      
      <div class="mb-10"></div>
    </div>
    <p v-if="form.crypto && form.network" class="text-xs w-4/6 text-center text-black py-2 px-3 rounded-lg bg-whitesmoke">
      You can only receive {{ form.crypto }} from the {{ form.network.toLowerCase() }} network to this address
    </p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import { required } from "vuelidate/lib/validators";
import Button from "~/components/Button/Button"
import {API_STATE_ENUM} from "~/services/constants"
import { CURRENCIES } from "~/services/getterTypes"
import { FETCH_CURRENCIES } from "~/services/actionTypes"

export default {
  name: "AddressModal",
  components: {
    Button, 
  },
  data() {
    return {
      API_STATE_ENUM,
      apiState: API_STATE_ENUM.IDLE,
      form: this.formFields()
    }
  },
  computed: {
    ...mapGetters([CURRENCIES]),
    networks() {
      const currency = this.currencies.find( c => c.code === this.form.crypto);
      return currency && currency.networks || []
    }
  },
  mounted() {
    this[FETCH_CURRENCIES]()
  },
  validations: {
    form: {
      crypto: {
        required
      },
      network: {
        required
      }
    }
  },
  methods: {
    ...mapActions([
      FETCH_CURRENCIES
    ]),
    formFields() {
      return {
        crypto: '',
        network: ''
      }
    },
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid || this.apiState === API_STATE_ENUM.PENDING) return;

        this.apiState = API_STATE_ENUM.PENDING;


        const payload = {
          code: this.form.crypto,
          network: this.form.network
        }

        try {
          const { data } = await this.$api.address.create(payload)
          const { message } = data;
          this.$toast.success(message);
          this.apiState = API_STATE_ENUM.RESOLVED;
          this.reset()
          this.$emit('done')
        } catch (error) {
          this.apiState = API_STATE_ENUM.REJECTED;
          const { message } = this.$utils.getAxiosErrorResponse(error);
          this.$toast.error(message);
        }
    },
    reset(){
      this.form = {...this.formFields()}
      this.$nextTick(() => { this.$v.form.$reset() })
    },
    cancel() {
      this.$v.form.$reset()
      this.$emit('close')
    }
  }
}
</script>

<style lang="css" scoped>

</style>

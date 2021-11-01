<template>
  <div class="pt-10">
    <h3 class="text-2xl mb-16">Address</h3>
    <select v-model="filter" class="select" @change="handleCoinChange">
      <option value="">All</option>
      <option v-for="currency in currencies" :key="currency.id" :value="currency.id">{{ currency.human_readable_name}}</option>
    </select>
    <Table :addresses="addresses" :loading="apiState === API_STATE_ENUM.PENDING" />

    <template v-if="apiState === API_STATE_ENUM.RESOLVED">
      <template v-if="addresses.length > 0">
        <Pagination
          class="mt-auto pb-12"
          :per-page="meta.per_page"
          :current-page="meta.page"
          :total="meta.total"
          @update-page="fetchAddresses"
        />
      </template>
      <template v-else>
        <EmptyBoundary
          title="No addresses yet"
          description="You have no addresses yet"
        />
      </template>
    </template>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import Table from "~/components/addresses/Table"
import { API_STATE_ENUM } from "~/services/constants"
import { CURRENCIES } from "~/services/getterTYpes";
import { FETCH_CURRENCIES } from "~/services/actionTypes"

export default {
  components: {
    Table,
  },
  layout: 'default',
  data(){
    return {
      addresses: [],
      filter: '',
      apiState: API_STATE_ENUM.IDLE,
      API_STATE_ENUM,
      globalModalConfig: {
        newAddress: false,
        detail: false
      }
    }
  },
  computed: {
    ...mapGetters([
      CURRENCIES
    ])
  },
  mounted() {
    this[FETCH_CURRENCIES]()
    this.fetchAddresses()
  },
  methods: {
    ...mapActions([
      FETCH_CURRENCIES
    ]),
    async fetchAddresses(params={}) {
      
      if(this.filter) {
        params.coin = this.filter
      }

      this.apiState = API_STATE_ENUM.PENDING;

      try {
        const { data } = await this.$api.address.all(params);
        console.log(data)
        const {addresses, meta} = data;
        this.addresses = addresses;
        this.meta = meta.paging;
        this.apiState = API_STATE_ENUM.RESOLVED;
      }catch (error) {
        this.apiState = API_STATE_ENUM.REJECTED;
        const { message } = this.$utils.getAxiosErrorResponse(error);
        this.$toast.error(message);
      }
    },
    handleCoinChange() {
      this.fetchAddresses()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

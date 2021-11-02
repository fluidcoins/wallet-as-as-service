<template>
  <div>
    <div class="mt-14 flex justify-end">
      <PlainButton
        label="Generate new address"
        @click="viewModal('newAddress')"
      />
    </div>
    
    <h3 class="text-2xl mb-16 pt-10">Address</h3>
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

    <Modal
      :show="globalModalConfig.newAddress"
      :width="600"
      @close="hideModal('newAddress')"
    >
      <AddressForm @done="refresh" @close="hideModal('newAddress')" />
    </Modal>

    <Modal
      :show="globalModalConfig.detail"
      :width="600"
      @close="hideModal('detail')"
    >
      <GeneratedAddress />
    </Modal>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import Table from "~/components/addresses/Table"
import { API_STATE_ENUM } from "~/services/constants"
import { CURRENCIES } from "~/services/getterTypes";
import { FETCH_CURRENCIES } from "~/services/actionTypes"
import PlainButton from '~/components/Button/PlainButton'
import ModalMixin from '~/mixins/modal'
import Modal from '~/components/Modal'
import AddressForm from '~/components/addresses/AddressForm'
import GeneratedAddress from '~/components/addresses/GeneratedAddress'

export default {
  components: {
    Table,
    Modal,
    PlainButton,
    AddressForm,
    GeneratedAddress
  },
  mixins: [ModalMixin],
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
    },
    refresh() {
      this.hideModal('newAddress')
      this.fetchAddresses()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

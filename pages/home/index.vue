<template>
  <div>
    <div class="mt-14 flex justify-end">
      <PlainButton
        label="Generate new address"
        @click="viewModal('newAddress')"
      />
    </div>
    <h3 class="text-2xl mb-16 pt-10">Transaction history</h3>
    <select v-model="filter" class="select" @change="handleFilter">
      <option value="">All</option>
      <option v-for="filterOption in filterOptions" :key="filterOption" :value="filterOption.toLowerCase()">{{ filterOption }}</option>
    </select>
    <Table :transactions="transactions" :loading="apiState === API_STATE_ENUM.PENDING" @filter="handleFilter" />

    <template v-if="apiState === API_STATE_ENUM.RESOLVED">
      <template v-if="transactions.length > 0">
        <Pagination
          class="mt-auto pb-12"
          :per-page="meta.per_page"
          :current-page="meta.page"
          :total="meta.total"
          @update-page="fetchTransactions"
        />
      </template>
      <template v-else>
        <EmptyBoundary
          title="No transactions yet"
          description="You have no transactions yet"
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
import Table from "~/components/transactions/Table";
import { API_STATE_ENUM } from "~/services/constants"
import ModalMixin from '~/mixins/modal'
import Modal from '~/components/Modal'
import PlainButton from '~/components/Button/PlainButton'
import AddressForm from '~/components/addresses/AddressForm'
import GeneratedAddress from '~/components/addresses/GeneratedAddress'

export default {
  components: {
    Table,
    Modal,
    PlainButton,
    AddressForm,
    GeneratedAddress,
  },
  mixins: [ModalMixin],
  layout: 'default',
  data(){
    return {
      apiState: API_STATE_ENUM.IDLE,
      API_STATE_ENUM,
      status: '',
      filter: '',
      filterOptions: ['Success', 'Pending', 'Expired', 'Overpaid', 'Underpaid'],
      meta: {},
      transactions: [],
      globalModalConfig: {
        newAddress: false,
        detail: false,
      },
    }
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    async fetchTransactions(params={}) {
      if(this.status){
        params.status = this.status
      }

      this.apiState = API_STATE_ENUM.PENDING;

      try{
        const { data } = await this.$api.transactions.all(params);
        const {transactions, meta} = data;
        this.transactions = transactions;
        this.meta = meta.paging;
        this.apiState = API_STATE_ENUM.RESOLVED;
      } catch(error){
        this.apiState = API_STATE_ENUM.REJECTED;
        const { message } = this.$utils.getAxiosErrorResponse(error);
        this.$toast.error(message);
      }
    },
    handleFilter() {
      this.status = this.filter;
      this.fetchTransactions()
    },
    refresh() {
      this.hideModal('newAddress')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

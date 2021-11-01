<template>
  <div class="pt-10">
    <h3 class="text-2xl mb-16">Transaction history</h3>
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
  </div>
</template>

<script>
import Table from "~/components/transactions/Table";
import { API_STATE_ENUM } from "~/services/constants"

export default {
  components: {
    Table,
  },
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="pt-10">
    <h3 class="text-2xl mb-16">Transaction history</h3>
    <select class="select">
      <option value="all">All</option>
    </select>
    <Table :transactions="transactions" :loading="apiState === API_STATE_ENUM.PENDING" />

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
      meta: {},
      transactions: [],
    }
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    async fetchTransactions(params={}) {
      this.apiState = API_STATE_ENUM.PENDING;

      try{
        const { data } = await this.$api.transactions.all(params);
        const {transactions, meta} = data;
        console.log(transactions)
        this.transactions = transactions;
        this.meta = meta.paging;
        this.apiState = API_STATE_ENUM.RESOLVED;
      } catch(error){
        this.apiState = API_STATE_ENUM.REJECTED;
        const { message } = this.$utils.getAxiosErrorResponse(error);
        this.$toast.error(message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

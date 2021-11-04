<template>
  <div class="mt-14">
    <BackNavigation class="mb-16" title="Home" />
    <template v-if="apiState === API_STATE_ENUM.RESOLVED">
      <div class="space-y-6">
      <div class="flex space-x-4 pb-6 border-b border-lightGrey">
        <div>
          <h4>Date</h4>
          <p class="mt-2 text-black">Created: {{ address.created_at | dateTimeString}}</p>
        </div>
        <div>
          <CoinBadge class="mr-2" :coin-type="address.coin && address.coin.code || 'Not Available'" />
        </div>
      </div>
      <div class="pb-6 flex justify-between">
        <div>
          <div class="flex space-x-5 items-center">
          <h4>Transactions</h4>
          <p class="ml-2 text-black">{{ meta && meta.total || 0 }}</p>
        </div>
        <div class="grid grid-cols-8 gap-8 mt-12">
          <div class="col-span-2">
            <p>Network</p>
            <p class="text-black mt-1">{{ $utils.validateNetwork(address.metadata.network) }}</p>
          </div>
          <div class="col-span-6">
            <div class="flex space-x-8 items-center">
              <p>Address</p>
              <Copy role="button" @click="copy(address.address)" />
            </div>
            <p class="text-secondary mt-1 break-words whitespace-pre-wrap">{{ address.address }}</p>
          </div>
        </div>
        </div>
        <div>
          <div class="w-40 h-40 mx-auto">
              <img
                class="w-full h-full object-cover"
                :src="`https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${address.address}`"
                alt="qr code"
              />
            </div>
        </div>
      </div>

      <Tabs class="mt-8" :headers="tabHeaders" @change="handleTabChange" />
      <Table class="mt-12" :coin="address.coin && address.coin.code || 'Not Available' " :transactions="transactions" :loading="transactionApiState === API_STATE_ENUM.PENDING" />
      <template v-if="transactionApiState === API_STATE_ENUM.RESOLVED">
        <div>
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
                description="Address has no transactions yet">
                <div></div>
              </EmptyBoundary>
          </template>
        </div>
      </template>
      </div>
    </template>
     <template v-else>
      <PageLoader />
    </template>
  </div>
</template>

<script>
import CoinBadge from '~/components/transactions/CoinBadge'
import BackNavigation from "~/components/BackNavigation";
import Copy from '~/assets/svg/copy.svg'
import Tabs from '~/components/Tabs'
import Table from '~/components/addresses/AddressTransactionTable'
import { API_STATE_ENUM } from "~/services/constants";
import ClipboardCopyMixin from "~/mixins/copy-to-clipboard";

  export default {
    name: 'AddressDetailPage',
    components: {
      CoinBadge,
      BackNavigation,
      Copy,
      Tabs,
      Table
    },
    mixins: [ ClipboardCopyMixin],
    data() {
      return {
        API_STATE_ENUM,
        apiState: API_STATE_ENUM.PENDING,
        transactionApiState: API_STATE_ENUM.PENDING,
        tabHeaders: ['Transactions'],
        address: {},
        transactions: [],
        meta: {}
      }
    },
    mounted () {
      this.fetchAddress();
      this.fetchTransactions();
    },
    methods: {
      onDomainChange(){
        this.$router.push('/addresses');
      },
      handleTabChange() {

      },
      async fetchAddress(){
        this.apiState = API_STATE_ENUM.PENDING;
        const { id } =  this.$route.params

        try {
          const { data } = await this.$api.address.get(id);
          const { address } = data;
          this.address = address;
          this.apiState = API_STATE_ENUM.RESOLVED;
        } catch (error) {
          this.apiState = API_STATE_ENUM.REJECTED;
          const { message } = this.$utils.getAxiosErrorResponse(error);
          this.$toast.error(message);
        }
      },
      async fetchTransactions(params = {}){
        this.transactionApiState = API_STATE_ENUM.PENDING;
        const { id } =  this.$route.params

        try {
          const { data } = await this.$api.address.transactions(id, params);
          const { transactions, meta } = data;
          this.transactions = transactions;
          this.meta = meta.paging
          this.transactionApiState = API_STATE_ENUM.RESOLVED;
        } catch (error) {
          this.transactionApiState = API_STATE_ENUM.REJECTED;
          const { message } = this.$utils.getAxiosErrorResponse(error);
          this.$toast.error(message);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

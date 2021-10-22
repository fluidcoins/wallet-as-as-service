<template>
  <div class="pt-14">
    <div class="mb-10 flex justify-end">
      <PlainButton
        label="Generate new address"
        @click="viewModal('newAddress')"
      />
    </div>
    <h3 class="text-2xl mb-16">Transaction history</h3>
    <select class="w-32 mb-12 border-0 bg-primaryLight300 text-base text-grey">
      <option value="all">All</option>
    </select>
    <Table :transactions="transactions" />
  </div>
</template>

<script>
import Table from "~/components/transactions/Table"
import PlainButton from "~/components/Button/PlainButton"
import ModalMixin from "~/mixins/modal"

export default {
  layout: 'default',
  mixins: [ModalMixin],
  components: {
    Table,
    PlainButton
  },
  data(){
    return {
      transactions: [
        {
          currency: 'BTC',
          id: 1,
          amount: '0.04',
          txId: '0x3f8629af7cc2dc4dc3704d2374299dae2019f7a612ea3f1204c77fcdf36f8955',
          status: 'completed',
          date: 'Oct 25, 2019'
        },
        {
          currency: 'BTC',
          id: 2,
          amount: '0.4',
          txId: '0x3f8629af7cc2dc4dc3704d2374299dae2019f7a612ea3f1204c77fcdf36f8955',
          status: 'completed',
          date: 'May 12, 2019'
        },
        {
          currency: 'BTC',
          id: 3,
          amount: '0.0005',
          txId: '0x3f8629af7cc2dc4dc3704d2374299dae2019f7a612ea3f1204c77fcdf36f8955',
          status: 'completed',
          date: 'Mar 06, 2018'
        },
        {
          currency: 'BTC',
          id: 4,
          amount: '0.0003',
          txId: '0x3f8629af7cc2dc4dc3704d2374299dae2019f7a612ea3f1204c77fcdf36f8955',
          status: 'completed',
          date: 'Dec 02, 2018'
        },
        {
          currency: 'BTC',
          id: 5,
          amount: '0.4',
          txId: '0x3f8629af7cc2dc4dc3704d2374299dae2019f7a612ea3f1204c77fcdf36f8955',
          status: 'completed',
          date: 'Oct 24, 2018'
        },
      ]
    }
  },
  methods: {
    showForm() {
      this.viewModal('newAddress')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
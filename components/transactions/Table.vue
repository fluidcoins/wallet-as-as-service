<template>
  <div>
    <table class="table-fixed w-full">
      <thead class="bg-whitesmoke">
        <tr>
          <th class="one-fifth">Amount</th>
          <th class="two-fifth">TXid</th>
          <th class="one-fifth">Status</th>
          <th class="one-fifth">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="cursor-pointer"
          v-for="transaction of transactions"
          :key="transaction.id"
        >
          <td>{{ transaction.amount }} {{ transaction.currency }}</td>
          <td class="text-secondary underline">{{ transaction.txId }}</td>
          <td><Status :status="transaction.status" /></td>
          <td>{{ transaction.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Status from "./Status.vue";

export default {
  name: 'Table',
  components: {
    Status
  },
  props: {
    transactions: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
  .one-fifth{
    width: 15%;
  }

  .two-fifth{
    width: 55%;
  }
</style>
<template>
  <div v-if="canShow">
    <table v-if="!loading"  class="table-fixed">
      <thead class="bg-whitesmoke">
        <tr>
          <th class="w-auto">
            <input class="w-4 h-4 mr-8" type="checkbox" />
          </th>
          <th class="w-4/12">Amount ({{ coin }})</th>
          <th class="w-4/12">Hash</th>
          <th class="w-4/12">Date </th>

        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer" @click="$router.push(`/addresses/${addressId}/${transaction.reference}`)" v-for="transaction in transactions" :key="transaction.id">
          <td>
            <input class="w-4 h-4" type="checkbox" />
          </td>
          <td>{{ transaction.human_readable_amount }}{{ coin }}</td>
          <td>
            <p class="text-black break-words whitespace-pre-wrap px-4">{{ transaction.hash}}</p>
          </td>
          <td> {{ transaction.created_at | dateTimeString}}</td>
        </tr>
      </tbody>
    </table>
    <PaginationLoader class="mt-6" v-if="loading" />
  </div>
</template>

<script>
  export default {
    name: 'AddressTransactionTable',
    data() {
      return {
        addressId: this.$route.params.id
      }
    },
    props: {
      coin: {
        type: String,
        required: true
      },
      transactions: {
        type: Array,
        default: () => [],
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      canShow() {
        return this.loading || this.transactions.length
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

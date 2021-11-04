<template>
  <div v-if="canShow" class="mb-8">
    <table class="table-fixed w-full">
      <thead class="bg-whitesmoke">
        <tr>
          <th class="w-3/5 font-medium">Address</th>
          <th class="w-2/5 font-medium">Address Type</th>
          <th class="w-2/5 font-medium">Date</th>
        </tr>
      </thead>
      <tbody v-if="!loading">
        <tr
          v-for="address of addresses"
          :key="address.id"
          class="cursor-pointer font-normal"
          @click="$router.push(`/address/${address.reference}`)"
        >
          <td class="flex items-center text-sm">
            <span class="text-secondary underline">{{ address.address }}</span>
            <Clipboard class="ml-5" @click.stop="copy(address.address)" />
          </td>
          <td class="text-sm">
            {{ address.coin.code }}
          </td>
          <td class="text-lg">{{ address.created_at | dateString}}</td>
        </tr>
      </tbody>
    </table>
    <PaginationLoader v-if="loading" class="mt-6" />
  </div>
</template>

<script>
import Clipboard from '~/assets/svg/clipboard.svg';
import ClipboardCopyMixin from "~/mixins/copy-to-clipboard"

export default {
  name: 'Table',
  components: {
    Clipboard,
  },
  mixins: [ClipboardCopyMixin],
  props: {
    addresses: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    canShow() {
      return this.loading || this.addresses.length
    }
  }
}
</script>

<style lang="css" scoped></style>

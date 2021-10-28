<template>
  <div>
    <table class="table-fixed w-full">
      <thead class="bg-whitesmoke">
        <tr>
          <th class="w-3/5 font-medium">Address</th>
          <th class="w-25 font-medium">Address Type</th>
          <th class="w-1/5 font-medium">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="cursor-pointer font-normal"
          v-for="address of addresses"
          :key="address.id"
        >
          <td class="flex items-center text-sm">
            <span class="text-secondary underline">{{ address.address }}</span>
            <Clipboard class="ml-5" @click="copy(address.address)" />
          </td>
          <td class="text-sm">
            {{ address.type }}
          </td>
          <td class="text-lg">{{ address.date }}</td>
        </tr>
      </tbody>
    </table>
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
  },
}
</script>

<style lang="css" scoped></style>

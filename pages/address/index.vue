<template>
  <div class="pt-14">
    <div class="mb-10 flex justify-end">
      <PlainButton
        label="Generate new address"
        @click="viewModal('newAddress')"
      />
    </div>
    <h3 class="text-2xl mb-16">Address</h3>
    <select class="w-32 mb-12 border-0 bg-primaryLight300 text-base text-grey">
      <option value="all">All</option>
    </select>
    <Table :addresses="addresses" />
    <Modal 
      :show="globalModalConfig.newAddress"
      :width="600"
      @close="hideModal('newAddress')"
    >
      <NewAddress />
    </Modal>
  </div>
</template>

<script>
import Table from "~/components/Addresses/Table"
import Modal from "~/components/Modal"
import ModalMixin from "~/mixins/modal"
import PlainButton from "~/components/Button/PlainButton"
import NewAddress from "~/components/Addresses/NewAddress"

export default {
  layout: 'default',
  components: {
    Table,
    Modal,
    PlainButton,
    NewAddress
  },
  mixins: [ModalMixin],
  data(){
    return {
      addresses: [
        {
          type: 'Bitcoin',
          id: 1,
          address: '1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz',
          date: 'Oct 25, 2019'
        },
         {
          type: 'Bitcoin',
          id: 2,
          address: '1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz',
          date: 'May 12, 2019'
        },
         {
          type: 'Bitcoin',
          id: 3,
          address: '1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz',
          date: 'Mar 06, 2018'
        },
         {
          type: 'Bitcoin',
          id: 4,
          address: '1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz',
          date: 'Dec 02, 2018'
        },
        {
          type: 'Bitcoin',
          id: 5,
          address: '1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz',
          date: 'Oct 24, 2018'
        },
      ],
      globalModalConfig: {
        newAddress: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
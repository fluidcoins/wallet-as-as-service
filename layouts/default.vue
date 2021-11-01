<template>
  <div class="flex h-screen overflow-hidden">
    <div class="px-4 h-full flex-none w-1/6 max-w-xs">
      <Sidebar />
    </div>
    <div class="flex-1 pl-6 pr-16 overflow-y-auto">
      <div class="pt-16">
        <Navbar />
        <div class="mt-14 flex justify-end">
          <PlainButton
            label="Generate new address"
            @click="viewModal('newAddress')"
          />
        </div>
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
      <Nuxt ref="page" />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import ModalMixin from '~/mixins/modal'
import PlainButton from '~/components/Button/PlainButton'
import AddressForm from '~/components/addresses/AddressForm'
import GeneratedAddress from '~/components/addresses/GeneratedAddress'
import Modal from '~/components/Modal'

export default {
  name: 'DefaultLayout',
  middleware: 'authenticated',
  components: {
    Navbar,
    Sidebar,
    PlainButton,
    AddressForm,
    GeneratedAddress,
    Modal,
  },
  mixins: [ModalMixin],
  data() {
    return {
      globalModalConfig: {
        newAddress: false,
        detail: false,
      },
    }
  },
  methods: {
    refresh() {
      this.hideModal('newAddress')
      this.fetchAddresses()
    },
    fetchAddresses() {
      const { path } = this.$route;
      if(path === '/address') {
        this.$refs.page.$children[0].fetchAddresses()
      }
    }
  },
}
</script>

<style lang="css" scoped></style>

<template>
  <div class="flex flex-col items-center">
    <div class="w-3/5 flex flex-col items-center">
      <div class="text-center mb-16">
        <h3 class="text-2xl">Generate new address</h3>
        <p class="text-lg">Select the cryptocurrency and generate a new address</p>
      </div>
      <Dropdown @changeOption="changeCrypto" label="Select Crypto" :options="cryptoOptions" />
      <div class="mb-10"></div>
      <Dropdown @changeOption="changeNetwork" label="Select network" :options="networkOptions" />
      <div class="mb-10"></div>
      <PlainButton @click="$emit('done')" label="Generate new address" />
      <div class="mb-10"></div>
    </div>
    <p class="text-xs w-4/6 text-center text-black py-1 px-2 rounded bg-whitesmoke">
      You can only receive {{ crypto }} from the {{ network.toLowerCase() }} network to this address
    </p>
  </div> 
</template>

<script>
import Dropdown from "~/components/Addresses/Dropdown"
import PlainButton from "~/components/Button/PlainButton"

export default {
  name: "addressMOdal",
  components: {
    Dropdown,
    PlainButton
  },
  data() {
    return {
      cryptoOptions: ['BTC', 'ETH'],
      networkOptions: ['Bitcoin', 'BEP2', 'BEP 20'],
      crypto: 'BTC',
      network: 'Bitcoin',
    }
  },
  methods: {
    changeCrypto(crypto) {
      this.crypto = crypto
    },
    changeNetwork(network) {
      this.network = network
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
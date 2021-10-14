<template>
<div>
  <div class="w-full flex">
    <div class="w-1/3 bg-primary h-screen">
      <Payout class="mt-32" />
      <p class="text-center text-white text-2xl mt-12 font-semibold">
        Payout in any cryptocurrency
      </p>
    </div>
    <div class="w-2/3">
      <Nuxt />
    </div>
  </div>
</div>
  
</template>

<script>
import Payout from '~/assets/svg/payout.svg';

export default {
  name: "AuthLayout",
  components: {Payout}
}
</script>

<style lang="scss" scoped>

</style>
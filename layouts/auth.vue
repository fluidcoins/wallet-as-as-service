<template>
<div>
  <div class="w-full flex">
    <div class="w-1/3 bg-primary h-screen">
      <img src="https://res.cloudinary.com/fluidcoins/image/upload/v1634553516/demo-site/payout-summary_qqo4hp.png" class="mt-32" />
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
export default {
  name: "AuthLayout",
}
</script>

<style lang="scss" scoped>

</style>
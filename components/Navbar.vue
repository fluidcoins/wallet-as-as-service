<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl">
      <span class="block font-semibold">Welcome,</span>
      <span class="font-semibold">Developer</span>
    </h1>
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-primaryLight">
        <Bell />
      </button>
      <span class="ml-12 w-14 h-14 rounded-full bg-lightGrey" />
    </div>
  </div>
</template>

<script>
  import Bell from "~/assets/svg/bell.svg"
  export default {
  components: {
    Bell,
  },
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>

</style>
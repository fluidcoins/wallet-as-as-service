<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl">
      <span class="block font-semibold">Welcome,</span>
      <span class="font-semibold">Moyin Olowu</span>
    </h1>
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-primaryLight">
        <Bell />
      </button>
      <Avatar class="ml-12" />
    </div>
  </div>
</template>

<script>
  import Bell from "~/assets/svg/bell.svg"
  import Avatar from "~/assets/svg/avatar.svg"
  export default {
  components: {
    Bell,
    Avatar
  },
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>

</style>
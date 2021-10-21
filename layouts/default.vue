<template>
  <div class="flex">
    <div class="px-4 flex-none w-1/6">
      <Sidebar />
    </div>
    <div class="flex-1 pl-6 pr-16">
      <div class="pt-16 pb-14">
        <Navbar />
        
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"
export default {
  name: 'DefaultLayout',
  components:{
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped></style>

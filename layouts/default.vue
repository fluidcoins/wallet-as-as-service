<template>
  <div class="flex h-screen overflow-hidden">
    <div class="px-4 h-full flex-none w-1/6 max-w-xs">
      <Sidebar />
    </div>
    <div class="flex-1 pl-6 pr-16 overflow-y-auto">
      <div class="pt-16">
        <Navbar />
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Sidebar,
  },
  middleware: 'authenticated',
}
</script>

<style lang="css" scoped></style>

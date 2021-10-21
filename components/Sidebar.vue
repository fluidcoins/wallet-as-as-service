<template>
  <div class="h-full">
    <nav class="pt-36">
      <SidebarItem 
        v-for="menu in menuItems"
        :key="menu.name"
        :iconType="menu.icon"
        :path="menu.icon"
        :name="menu.name"
      />
      <button class="px-6 py-3 rounded flex items-center">
        <Logout />
        <span class="ml-6">Logout</span>
      </button>
    </nav>
  </div>
</template>

<script>
import Logout from "~/assets/svg/logout.svg"
export default {
  name: 'Sidebar',
  components: {
    Logout
  },
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          path: "/home",
          icon: "Home"
        },
        {
          name: "Address",
          path: "/address",
          icon: "Address"
        }
      ],
      actionItems: [
        {
          name: 'Logout',
          icon: 'Logout'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
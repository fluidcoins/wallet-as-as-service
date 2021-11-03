<template>
  <div class="h-full">
    <nav class="pt-36">
      <SidebarItem
        v-for="(menu, i) in menuItems"
        :key="menu.name"
        :iconType="menu.icon"
        :path="menu.path"
        :name="menu.name"
        :index="i"
      />
      <button @click="_logout" class="px-6 py-3 rounded w-full flex items-center justify-center">
        <Logout />
        <span class="ml-6 text-xl font-medium">Logout</span>
      </button>
    </nav>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import Logout from '~/assets/svg/logout.svg';
import { LOGOUT } from "~/services/actionTypes";

export default {
  name: 'Sidebar',
  components: {
    Logout,
  },
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          path: '/home',
          icon: 'Home',
        },
      ],
    }
  },
  methods: {
    ...mapActions([
      LOGOUT
    ]),
    _logout() {
      // this.logout();
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <nuxt-link
    :class="{'bg-primaryLight': isActive}"
    class="px-6 py-3 rounded flex items-center"
    :to="path"
  >
    <component :is="icon" />
    <span class="ml-6">
      {{ name }}
    </span>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'SidebarItem',
    components: {
      Home: require('~/assets/svg/home.svg'),
      Address: require('~/assets/svg/address.svg'),
    },
    data() {
      return {}
    },
    props: {
      name: {
        type: String,
        required: true
      },
      iconType: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      }
    },
    computed: {
      icon() {
        switch(this.iconType.toLowerCase()){
          case 'home': {
            return 'Home'
          }
          case 'address': {
            return 'Address'
          }
          default: {
            return ""
          }
        }
      },
      isActive(){
        return this.$route.name && this.$route.name.toLowerCase().includes(this.iconType.toLowerCase())
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
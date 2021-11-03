<template>
  <div class="flex">
    <div role="button" tabindex="0" class="flex items-center space-x-4" @click="$router.go(-1)">
      <Chevron class="block mb-1" />
      <h4>{{title}}</h4>
    </div>
  </div>
</template>

<script>
import Chevron from '~/assets/svg/chevron-left.svg'
  export default {
    name: 'BackNavigation',
    components: {
      Chevron,
    },
    props: {
      title: {
        type: String,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>

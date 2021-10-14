<template>
  <button :type="type" class="w-full btn btn-primary" :class="{'btn-disabled': invalid}" :disabled="invalid">
    <template v-if="!loading">
      {{ label }}
    </template>
    <template v-else>
      <div class="flex items-center justify-center">
        <Loader class="spin" />
      </div>
    </template>
  </button>
</template>

<script>
import Loader from '~/assets/svg/loader.svg'

export default {
  name: 'Button',
  components: {
    Loader
  },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
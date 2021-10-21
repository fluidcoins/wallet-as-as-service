<template>
  <button class="px-6 py-3 bg-primary text-white rounded-md">
    {{ label }}
  </button>
</template>

<script>
  export default {
    name: 'plainButton',
    props: {
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <button
    class="px-8 py-4 text-base btn-primary rounded-md font-medium"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'plainButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>

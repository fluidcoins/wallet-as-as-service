<template>
  <div class="flex flex-col  h-full items-center justify-center">
    <slot name="icon">
      <img
        srcset="
          /images/empty/no-data.png,
          /images/empty/no-data-1.5x.png 1.5x,
          /images/empty/no-data-2x.png   2x,
          /images/empty/no-data-3x.png   3x,
          /images/empty/no-data-4x.png   4x
        "
        src="/images/empty/no-data.png"
        alt="no data"
      />
    </slot>

    <h4 class="mt-6">{{ title }}</h4>
    <p class="mt-2 mb-6 w-96 text-center">{{ description }}</p>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "EmptyBoundary",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    primaryLabel: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

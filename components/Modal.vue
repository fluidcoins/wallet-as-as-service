<template>
  <div>
    <div
      class="
        w-screen
        h-screen
        bg-modal
        fixed
        top-0
        left-0
        right-0
        bottom-0
        flex flex-col
        justify-center
      "
      :class="{ hidden: !show }"
      @click="$emit('close')"
    >
      <div
        :style="{ width: width ? width + 'px' : '50vw' }"
        class="mx-auto py-16 bg-white h-auto relative shadow-modal rounded-md"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    width: {
      type: Number,
    },
    show: {
      type: Boolean,
      required: true
    },
  },
  beforeMount() {
    const vm = this;

    document.addEventListener("keyup", function (evt) {
      if (evt.key === "Escape") {
        vm.$emit("close");
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener("keyup", null);
  },
};
</script>

<style lang="scss" scoped>
</style>

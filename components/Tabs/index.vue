<template>
  <div role="tablist" class="border-b border-lightGrey w-full block space-x-4">
    <div
      class="text-sm inline-block border-b relative tab-item cursor-pointer"
      role="tab"
      tabindex="0"
      :class="{
        ' text-grey border-none': !tab.isActive,
        'text-primary border-primary': tab.isActive,
      }"
      v-for="tab in tabs"
      :key="tab.position"
      @click="toggleActive(tab)"
    >
      {{ tab.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentlyActive: 0
    }
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
  computed: {
    tabs() {
      return this.headers.map((h, index) => {
        return {
          title: h,
          position: index,
          isActive: index === this.currentlyActive,
        };
      });
    },
  },
  methods: {
    toggleActive(tab) {
      this.currentlyActive = tab.position
      this.$emit('change', tab.position)
    },
  },
};
</script>

<style lang="css" scoped>
.tab-item {
  bottom: -1px;
}
</style>

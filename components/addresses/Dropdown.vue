<template>
  <div :style="{width: width || '100%'}">
    <label class="mb-3">{{ label }}</label>
    <div class="relative">
      <div @click="setDropdown" class="result rounded py-3 px-4 text-sm border border-grey">
        {{ value }}
      </div>
      <ul v-if="show" class="absolute z-10 transform translate-y-2 bg-white w-full rounded shadow-modal py-3">
        <li
          v-for="option in options"
          :key="option"
          class="text-sm py-2 pl-4 hover:bg-whitesmoke"
          :class="{'bg-whitesmoke': option === value}"
          @click="() => setValue(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      options: {
        type: Array,
      }
    },
    data() {
      const initial = this.options[0]
      return {
        value: initial,
        show: false,
      }
    },
    methods: {
      setDropdown() {
        this.show = !this.show
      },
      setValue(option) {
        this.value = option;
        this.setDropdown();
        this.$emit('changeOption', option)
      },
    }
  }
</script>

<style lang="css" scoped>
  .result{
    background-image: url('/images/down-caret.svg');
    background-repeat: no-repeat;
    background-position: right 1rem center;
  }
</style>
<template>
  <div>
    <input :id="id" :class="{'error': error}" :type="type"  class="border-primary" v-model.trim="inputValue" @input="v.$touch()" />
    <template v-if="error">
      <p class="caption text-error mt-2" >{{error}}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    error: {
      type: [String, Boolean],
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    },
    v: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value){
        this.$emit("input", value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="status flex items-center w-full">
    <span class="rounded-full w-3 h-3" :class="getClass"></span>
    <p class="ml-1 font-medium text-black text-sm">{{ status | capitalize }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Status',
    props: {
      status: {
        type: String,
        default: 'paid'
      },
    },
    computed: {
      extraClass() {
        switch(this.status.toLowerCase()) {
          case 'completed':
          case 'processed': {
            return 'success'
          }
          case 'failed':
          case 'expired':
          case 'disabled':{
            return 'error'
          }
          case 'pending':
          case 'unpaid': {
            return 'pending'
          }
          default: {
            return 'success'
          }
        }
      },
      getClass() {
        return `bg-${this.extraClass}`
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
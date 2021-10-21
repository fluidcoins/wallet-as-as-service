<template>
  <div class="status flex items-center">
    <span class="rounded-full p-1" :class="getClass"></span>
    <div class="ml-1 font-medium">{{ status | capitalize }}</div>
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
            return 'failed'
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
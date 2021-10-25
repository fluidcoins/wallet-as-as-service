export default {
  name: 'CopyToClipboardMixin',
  methods: {
    copy(value) {
      this.$clipboard(value);
      this.$toast.info('Copied to clipboard')
    }
  }
}
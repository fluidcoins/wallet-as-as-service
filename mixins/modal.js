export default {
  name: "ModalMixin",
  data() {
    return {
      showModal: false,
      globalModalConfig: {}
    };
  },
  methods: {
    hideModal(key) {
      if (typeof key === 'string') {
        this.globalModalConfig[key] = false;
        return;
      }
      this.showModal = false;
    },
    viewModal(key) {
      if (typeof key === 'string') {
        this.globalModalConfig[key] = true;
        return;
      }
      this.showModal = true;
    }
  }
};
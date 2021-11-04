<template>
  <div class="badge" :class="extraClass" :title="coinType">
    {{ coinType }}
  </div>
</template>

<script>
export default {
  props: {
    coinType: {
      type: String,
      required: true,
    },
  },
  computed: {
    extraClass() {
      switch (this.coinType.toLowerCase()) {
        case "bitcoin":
        case "btc":
          return "badge--bitcoin";

        case "usdc":
          return "badge--usdc";

        case "ethereum":
        case "eth":
          return "badge--eth";

        case "usdt":
          return "badge--usdt";

        case "xrp":
          return "badge--xrp";

        case "busd":
          return "badge--busd";
        case "doge":
          return "badge--doge";
        case "tron":
          return "badge--tron";
        case "ltc":
          return "badge--ltc";

        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

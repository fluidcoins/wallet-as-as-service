<template>
  <div class="relative">
    <div class="max-w-sm mx-auto">
      <div class="px-4">
        <h4 class="text-center">Bitcoin Wallet Address</h4>
        <p class="text-center text-lg">New bitcoin address generated successfully</p>
      </div>
      <div>
        <div class="w-36 h-36 mx-auto mt-10 mb-6">
          <img
            class="w-full h-full object-cover"
            :src="`https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz`"
            alt="qr code"
          />
        </div>
        <div>
          <p class="text-black font-medium text-center">Address</p>

          <div
            class="
              flex
              justify-between
              items-center
              mx-auto
              bg-whitesmoke
              p-4
              pr-3
              rounded-lg
              mt-4
            "
          >
            <p class="flex-1 text-sm text-secondary whitespace-pre-wrap break" id="bar">1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz</p>

            <Copy class="flex-none" role="button" @click="copy('1MJqZvCjzh1nYFJ1tYPcbSpkhN23tK2dYz')" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="bg-whitesmoke py-1 px-2 rounded-lg mt-8 font-medium text-xs">You can only receive BTC from the bitcoin network</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Copy from "~/assets/svg/copy.svg"
import CopyToClipboardMixin from "~/mixins/copy-to-clipboard"

export default {
  name: 'GeneratedAddress',
  mixins: [CopyToClipboardMixin],
  components: {
    Copy
  }
}
</script>

<style lang="scss" scoped>

</style>
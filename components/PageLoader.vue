<template>
  <div class="grid grid-cols-12 gap-x-2 mt-8">
    <div class="col-span-1">
      <div class="w-12 h-12 rounded-full bg-whitesmoke skeleton"></div>
    </div>
    <div class="col-span-11">
      <div class="space-y-2">
        <div class="w-full h-4 bg-whitesmoke skeleton"></div>
        <div class="w-full h-4 bg-whitesmoke skeleton"></div>
        <div class="w-full h-4 bg-whitesmoke skeleton"></div>
      </div>

      <div class="grid grid-cols-2 h-96 gap-x-12 my-12">
        <div class="h-full bg-whitesmoke skeleton"></div>
        <div class="h-full bg-whitesmoke skeleton"></div>
      </div>

      <div class="space-y-2">
        <div class="w-full h-4 bg-whitesmoke skeleton"></div>
        <div class="w-full h-4 bg-whitesmoke skeleton"></div>
        <div class="w-full h-4 bg-whitesmoke skeleton"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLoader",
};
</script>

<style lang="css" scoped>
.skeleton {
  position: relative;
  overflow: hidden;
}
.skeleton::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(to right, #fff, #f9f9f9, #f3f3f3, #fff );
  animation: shimmer 2s infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

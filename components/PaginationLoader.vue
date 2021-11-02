<template>
  <div class=" space-y-4">
    <div class="bg-whitesmoke skeleton w-full h-12">
    </div>
    <div class="bg-whitesmoke skeleton w-full h-12">
    </div>
    <div class="bg-whitesmoke skeleton w-full h-12">
    </div>
    <div class="bg-whitesmoke skeleton w-full h-12">
    </div>
    <div class="bg-whitesmoke skeleton w-full h-12">
    </div>
    <div class="bg-whitesmoke skeleton w-full h-12">
    </div>

  </div>
</template>

<script>
export default {
  name: 'PaginationLoader'
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
  background-image: linear-gradient(to right, #f4f4f5, #f3f3f3, #f9f9f9 );
  animation: shimmer 2s infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

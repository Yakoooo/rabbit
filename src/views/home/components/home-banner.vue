<template>
  <div class="home-banner">
    <XtxCarousel :sliders="slider" :autoPlay="true" />
  </div>
</template>
<script>
import { findBanner } from '@/api/home'
import { ref } from '@vue/reactivity'
export default {
  name: 'HomeBanner',
  setup() {
    const slider = ref([])
    findBanner().then((res) => {
      slider.value = res.result
    })
    return { slider }
  }
}
</script>
<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>

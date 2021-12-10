<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
  <div>
    <!-- 新鲜好物 -->
    <home-new></home-new>
    <!-- 人气推荐 -->
    <home-hot></home-hot>
    <!-- 品牌 -->
    <home-brand></home-brand>
    <!-- 商品区域 -->
    <home-product></home-product>
  </div>
</template>
<script>
// import XtxMore from '@/components/library/xtx-more.vue'
import HomeBanner from './components/home-banner.vue'
import HomeBrand from './components/home-brand.vue'
import HomeCategory from './components/home-category'
import HomeHot from './components/home-hot.vue'
// import HomePanel from './components/home-panel.vue'
import HomeNew from './components/home-new.vue'
import HomeProduct from './components/home-product.vue'
export default {
  name: 'PageHome',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct
  }
}
</script>
<style scoped lang="less">
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>

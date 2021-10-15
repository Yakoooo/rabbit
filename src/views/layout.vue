<template>
  <!-- 一级路由 -->
  <div>
    <app-topnav></app-topnav>
    <app-header></app-header>
    <div class="app_body">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  components: { appTopnav, AppHeader, AppFooter }
}
</script>

<style lang="less" scoped>
.app_body{
  min-height: 600px;
}
</style>

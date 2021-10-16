<template>
  <!-- 一级路由 -->
  <div>
    <app-topnav></app-topnav>
    <app-header></app-header>
    <app-header-sticky></app-header-sticky>
    <div class="app_body">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import appTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  components: { appTopnav, AppHeader, AppFooter, AppHeaderSticky },
  setup() {
    const store = useStore()
    store.dispatch('category/getList')

    const List = computed(() => {
      return store.state.category.list
    })

    return { List }
  }
}
</script>

<style lang="less" scoped>
.app_body {
  min-height: 600px;
}
</style>

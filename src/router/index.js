import { createRouter, createWebHashHistory } from 'vue-router'
const layout = () => import('../views/layout.vue')
const home = () => import('../views/home')
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        component: home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

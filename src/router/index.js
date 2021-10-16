import { createRouter, createWebHashHistory } from 'vue-router'
const layout = () => import('../views/layout.vue')
const home = () => import('../views/home')
const category = () => import('../views/category')
const sub = () => import('@/views/category/sub.vue')
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        component: home
      },
      {
        path: '/category/:id',
        component: category
      },
      {
        path: '/category/sub/:id',
        component: sub
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { menu } from './nav/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: () => import('@/layouts/defaultLayout.vue'),
      children: [...menu],
    },
  ],
})

export default router

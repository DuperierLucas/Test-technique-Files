import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import BackofficePage from '@/pages/BackofficePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/backoffice',
      name: 'Backoffice',
      component: BackofficePage
    }
  ]
})

export default router

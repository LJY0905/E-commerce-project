import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/Login.vue'
import Index from '@/views/pages/Index.vue'
import Home from '@/views/pages/children/Home.vue'
import Category from '@/views/pages/children/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router

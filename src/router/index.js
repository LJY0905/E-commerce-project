import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/Login.vue'
import Layout from '@/views/Layout/Layout.vue'
import Home from '@/views/Home/Home.vue'
import Category from '@/views/Category/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',// 默认二级路由
          component: Home
        },
        {
          path: 'category/:id',
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

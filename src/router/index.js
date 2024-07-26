import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/login/Login.vue'
import Layout from '@/views/Layout/Layout.vue'
import Home from '@/views/Home/Home.vue'
import Category from '@/views/Category/Category.vue'
import SubCategory from '@/views/SubCategory/SubCategory.vue'
import Detail from '@/views/Detail/Detail.vue'
import CartList from '@/views/CartList/CartList.vue'
import CheckOut from '@/views/CheckOut/CheckOut.vue'
import Pay from '@/views/Pay/Pay.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/views/Member/components/UserInfo.vue'
import MemberOrder from '@/views/Member/components/OrderInfo.vue'

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
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: CheckOut
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },
        {
          path: '/member',
          component: Member,
          children: [
            {
              path: '',
              component: MemberInfo
            },
            {
              path: 'order',
              component: MemberOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router

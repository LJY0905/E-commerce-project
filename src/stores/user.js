// 管理用户数据相关

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cart'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {

    const cartStore = useCartStore()
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        console.log(userInfo.value)
        // 合并购物车
        const params = cartStore.cartList.map(item => ({
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
        }))
        await mergeCartAPI(params)
        cartStore.getCartList()
    }
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }


    // 3. 以对象的格式把state和action return
    return {
        userInfo, getUserInfo, clearUserInfo
    }
}, {
    persist: true,
})
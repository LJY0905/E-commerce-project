import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { useUserStore } from './user'

import { inserCartAPI, fetchCartListAPI, deleteCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {

    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    console.log(isLogin)
    // 1. 定义state - cartList
    const cartList = ref([])
    // 2. 定义action - addCart
    const getCartList = async () => {
        try {
            const res = await fetchCartListAPI()
            cartList.value = res.result
        } catch (error) {
            console.log(error)
        }
        const res = await fetchCartListAPI()
        cartList.value = res.result
    }
    const addCart = async (goods) => {
        if (isLogin) {
            const params = {
                skuId: goods.skuId,
                count: goods.count
            }
            try {
                await inserCartAPI(params)
                getCartList()
            } catch (error) {
                console.log(error)
            }
        } else {
            // console.log('添加', goods)
            // 添加购物车操作
            // 已添加过 - count + 1
            // 没有添加过 - 直接push
            // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            console.log(item)
            if (item) {
                // 找到了
                item.count++
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }

    }

    const delCart = async (skuId) => {
        if (isLogin) {
            const params = { ids: [skuId] }
            try {
                await deleteCartAPI(params)
                getCartList()
            } catch (error) {
                console.log(error)
            }
        } else {

            // 过滤/splice

            cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
        }
    }

    const clearCart = () => {
        cartList.value = []
    }
    const sumNum = computed(() => {
        return cartList.value.reduce((sum, item) => sum + item.count, 0)
    })

    const sumPrice = computed(() => {
        return cartList.value.reduce((sum, item) => sum + item.count * item.price, 0)
    })

    const singleCheck = (skuId, selected) => {
        cartList.value.find((item) => item.skuId === skuId).selected = selected
    }

    const isAllCheck = computed(() => {
        return cartList.value.every((item) => item.selected)
    })

    const allCheck = (selected) => {
        cartList.value.forEach((item) => {
            item.selected = selected
        })
    }

    const checkNum = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count, 0))

    const checkPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.price * item.count, 0))
    return {
        cartList,
        addCart,
        delCart,
        sumNum,
        sumPrice,
        singleCheck,
        isAllCheck,
        allCheck,
        checkNum,
        checkPrice,
        clearCart,
        getCartList
    }
}, {
    persist: true,//持久化
})
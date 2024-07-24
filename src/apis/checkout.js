import httpInstance from '@/utils/http'

// 获取结算信息
export const getCheckoutInfoAPI = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}

// 创建订单
export const createOrderAPI = (params) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data: params
    })
}
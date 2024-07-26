import httpInstance from "@/utils/http"

export const loginAPI = (params) => {
    return httpInstance({
        url: '/login',
        method: 'post',
        data: params
    })
}
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}

export const getUserOrder = (params) => {
    return httpInstance({
        url: '/member/order',
        method: 'GET',
        params
    })
}
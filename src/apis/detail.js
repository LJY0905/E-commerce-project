import httpInstance from "@/utils/http"

export const getDetail = (params) => {
    return httpInstance({
        url: '/goods',
        params
    })
}

export const getHotGoodsAPI = (params) => {
    return httpInstance({
        url: '/goods/hot',
        params
    })
}
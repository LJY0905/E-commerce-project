import httpInstance from "@/utils/http"

export const loginAPI = (params) => {
    return httpInstance({
        url: '/login',
        method: 'post',
        data: params
    })
}
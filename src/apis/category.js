import httpInstance from '@/utils/http'

export const getTopCategoryAPI = (params) => {
    return httpInstance({
        url: '/category',
        method: 'GET',
        params
    })
}

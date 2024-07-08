import httpInstance from '@/utils/http'

export const getBannerAPI = (params) => {
    return httpInstance({
        url: 'home/banner',
        method: 'GET',
        params
    })
}


export const getNewAPI = () => {
    return httpInstance({
        url: '/home/new',
        method: 'GET'
    })
}

export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot',
        method: 'get'
    })
}

export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods',
        method: 'get'
    })
}

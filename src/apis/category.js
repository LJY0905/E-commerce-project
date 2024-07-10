import httpInstance from '@/utils/http'

export const getTopCategoryAPI = (params) => {
    return httpInstance({
        url: '/category',
        method: 'GET',
        params
    })
}

// 获取二级分类列表
export const getCategoryFilterAPI = (params) => {
    return httpInstance({
        url: '/category/sub/filter',
        params
    })
}


// 获取导航数据
export const getSubCategoryAPI = (params) => {
    return httpInstance({
        url: '/category/goods/temporary',
        method: 'POST',
        data: params
    })
}

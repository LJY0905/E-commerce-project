import httpInstance from "@/utils/http";

// 加入购物车
export const inserCartAPI = (params) => {
    return httpInstance({
        url: "/member/cart",
        method: "post",
        data: params
    })
}

// 获取购物车列表
export const fetchCartListAPI = () => {
    return httpInstance({
        url: "/member/cart",
        method: "get"
    })
}

// 删除购物车
export const deleteCartAPI = (params) => {
    return httpInstance({
        url: "/member/cart",
        method: "delete",
        data: params
    })
}

// 合并购物车
export const mergeCartAPI = (params) => {
    return httpInstance({
        url: "/member/cart/merge",
        method: "post",
        data: params
    })
}
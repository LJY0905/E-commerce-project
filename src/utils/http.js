import axios from "axios"
import { useUserStore } from '@/stores/user'
import { ElMessage } from "element-plus"

import router from "@/router" // 不能使用useRouter，这里是js文件，不能使用vue-router
// axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo?.token || ''
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    ElMessage({ type: "warning", message: e.response.data.message })

    //401token失效处理  这里后端接口之后商品详情页才检查token 只有在详情页才会跳转登录页
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }

    return Promise.reject(e)
})

export default httpInstance
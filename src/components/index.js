// 注册components中全部组件 全局化注册
// 插件

import ImgPane from "./ImgPane.vue"
import Sku from "./XtxSku/index.vue"

export const componentPlugin = {
    install(app) {
        app.component('XtxImgPane', ImgPane)
        app.component('XtxSku', Sku)
    }
}
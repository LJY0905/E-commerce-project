<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      :to="`/detail/${item.id}`"
      class="goods-item"
      v-for="item in goodsList"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.price }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { getHotGoodsAPI } from '@/apis/detail'

const props = defineProps({
  type: {
    type: Number,
    default: 1 //1代表24小时热销榜 2代表周热销榜 3代表总热销榜
  }
})

const titleList = { 1: '日热榜', 2: '周热榜' }
const title = computed(() => {
  return titleList[props.type]
})
const goodsList = ref([])
const route = useRoute()
const getHotList = async () => {
  const params = {
    id: route.params.id,
    type: props.type //1:日榜 2:周榜
  }
  const { result } = await getHotGoodsAPI(params)
  goodsList.value = result
  console.log(goodsList.value)
}

getHotList()
</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>

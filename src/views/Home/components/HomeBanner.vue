<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

const bannerList = ref([])

const geyBannerList = async () => {
  try {
    const { result: res = [] } = await getBannerAPI({ distributionSite: '1' })
    console.log(res)
    bannerList.value = res
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  geyBannerList()
})
</script>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>

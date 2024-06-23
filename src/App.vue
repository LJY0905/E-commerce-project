<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <div class="test">test scss</div>
</template>

<style lang="scss" scoped>
.test {
  color: $priceColor;
}
</style>

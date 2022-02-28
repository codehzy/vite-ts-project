<template>
  <div>
    <span v-for="i in list">{{ i }}</span>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
// 接收父组件提供的数据
const list: any = inject('list')
</script>

<style lang="scss" scoped></style>

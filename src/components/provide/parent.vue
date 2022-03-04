<template>
  <div>
    <child></child>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import child from './child.vue'

const title = ref('provideNice')

provide('parentTitle', title)
</script>

<style lang="scss" scoped></style>

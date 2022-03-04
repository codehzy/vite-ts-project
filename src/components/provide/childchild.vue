<template>
  <div>{{ parentTitle }}</div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const parentTitle = inject('parentTitle')
</script>

<style lang="scss" scoped></style>

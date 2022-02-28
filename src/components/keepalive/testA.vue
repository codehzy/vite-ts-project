<template>
  <div @click="increment">test a : {{ number }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const number = ref(0)
const increment = () => {
  number.value++
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    child
    <input ref="input" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const list = ['123', '345']
const input = ref<HTMLInputElement>()
const focus = () => {
  input.value?.focus()
}

defineExpose({ list, focus })
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <span v-for="i in list" :key="i">{{ i }} - </span>
  </div>
  <ChildComponent @add="handleAdd"></ChildComponent>
</template>

<script lang="ts" setup>
import ChildComponent from './child.vue'
import { ref } from 'vue'
const list = ref(['javascript', 'html', 'css'])

const handleAdd = (value: string) => {
  list.value.push(value)
}
</script>

<style lang="scss" scoped></style>

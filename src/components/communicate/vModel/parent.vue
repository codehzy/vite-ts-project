<template>
  <div>
    <span v-for="i in list">{{ i }}--</span>
    <ChildComponent :list="list"></ChildComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChildComponent from './child.vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
</script>

<style lang="scss" scoped></style>

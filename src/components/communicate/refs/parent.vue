<template>
  <div class="flex justify-center mt-4">
    <div>
      <span v-for="i in childRefs?.list">{{ i }} -- </span>
    </div>
    <ChildComponent ref="childRefs"></ChildComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../../button.vue'
import ChildComponent from './child.vue'

const childRefs = ref<any>()
</script>

<style lang="scss" scoped></style>

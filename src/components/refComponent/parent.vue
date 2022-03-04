<template>
  <div>
    parent
    <child ref="childRef"></child>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import child from './child.vue'

const childRef = ref()
onMounted(() => {
  console.log(childRef.value.list)
  childRef.value.focus()
})
</script>

<style lang="scss" scoped></style>

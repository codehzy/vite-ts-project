<template>
  <button class="btn-primary">
    <slot>我是插槽的默认值</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'todoButton'
})
</script>

<style lang="scss" scoped>
.btn-primary {
  color: red;
}
</style>

<template>
  <div class="flex justify-center mt-4">
    <p>props----:</p>
    <div>
      <Parent></Parent>
    </div>
  </div>
  <div class="flex justify-center mt-4">
    -------------------------我是分割线-------------------------------
  </div>
</template>

<script lang="ts" setup>
import Children from './children.vue'
import Parent from './parent.vue'
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <header>
      <div>
        <span v-for="(item, index) in list">
          <slot :item="item"></slot>
        </span>
      </div>
    </header>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const list = ref(['Feed a cat', 'Buy milk'])
</script>

<style lang="scss" scoped></style>

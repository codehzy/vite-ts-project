<template>
  <div>
    <span v-for="i in props.list">{{ i }} - </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped></style>

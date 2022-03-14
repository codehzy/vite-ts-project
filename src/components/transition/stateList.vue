<template>
  <div>
    <input v-model.number="number" type="number" step="20" />
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import gsap from 'gsap'

const number = ref(0)
const tweenedNumber = ref(0)

const animatedNumber = computed(() => {
  return tweenedNumber.value.toFixed(0)
})

watch(number, (newValue, oldValue) => {
  tweenedNumber.value = newValue
})
</script>

<style lang="scss" scoped></style>

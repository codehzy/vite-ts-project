<template>
  <div>
    <div class="flex justify-center mt-4">
      <keep-alive>
        <test-a v-if="flag"></test-a>
        <test-b v-else></test-b>
      </keep-alive>
    </div>
    <div class="flex justify-center mt-4" @click="toggleButton">
      <button
        class="btn bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white"
      >
        切换
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TestA from './testA.vue'
import TestB from './testB.vue'

const flag = ref(true)

const toggleButton = () => {
  flag.value = !flag.value
}
</script>

<style scoped>
h3 {
  text-align: center;
}

.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}

.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>

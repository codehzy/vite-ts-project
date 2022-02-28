<template>
  <div>
    <input type="text" v-model="value" placeholder="请输入" />
    <div>
      <Button @click="handleSubmit" :name="'添加'"></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '../../button.vue'
import { defineEmits, ref } from 'vue'

const emits = defineEmits(['add'])

const value = ref('')
const handleSubmit = () => {
  emits('add', value.value)
  value.value = ''
}
</script>

<style lang="scss" scoped></style>

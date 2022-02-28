<template>
  <ChildComponent :list="list"></ChildComponent>
  <div>
    <input type="text" v-model="value" placeholder="请输入" />
    <div>
      <Button @click="handleAdd" :name="'添加'"></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChildComponent from './children.vue'
import Button from '../../button.vue'
const list = ref(['javascript', 'html', 'css'])
const value = ref('')
const handleAdd = () => {
  if (value.value) {
    list.value.push(value.value)
    value.value = ''
  } else {
    alert('请输入要添加文字')
  }
}
</script>

<style lang="scss" scoped></style>

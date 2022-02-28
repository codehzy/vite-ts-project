<template>
  <ChildComponents></ChildComponents>
  <!-- 父组件 -->
  <div>
    <input v-model="value" type="text" placeholder="请输入" />
    <div>
      <Button @click="handleAdd" type="button" :name="'添加'"></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import Button from '../../button.vue'
import ChildComponents from './child.vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')
// 向子组件提供数据
provide('list', list.value)
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}
</script>

<style lang="scss" scoped></style>

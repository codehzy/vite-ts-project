<template>
  <div>
    <input v-model="inputValue" placeholder="请输入要添加的" />
    <button @click="handleAddClick">确定</button>
    <button @click="handleRemove">删除</button>
    <ul>
      <li v-for="(item, index) in list" :index="item">
        第{{ index }} --- {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const inputValue = ref('')
const list = reactive<Array<String>>([])

const handleAddClick = () => {
  list.push(inputValue.value)
  inputValue.value = ''
}

const handleRemove = () => {
  list.splice(-1, 1)
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div>
      <input type="text" placeholder="请输入" v-model="val" />
    </div>
    <div>
      <Button @click="handleAdd" :name="'添加'"></Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../../button.vue'
const val = ref('')
const props = defineProps({
  list: {
    type: Array,
    default: () => {}
  }
})

// const emits = defineEmits(['update:list'])

// 添加操作
const handleAdd = () => {
  const arr = props.list
  arr.push(val.value)
  // emits('update:list', arr)

  val.value = ''
}
</script>

<style lang="scss" scoped></style>

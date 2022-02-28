<template>
  <div>
    <input v-model="value" type="text" placeholder="请输入" />
  </div>
  <Button @click="handleAdd" :name="'添加'"></Button>
  <div class="state-css">status:css</div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, reactive } from 'vue'
import Button from '../../button.vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')

const state = reactive({
  color: 'red'
})

// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}

defineExpose({ list })
</script>

<style lang="scss" scoped>
.state-css {
  color: v-bind('state.color') !important;
}
</style>

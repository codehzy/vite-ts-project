<template>
  <todoButton>
    <div>我来使用插槽了</div>
    <Title></Title>
    <useButton>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:container>
        <p>A paragraph for the main content.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>

      <!-- <template v-slot:default>
        <p>my name is default slot</p>
      </template> -->
    </useButton>
    <scopeButton>
      <template v-slot:default="scopeName">
        <p class="green">我是要插入的作用域插槽使用值为{{ scopeName.item }}</p>
      </template>
    </scopeButton>
    <manyButton>
      <template v-slot:default="slotProps">
        <span class="blue">{{ slotProps.item }}</span>
      </template>
    </manyButton>
    <!-- 动态插槽明和解构 -->
    <manyButton>
      <template #default="{ item }">
        <span class="blue">{{ item }}</span>
      </template>
    </manyButton>
  </todoButton>
</template>

<script setup lang="ts">
import todoButton from './button.vue'
import useButton from './nameButton.vue'
import scopeButton from './scopeButton.vue'
import manyButton from './manyButton.vue'
import Title from './Title.vue'
import { ref } from 'vue'

const slotProps = ref('')
if (slotProps.value === '') {
  slotProps.value = 'nice'
} else {
  slotProps.value = 'change'
}
</script>

<style lang="scss" scoped>
.green {
  color: green;
}

.blue {
  color: blue;
}
</style>

<template>
  <div>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <button @click="shuffle">shuffle</button>
    <transition-group name="list-complete" tag="p">
      <span v-for="item in items" :key="item" class="list-complete-item">{{
        item
      }}</span>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import _ from 'lodash'

const items = ref<Array<number>>([1, 2, 3, 4, 5, 6, 7, 8, 9])
let nextNum = ref<number>(10)

const randomIndex = () => {
  return Math.floor(Math.random() * items.value.length)
}

const add = () => {
  items.value.splice(randomIndex(), 0, nextNum.value++)
}

const remove = () => {
  items.value.splice(randomIndex(), 1)
}

const shuffle = () => {
  items.value = _.shuffle(items.value)
}
</script>

<style lang="scss" scoped>
// 1
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
// 2
.flip-list-move {
  transition: transform 0.8s ease;
}

// 3
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>

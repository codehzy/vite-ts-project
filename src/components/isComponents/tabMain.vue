<template>
  <div>
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="currentTabComponentClick(tab.value)"
    >
      {{ tab.key }}
    </button>

    <keep-alive>
      <component :is="currentType" />
    </keep-alive>

    <Suspense>
      <asyncComponent />
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref, shallowRef, Suspense } from 'vue'
import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'

const asyncComponent = defineAsyncComponent(
  () => import('./asyncComponent.vue')
)

const tabs = shallowRef([
  {
    key: 'home',
    value: Home
  },
  {
    key: 'posts',
    value: Posts
  },
  {
    key: 'archive',
    value: Archive
  }
])
const currentType = shallowRef(Posts)

// 方法一
// const tabs = shallowRef([
//   {
//     key: 'home',
//     value: Home
//   },
//   {
//     key: 'posts',
//     value: Posts
//   },
//   {
//     key: 'archive',
//     value: Archive
//   }
// ])
// let currentTab = shallowRef(Home)

// const clickCurrentTab = (tab) => {
//   currentTab.value = tab
// }

// 方法二

const currentTabComponentClick = (tab) => {
  currentType.value = tab
}
</script>

<style lang="scss" scoped>
// .demo {
//   font-family: sans-serif;
//   border: 1px solid #eee;
//   border-radius: 2px;
//   padding: 20px 30px;
//   margin-top: 1em;
//   margin-bottom: 40px;
//   user-select: none;
//   overflow-x: auto;
// }

// .tab-button {
//   padding: 6px 10px;
//   border-top-left-radius: 3px;
//   border-top-right-radius: 3px;
//   border: 1px solid #ccc;
//   cursor: pointer;
//   background: #f0f0f0;
//   margin-bottom: -1px;
//   margin-right: -1px;
// }
// .tab-button:hover {
//   background: #e0e0e0;
// }
// .tab-button.active {
//   background: #e0e0e0;
// }
// .demo-tab {
//   border: 1px solid #ccc;
//   padding: 10px;
// }
</style>

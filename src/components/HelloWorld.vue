<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import keepTest from './keepalive/keepTest.vue'
import Props from './communicate/props/index.vue'
import Emits from './communicate/emits/index.vue'
import vModel from './communicate/vModel/index.vue'
import Refs from './communicate/refs/index.vue'
import Provide from './communicate/provide/index.vue'
import TexTest from './tsx/index'
import useSlot from './slot/useSlot.vue'
import provideParent from './provide/parent.vue'
import tabMain from './isComponents/tabMain.vue'
import refParent from './refComponent/parent.vue'

const count = ref(0)

const send = () => {
  // fetch("/api/posts");
  axios({
    method: 'POST',
    url: '/coffee',
    data: {
      name: 'change',
      brand: 'change',
      flavors: ['hello', '健身', 'qwe']
    },
    headers: { 'content-type': 'application/json' }
  }).then((res) => {
    console.log(res.data)
  })
}

const getData = () => {
  axios({
    method: 'GET',
    url: '/coffee'
  })
}
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
  >
    <div class="shrink-0">
      <img
        class="h-12 w-12"
        src="https://cn.vitejs.dev/logo.svg"
        alt="ChitChat Logo"
      />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>

  <div class="flex justify-center mt-4" @click="send">
    <button class="btn btn-green">Button</button>
  </div>

  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4"
  >
    <div class="sm:flex">
      <div class="sm:flex-shrink-0">
        <img
          class="h-48 w-full object-cover sm:h-full sm:w-48"
          src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          alt="Man looking at item at a store"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          Case study
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Finding customers for your new business</a
        >
        <p class="mt-2 text-gray-500">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-4">
    <button class="btn bg-red-500 hover:bg-blue-700 rounded-xl">
      Hover me
    </button>
  </div>

  <div class="flex justify-center mt-4">
    <button
      class="btn bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white"
    >
      Save changes
    </button>
  </div>

  <form>
    <label class="block">
      <span class="block text-sm font-medium text-slate-700">Username</span>
      <!-- Using form state modifers, the classes can be identical for every input -->
      <input
        type="text"
        value="tbone"
        disabled
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
    </label>
    <label class="block text-sm font-medium mt-2">Email</label>
    <input
      type="text"
      placeholder="请输入邮箱"
      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />
  </form>

  <!-- keepalive -->
  <keepTest></keepTest>

  <!-- props -->
  <Props></Props>

  <!-- emits -->
  <Emits></Emits>

  <!-- v-model -->
  <vModel></vModel>

  <!-- refs -->
  <Refs></Refs>

  <!-- Provide -->
  <Provide></Provide>

  <!-- tsx -->
  <div class="flex justify-center">
    <TexTest></TexTest>
  </div>

  <useSlot></useSlot>

  <!-- provide inject -->
  <provideParent></provideParent>

  <!-- isComponents -->
  <tabMain></tabMain>

  <!-- ref -->
  <refParent></refParent>
</template>

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

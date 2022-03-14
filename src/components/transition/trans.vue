<template>
  Push this button to do something you shouldn't be doing:<br />

  <div :class="{ shake: noActivated }">
    <button @click="noActivated = true">Click me</button>
    <span v-if="noActivated">Oh no!</span>
  </div>

  <div
    @mousemove="xCoordinate"
    :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
    class="movearea"
  >
    <h3>Move your mouse across the screen...</h3>
    <p>x: {{ x }}</p>
  </div>

  <!-- 单元素组件的过度 -->
  <button @click="show = !show">Toggle</button>
  <transition class="changeColor" name="fade">
    <p v-if="show">fade</p>
  </transition>

  <transition name="slide-fade">
    <p v-if="show">slide-fade</p>
  </transition>

  <transition name="bounce">
    <p v-if="show">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis
      enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi
      tristique senectus et netus.
    </p>
  </transition>

  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__flash"
    :duration="{ enter: 5000, leave: 5000 }"
  >
    <p v-if="show">hello</p>
  </transition>

  <h2 class="my-element">An animated element keyFrame</h2>

  <h1 class="animate__animated animate__bounce">An animated element</h1>

  <transition name="jsHookBefore" @enter="enter" :css="false"> </transition>

  <!-- <transition>
    <button v-if="docState === 'saved'" key="saved">Edit</button>
    <button v-else-if="docState === 'edited'" key="edited">Save</button>
    <button v-else-if="docState === 'editing'" key="editing">Cancel</button>
  </transition> -->

  <transition>
    <button :key="docState">{{ buttonMessage }}</button>
  </transition>

  <transition name="no-mode-fade" mode="out-in">
    <button v-if="on" key="on" @click="on = false">on</button>
    <button v-else key="off" @click="on = true">off</button>
  </transition>

  <div class="img-contain">
    <div class="overlay">
      <p class="overlay-text">I don't like this one</p>
      <button @click="toggleShow">Replace!</button>
    </div>
    <transition name="flip" mode="out-in">
      <div v-if="!isShowing">
        <slot name="flip"></slot>
      </div>
      <img
        v-else
        src="https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const noActivated = ref(false)
const x = ref(0)
const show = ref(true)
const docState = ref('saved')
const on = ref(false)
const isShowing = ref(false)

const xCoordinate = (e: any) => {
  x.value = e.clientX
}
const enter = (el: any) => {
  console.log('css动画的js钩子函数执行')
}

const buttonMessage = computed(() => {
  switch (docState.value) {
    case 'saved':
      return 'Edit'
    case 'edited':
      return 'Save'
    case 'editing':
      return 'Cancel'
  }
})

const toggleShow = () => {
  isShowing.value = !isShowing.value
}
</script>

<style lang="scss" scoped>
@import './index.scss';

.movearea {
  transition: 0.2s background-color ease;
}

// 单元素组件的过度
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-to .fade-leave-to {
  opacity: 0.5;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// CSS 过渡是最常用的过渡类型之一

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

// css动画
.bounce-enter-active {
  animation: bounce-in 3s;
}

.bounce-leave-active {
  animation: bounce-in 3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    color: red;
  }

  50% {
    transform: scale(1.25);
    color: green;
  }

  75% {
    transform: scale(0);
    color: deeppink;
  }

  100% {
    transform: scale(2);
    color: deepskyblue;
  }
}

// animate.css - keyframes
.my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: fadeInRightBig;
  animation-duration: 2s;
}

// 过渡模式
.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 0.5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}

button {
  background: #05ae7f;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

// 图片点击切换的过度
.img-contain {
  width: 250px;
  height: 160px;
  overflow: hidden;
  transform-origin: 50% 50%;
}

img {
  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s all ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s all ease-in;
}

.overlay-text {
  margin-top: 40px;
}

h4 {
  margin: 0 0 15px;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
  transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>

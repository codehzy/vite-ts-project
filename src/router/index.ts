import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWord from '../components/Helloworld.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'hello-word', component: HelloWord },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('../components/canvas/canvasA')
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('../components/echarts/echarts')
  }
]

const router = createRouter({
  history: createWebHistory('/vite-ts-project/'),
  routes
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
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
  },
  {
    path: '/cssNew',
    name: 'cssNew',
    component: () => import('../components/cssNew/cssNew')
  },
  {
    path: '/piniaTest',
    name: 'piniaTest',
    component: () => import('../components/piniaComponent/piniaTest')
  }
]

const router = createRouter({
  history: createWebHashHistory('/vite-ts-project/'),
  routes
})

export default router

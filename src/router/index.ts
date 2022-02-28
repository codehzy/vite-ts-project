import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWord from '../components/Helloworld.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'hello-word', component: HelloWord },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('../components/canvas/canvasA')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createApp } from 'vue'
import App from './App.vue'
// import './assets/index.css'
import router from './router/index'
import { createPinia } from 'pinia'
import 'animate.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import initializeHttpInterceptors from '@/services/http/interceptors'

initializeHttpInterceptors()
createApp(App).mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import 'tw-elements'

createApp(App).use(router).use(createPinia()).mount('#app')

import './styles/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'

const app = createApp(App)

app.use(createPinia())
app.use(VueSplide)
app.use(router)

app.mount('#app')

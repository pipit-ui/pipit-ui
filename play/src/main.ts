import { createApp } from 'vue'
import PloverUI from 'pipit-ui'
import '@pipit-ui/theme-chalk/src/index.scss'
import App from './app.vue'

const app = createApp(App)
app.use(PloverUI)
app.mount('#app')

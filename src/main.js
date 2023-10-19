import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia';
import stores from './stores/index.js'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

stores.forEach(store => {
    pinia.use(store);
});


app.mount('#app')

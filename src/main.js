import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toasity from 'vue3-toastify'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiPencilSquare, OiLink, OiSearch } from "oh-vue-icons/icons";
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import 'vue3-toastify/dist/index.css';

addIcons(BiPencilSquare, OiLink, OiSearch)

const app = createApp(App)
app.component("VIcon", OhVueIcon);
app.use(createPinia())
app.use(router)
app.use(Vue3Toasity,
  { autoClose: 3000 }
)

app.mount('#app')

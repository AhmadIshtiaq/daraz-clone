import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router.js'
import store from './store/index.js';
import NavBar from './components/NavBar.vue'

const app = createApp(App)
app.use(router)
app.use(store)

app.component('NavBar', NavBar)
import 'bootstrap/dist/js/bootstrap.js';
app.mount('#app')

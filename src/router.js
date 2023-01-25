import { createRouter, createWebHistory } from "vue-router";
import home from './views/TheHome.vue';
import about from './views/AboutUs.vue';
import cart from './views/TheCart.vue';
import prodDetail from './views/ProdDetail.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: home },
        { path: '/:id', name: 'prodDetail', component: prodDetail, props: true },
        { path: '/cart', component: cart },
        { path: '/about', component: about },
    ]
})
export default router
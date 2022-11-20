import { createWebHistory, createRouter } from "vue-router"
import HomePage from '../components/HomePage.vue'
import ProductPage from '../components/ProductPage.vue'
const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/product',
        name: 'product-page',
        component: ProductPage
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;

//1. First we are importing the vue-router npm and creating router and web history
//2. Importing homepage component
//3. Importing ProductPage component
//4. Creating an array of the routes of the components
//5. Configurating the router and passing the history and all components
//6. Remember to import the router in the main.js
                // "import router from './router'

                // createApp(App).use(router).mount('#app')"
import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage.vue';
import ProductPage from '../components/ProductPage.vue';
const routes = [
    {
        path:'/',
        name:'home-page',
        component:HomePage
    },
    {
        path:'/product',
        name:'product-page',
        component:ProductPage,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
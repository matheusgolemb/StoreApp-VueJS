import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage.vue';
import ProductPage from '../components/ProductPage.vue';
import LoginPage from '../components/LoginPage.vue';
import CartPage from '../components/CartPage.vue'
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
    },
    {
        path: '/login',
        name: 'login-page',
        component: LoginPage
    },
    {
        path: '/cart',
        name: 'cart-page',
        component: CartPage
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
import { createRouter, createWebHistory, type RouteRecordRaw  } from "vue-router";
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import ('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import ('../views/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import Vue from 'vue';
import Router from 'vue-router';
import {ifNotAuthenticated, ifAuthenticated} from '@/services/middleware';
import DashLayout from '@/layouts/Dash';

const Login = () => import('@/views/Auth/UserLogin');
const Register = () => import('@/views/Auth/UserRegister');
const Main = () => import('@/views/Dashboard/Main');

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: DashLayout,
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: 'dashboard',
                    component: Main,
                    name: 'dashboard'
                }]
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
            beforeEnter: ifNotAuthenticated
        }
    ]
});

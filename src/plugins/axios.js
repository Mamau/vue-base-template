import Vue from 'vue';
import axios from 'axios';
import store from './../store';

import Trobber from '@/components/Trobber';

const trobber = Vue.prototype.$Trobber = new Vue(Trobber).$mount();
document.body.appendChild(trobber.$el);

const baseUrl = `${process.env.VUE_APP_URL}${process.env.VUE_APP_API_PATH}`;
const clientErrors = /^4[0-9]+$/;
const serverErrors = /^5[0-9]+$/;

const instanceAxios = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json'
    }
});

const createSetAuthInterceptor = config => {
    trobber.start();
    let token = localStorage.getItem('token') || store.state.auth.token;
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
};

instanceAxios.interceptors.request.use(createSetAuthInterceptor);

const createUpdateAuthInterceptor = () => error => {
    trobber.finish();
    if (error.response.status === 401) {
        store.dispatch('logout').then(() => Vue.prototype.rootRouter.push({ name: 'login' }));
    } else if (error.response.status === 400) {
        return error.response.data;
    } else if (clientErrors.test(error.response.status)) {
        return Promise.reject(new Error(error));
    } else if (serverErrors.test(error.response.status)) {
        return Promise.reject(new Error(error));
    }
};

const updateAuthCb = createUpdateAuthInterceptor();
instanceAxios.interceptors.response.use(null, updateAuthCb);

export default {
    install(Vue) {
        Vue.prototype.$axios = instanceAxios;
    }
};

export {instanceAxios};

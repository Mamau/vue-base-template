import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from './config/storage';

import auth from './modules/auth/index';

import {instanceAxios} from './../plugins/axios';

Vuex.Store.prototype.$axios = instanceAxios;
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth
    },
    plugins: [createPersistedState]
});

import Vue from 'vue';
import './plugins/vuetify';
import App from './layouts/App.vue';
import router from './router';
import store from '@/store/index';
import './registerServiceWorker';
import axios from './plugins/axios';
import {sync} from 'vuex-router-sync';

Vue.config.productionTip = false;
Vue.use(axios);
sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

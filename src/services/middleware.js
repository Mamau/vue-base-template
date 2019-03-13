import store from '@/store';

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
    } else {
        next({ name: 'dashboard' });
    }
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
    } else {
        next({ name: 'login' });
    }
};

export {ifNotAuthenticated, ifAuthenticated};

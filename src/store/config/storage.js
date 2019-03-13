import CreatePersistedState from 'vuex-persistedstate';

let PersistedState;

if (process.browser) {
    const persistedStateConfig = {
        key: 'store',
        storage: window.localStorage,
        paths: [
            'auth'
        ]
    };

    PersistedState = CreatePersistedState(persistedStateConfig);
}

export default PersistedState;

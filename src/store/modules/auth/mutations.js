import {defaultState} from './index';

const AUTH_SUCCESS = (state, data) => {
    state.auth = 'success';
    state.token = data.token;
    state.paymentWallet = data.paymentWallet;
    state.personalWallet = data.personalWallet;
    state.username = data.username;
};

const AUTH_LOGOUT = (state) => {
    Object.assign(state, defaultState);
};


export default {
    AUTH_SUCCESS,
    AUTH_LOGOUT
};

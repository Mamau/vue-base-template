import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const defaultState = {
    token: null
};

export default {
    state: defaultState,
    actions,
    mutations,
    getters
};

export {defaultState};

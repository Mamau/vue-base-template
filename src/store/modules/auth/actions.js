async function loginAction({ commit }, payload) {
    try {
        let { data } = await this.$axios.post('accounts/login/', payload);
        localStorage.setItem('token', data.token);
        commit('AUTH_SUCCESS', data);
    } catch (e) {
        throw e;
    }
}


export default {
    loginAction
};

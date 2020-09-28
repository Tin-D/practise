const state = {
    a: 30,
    b: 60,
}
const getters = {
    sumWithRootCount(state, getters, rootState, rootGetters) {
        // console.log(state, getters, rootState, rootGetters);
        return 123;
    }
}
const mutations = {
    mu(state) {
        console.log(13515);
        state.a = 666 + 2
    },
}
const actions = {
    ac({ commit }) {
        commit('mu')
    },
}
export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}
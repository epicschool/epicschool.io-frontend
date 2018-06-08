import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';

Vue.use(Vuex);

const mutations: MutationTree<{}> = {

};

const actions: ActionTree < {}, any > = {
    RESET({ commit }) {
        commit('account/resetState', null, {root: true});
        // commit('settings/resetState', null, {root: true});

        // Clear also the local storage
        localStorage.clear();
    },
};

const getters = {

};

const state: {} = {

};

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default module;

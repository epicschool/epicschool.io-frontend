import Vue from "vue";
import Vuex, { MutationTree, ActionTree } from "vuex";

Vue.use(Vuex);

interface State {
    
}

const mutations: MutationTree<State> = {
    
};

const actions: ActionTree < State, any > = {
    RESET({ commit }) {
        commit('account/resetState', null, {root: true});
        commit('settings/resetState', null, {root: true});

        // Clear also the local storage
        localStorage.clear();
    }
};

const getters = {

};

const state: State = {

}

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default module;
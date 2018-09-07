import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';
import { User } from '../../../models/user';
import axios from 'axios';

Vue.use(Vuex);

interface State {
    currentUser: User;
    loggedIn: boolean;
}

const mutations: MutationTree<State> = {
    setCurrentUser: (currentState, currentUser) => (currentState.currentUser = currentUser),
    setApiToken: (currentState, apiToken) => {
        // Update the local storage by hand
        localStorage.removeItem('api_token');
        localStorage.setItem('api_token', apiToken);
        axios.defaults.headers.common.Authorization = 'Bearer '.concat(apiToken);
        currentState.loggedIn = true;
    },

    logout: (currentState) => {
        currentState.loggedIn = false;
        currentState.currentUser = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            new_email: '',
            email_confirmation: '',
            password: '',
            new_password: '',
            email_confirmed: false,
            address: '',
            address_addition: '',
            postcode: '',
            city: '',
            country: '',
        };

        // console.log('Reset the account currentUser and the loggedIn status');
    },

    resetState() {
        // acquire initial state
        const s = initialState();

        Object.keys(s).forEach((key) => {
            state[key] = s[key];
        });
    },
};

const actions: ActionTree < State, any > = {

};

const getters = {
    currentUser(currentState: State) {
        return currentState.currentUser;
    },

    loggedIn(currentState: State): boolean {
        return currentState.loggedIn;
    },

    isEmailConfirmed(currentState: State): boolean {
        return currentState.currentUser.email_confirmed;
    },

};

function initialState() {
    return {
        loggedIn: false,
        currentUser: {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            new_email: '',
            email_confirmation: '',
            password: '',
            new_password: '',
            email_confirmed: false,
            address: '',
            address_addition: '',
            postcode : '',
            city: '',
            country: '',
        },
    }; }

const state: State = initialState();

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default module;

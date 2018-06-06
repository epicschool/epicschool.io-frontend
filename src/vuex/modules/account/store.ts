import Vue from "vue";
import Vuex, { MutationTree, ActionTree } from "vuex";
import { User } from "../../../models/user";
import axios from 'axios';

Vue.use(Vuex);

interface State {
    current_user: User;
    loggedIn: boolean
}

const mutations: MutationTree<State> = {
    setCurrentUser: (state, current_user) => (state.current_user = current_user),
    
    setApiToken: (state, api_token) => {
        // Update the local storage by hand
        localStorage.removeItem("api_token");
        localStorage.setItem('api_token', api_token);
        axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(api_token);
        state.loggedIn = true
    },

    logout: (state) => {
        state.loggedIn = false
        state.current_user = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            new_email: '',
            email_confirmation: '',
            password: '',
            password_confirmation: '',
            new_password: '',
            email_confirmed:false,
            address : '',
            address_addition: '',
            postcode : '',
            city : '',
            country : '',
        }

        console.log("Reset the account currentUser and the loggedIn status")
    },

    resetState() {
        // acquire initial state
        const s = initialState()

        Object.keys(s).forEach(key => {
            state[key] = s[key]
        })
    }
};

const actions: ActionTree < State, any > = {

};

const getters = {
    currentUser(state:State) {
        return state.current_user
    },

    loggedIn(state:State): boolean {
        return state.loggedIn
    },

    isEmailConfirmed(state:State): boolean {
        return state.current_user.email_confirmed
    }

};

function initialState() {
    return {
        loggedIn: false,
        current_user: {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            new_email: '',
            email_confirmation: '',
            password: '',
            password_confirmation: '',
            new_password: '',
            email_confirmed:false,
            address : '',
            address_addition: '',
            postcode : '',
            city : '',
            country : '',
        }
    }    
}

const state: State = initialState()

const module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default module;
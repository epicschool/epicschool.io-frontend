import Vue from 'vue';
import Vuex from 'vuex';
import * as User from '../models/user';

// Import different modules
import account from './modules/account/store';

// Utils
import utils from './utils/store';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],

    modules: {
        // All modules
        account,

        // Utils
        utils,
    },
});

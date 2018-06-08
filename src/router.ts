import Vue from 'vue';
import Router from 'vue-router';

import Comingsoon from './components/Comingsoon.vue';

import Main from './components/Main.vue';
import Home from './components/pages/Home.vue';
import ContactUs from './components/pages/ContactUs.vue';
import Team from './components/pages/Team.vue';
import Courses from './components/pages/Courses.vue';

import Auth from './components/Auth.vue';
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';
import Register from './components/auth/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/Comingsoon',
        name: 'Comingsoon',
        component: Comingsoon,
    },
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                component: Home,
            },
            {
                path: 'home',
                name: 'home',
                component: Home,
            },
            {
                path: 'contactUs',
                name: 'contactUs',
                component: ContactUs,
            },
            {
                path: 'team',
                name: 'team',
                component: Team,
            },
            {
                path: 'courses',
                name: 'courses',
                component: Courses,
            },
        ]
    },
    {
        path: '/auth',
        component: Auth,
        children: [
            {
                path: '/',
                component: Login,
            },
            {
                path: 'login',
                name: 'login',
                component: Login,
            },
            {
                path: 'logout',
                name: 'logout',
                component: Logout,
            },
            {
                path: 'register',
                name: 'register',
                component: Register,
            },

        ]
    },

  ],
});

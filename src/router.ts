import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import ContactUs from './components/pages/ContactUs.vue';
import Team from './components/pages/Team.vue';
import Courses from './components/pages/Courses.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
    },
    {
        path: '/Team',
        name: 'Team',
        component: Team,
    },
    {
        path: '/Courses',
        name: 'Courses',
        component: Courses,
    },

  ],
});

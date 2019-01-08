import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import FourOhFour from './views/FourOhFour.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/404',
      name: 'four-oh-four',
      component: FourOhFour,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

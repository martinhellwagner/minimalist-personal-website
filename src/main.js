import Vue from 'vue';
import VueRouter from 'vue-router';

import Mixins from './scripts/index';

import App from './App.vue';
import Contact from './views/Contact.vue';
import FourOhFour from './views/FourOhFour.vue';
import Home from './views/Home.vue';
import Info from './views/Info.vue';
import Imprint from './views/Imprint.vue';
import Privacy from './views/Privacy.vue';
import Projects from './views/Projects.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.mixin(Mixins);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/404',
      name: 'four-oh-four',
      component: FourOhFour,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: Imprint,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});

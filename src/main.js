import Vue from 'vue';
import VueRouter from 'vue-router';

import Mixins from './scripts/shared';

import App from './App.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import FourOhFour from './views/FourOhFour.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.mixin(Mixins);

const router = new VueRouter({
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
    {
      path: '/jasmin',
      beforeEnter() {
        window.location = 'https://www.facebook.com/jasmin.wagner.756'
      }
    },
  ],
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

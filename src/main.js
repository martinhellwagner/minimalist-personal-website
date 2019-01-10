import Vue from 'vue';
import VueRouter from 'vue-router';

import Mixin from './assets/script';

import App from './App.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import FourOhFour from './views/FourOhFour.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.mixin(Mixin);

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
  ],
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

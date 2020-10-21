import Bowser from 'bowser';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Mixins from './scripts/view';

import App from './App.vue';

import Browser from './views/Browser.vue';
import Contact from './views/Contact.vue';
import FourOhFour from './views/FourOhFour.vue';
import Home from './views/Home.vue';
import Info from './views/Info.vue';
import Imprint from './views/Imprint.vue';
import Menu from './views/Menu.vue';
import Mode from './views/Mode.vue';
import Privacy from './views/Privacy.vue';
import Projects from './views/Projects.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.mixin(Mixins);

const userAgent = Bowser.parse(window.navigator.userAgent);
let isStupidBrowser = false;
let isStupidMode = false;

// Categorically exclude IE and Edge
if (userAgent.browser.name === 'Internet Explorer' || userAgent.browser.name === 'Microsoft Edge') {
  isStupidBrowser = true;
}

// Categorically exclude landscape mode on (small) mobile devices
if (userAgent.platform.type === 'mobile' && window.innerHeight < window.innerWidth) {
  isStupidMode = true;
} else if (window.location.href.indexOf('mode') > -1) {
  isStupidMode = false;
}

const routerSwitch = (View) => {
  if (isStupidBrowser) return Browser;
  if (isStupidMode) return Mode;
  return View;
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/browser',
      name: 'browser',
      component: routerSwitch(Browser),
    },
    {
      path: '/contact',
      name: 'contact',
      component: routerSwitch(Contact),
    },
    {
      path: '/404',
      name: 'four-oh-four',
      component: routerSwitch(FourOhFour),
    },
    {
      path: '/',
      name: 'home',
      component: routerSwitch(Home),
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: routerSwitch(Imprint),
    },
    {
      path: '/info',
      name: 'info',
      component: routerSwitch(Info),
    },
    {
      path: '/menu',
      name: 'menu',
      component: routerSwitch(Menu),
    },
    {
      path: '/mode',
      name: 'mode',
      component: routerSwitch(Mode),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: routerSwitch(Privacy),
    },
    {
      path: '/projects',
      name: 'projects',
      component: routerSwitch(Projects),
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
  render: (h) => h(App, {
    props: {
      hideNav: (isStupidBrowser || isStupidMode),
    },
  }),
});

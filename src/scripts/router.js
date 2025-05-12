import { createRouter, createWebHistory } from 'vue-router';

import bowser from './bowser';

import Browser from '../views/Browser.vue';
import Contact from '../views/Contact.vue';
import FourOhFour from '../views/FourOhFour.vue';
import HamburgerMenu from '../views/HamburgerMenu.vue';
import Home from '../views/Home.vue';
import Imprint from '../views/Imprint.vue';
import Info from '../views/Info.vue';
import Mode from '../views/Mode.vue';
import Privacy from '../views/Privacy.vue';
import Projects from '../views/Projects.vue';

const routerSwitch = (View) => {
  if (bowser.isStupidBrowser()) return Browser;
  if (bowser.isStupidMode()) return Mode;
  return View;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: routerSwitch(HamburgerMenu),
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
      path: '/:catchAll(.*)',
      name: 'NotFound',
      redirect: '/404',
    },
  ],
});

export default router;

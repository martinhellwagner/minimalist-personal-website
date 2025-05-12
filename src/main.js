import { createApp } from 'vue';

import App from './App.vue';

import bowser from './scripts/bowser';
import mixins from './scripts/mixins';
import router from './scripts/router';

const app = createApp(App, {
  hideNav: bowser.isStupidBrowser() || bowser.isStupidMode(),
});

app.mixin(mixins);
app.use(router);
app.mount('#app');

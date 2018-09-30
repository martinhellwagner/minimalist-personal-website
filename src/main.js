import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),

  mounted() {
    this.calculateHeight();
    this.placeBeachBall();

    // Events for desktop browsers
    window.addEventListener('resize', () => {
      window.location.reload();
    });

    window.addEventListener('click', () => {
      this.placeBeachBall();
    });

    // Events for mobile browsers
    window.addEventListener('orientationchange', () => {
      window.location.reload();
    });

    window.addEventListener('touchstart', () => {
      this.placeBeachBall();
    });
  },

  methods: {
    // Workaround for inconsistent height of mobile browsers
    calculateHeight: () => {
      const windowHeight = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--windowHeight', `${windowHeight}px`);
    },

    placeBeachBall: () => {
      const beachBall = document.querySelector('.beach-ball');

      const x = window.innerHeight - (beachBall.height * 2);
      const y = window.innerWidth - (beachBall.width * 2);
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);

      beachBall.style.top = `${randomX}px`;
      beachBall.style.left = `${randomY}px`;
    },
  },
});

app.$mount('#app');

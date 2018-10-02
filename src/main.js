import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),

  mounted() {
    // Smoothly fade in content after all images are loaded
    const container = document.querySelector('.container');
    this.onImagesLoaded(container, () => {
      container.classList.add('container--ready');
    });

    this.calculateHeight();
    this.placeBeachBall();

    // Event listeners
    window.addEventListener('orientationchange', () => {
      window.location.reload();
    });

    window.addEventListener('click', () => {
      this.placeBeachBall();
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

      const x = window.innerHeight - beachBall.height;
      const y = window.innerWidth - beachBall.width;
      const randomX = Math.random() * x;
      const randomY = Math.random() * y;

      beachBall.style.top = `${randomX}px`;
      beachBall.style.left = `${randomY}px`;
    },

    // Check if images are loaded
    onImagesLoaded: (container, event) => {
      const images = container.getElementsByTagName('img');
      let loaded = images.length;

      for (let i = 0; i < images.length; i += 1) {
        if (images[i].complete) {
          loaded -= 1;
        } else {
          // eslint-disable-next-line
          images[i].addEventListener('load', () => {
            loaded -= 1;
            if (loaded === 0) {
              event();
            }
          });
        }
        if (loaded === 0) {
          event();
        }
      }
    },
  },
});

app.$mount('#app');

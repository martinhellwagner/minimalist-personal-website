import Vue from 'vue';
import bowser from 'bowser';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),

  mounted() {
    const container = document.querySelector('.container');

    // Categorically exclude IE and Edge
    if (bowser.name === 'Internet Explorer' || bowser.name === 'Microsoft Edge') {
      container.classList.add('container--ie-edge');
    }

    // Smoothly fade in content after all images are loaded
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
      const windowHeight = document.documentElement.clientHeight * 0.01;
      document.documentElement.style.setProperty('--windowHeight', `${windowHeight}px`);
    },

    placeBeachBall: () => {
      const beachBall = document.querySelector('.beach-ball');

      const x = document.documentElement.clientHeight - beachBall.height;
      const y = document.documentElement.clientWidth - beachBall.width;
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);

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

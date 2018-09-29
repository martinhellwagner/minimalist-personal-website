import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

var app = new Vue({
  render: h => h(App),
  mounted() {
    this.placeBeachBall();
    document.addEventListener('click', this.placeBeachBall);
  },
  methods: {
    placeBeachBall: () => {
      const beachBalls = document.querySelectorAll('.beach-ball');

      beachBalls.forEach(beachBall => {
        const x = document.body.scrollHeight - beachBall.height;
        const y = document.body.scrollWidth  - beachBall.width;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
      
        beachBall.style.top  = randomX + 'px';
        beachBall.style.left = randomY + 'px';
      })
    }
  },
});

app.$mount('#app');

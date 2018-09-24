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
      const beachBall = document.querySelector('.beach-ball');
    
      const x = document.body.scrollHeight - (beachBall.height / 2);
      const y = document.body.scrollWidth  - (beachBall.width / 2);
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
    
      beachBall.style.top  = randomX + 'px';
      beachBall.style.left = randomY + 'px';
      beachBall.style.display = 'block';
    }
  },
});

app.$mount('#app');

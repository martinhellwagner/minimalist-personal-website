import bowser from 'bowser';

export default {
  methods: {
    init() {
      const container = document.querySelector('.container');

      // Categorically exclude IE and Edge
      if (bowser.name === 'Internet Explorer' || bowser.name === 'Microsoft Edge') {
        container.classList.add('container--ie-edge');
        container.classList.remove('container--scrollable');
      }

      // Only do certain things when container is not scrollable
      if (!container.classList.contains('container--scrollable')) {
        this.calculateHeight();
        this.placeBeachBall();

        // Event listeners
        window.addEventListener('click', () => {
          this.placeBeachBall();
        });

        window.addEventListener('touchstart', () => {
          this.placeBeachBall();
        });
      }

      // Event listener
      window.addEventListener('orientationchange', () => {
        window.location.reload();
      });
    },

    // Workaround for inconsistent height of mobile browsers
    calculateHeight() {
      document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
    },

    // Randomise numbers in range
    randomise(range) {
      return Math.floor(range * Math.random());
    },

    // Randomly place beach ball
    placeBeachBall() {
      const beachBall = document.querySelector('.beach-ball');

      const randomX = this.randomise(document.body.clientWidth - beachBall.clientWidth);
      const randomY = this.randomise(document.body.clientHeight - beachBall.clientHeight);

      beachBall.style.left = `${randomX}px`;
      beachBall.style.top = `${randomY}px`;
    },
  },
};

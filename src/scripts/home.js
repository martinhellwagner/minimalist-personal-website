// Breakpoint variables
const breakpointMedium = 768;
const breakpointMax = 1200;

// Snow variables
const snowflakes = [];
const position = [];
const coordinates = [];
const movement = [];

export default {
  name: 'home',

  mounted() {
    const home = document.querySelector('.home');
    const month = new Date().getMonth() + 1;

    // Smoothly fade in content after all images are loaded
    this.onImagesLoaded(home, () => {
      home.classList.add('home--ready');
    });

    this.calculateHeight();
    this.placeBeachBall();

    // Only show snow in December
    if (month === 12) {
      this.initSnow();
    }

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

    // Check if images are loaded
    onImagesLoaded(home, event) {
      const images = home.getElementsByTagName('img');
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

    // Initialize snowflakes
    initSnow() {
      let minSize = 12;
      let maxSize = 24;
      let numberSnowflakes = 50;

      // Responsive settings
      if (document.body.clientWidth >= breakpointMedium) {
        minSize = 16;
        maxSize = 32;
      }
      if (document.body.clientWidth >= breakpointMax) {
        numberSnowflakes = 80;
      }

      const size = maxSize - minSize;

      for (let i = 0; i < numberSnowflakes; i += 1) {
        document.write(`<span id='snowflake${i}' class='snowflake'>&#x2022;</span>`);
        snowflakes[i] = document.querySelector(`#snowflake${i}`);

        position[i] = 0.03 + (Math.random() / 10);
        coordinates[i] = 0;
        movement[i] = Math.random() * 15;

        snowflakes[i].size = this.randomise(size) + minSize;
        snowflakes[i].sink = snowflakes[i].size / 6;
        snowflakes[i].style.fontSize = `${snowflakes[i].size}px`;

        snowflakes[i].x = this.randomise(document.body.clientWidth - snowflakes[i].size);
        snowflakes[i].y = this.randomise(document.body.clientHeight - snowflakes[i].size);
        snowflakes[i].style.left = `${snowflakes[i].x}px`;
        snowflakes[i].style.top = `${snowflakes[i].y}px`;
      }

      this.moveSnow(numberSnowflakes, true);
    },

    // Move snowflakes
    moveSnow(numberSnowflakes, init) {
      for (let i = 0; i < numberSnowflakes; i += 1) {
        if (init) {
          snowflakes[i].style.opacity = 0.75;
        }

        coordinates[i] += position[i];

        snowflakes[i].y += snowflakes[i].sink;
        snowflakes[i].style.left = `${snowflakes[i].x + (movement[i] * Math.sin(coordinates[i]))}px`;
        snowflakes[i].style.top = `${snowflakes[i].y}px`;

        if (snowflakes[i].y >= document.body.clientHeight) {
          snowflakes[i].x = this.randomise(document.body.clientWidth - snowflakes[i].size);
          snowflakes[i].y = snowflakes[i].size * -1;
        }
      }

      setTimeout(() => {
        this.moveSnow(numberSnowflakes);
      }, 50);
    },
  },
};
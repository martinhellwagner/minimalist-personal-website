import bowser from 'bowser';
import lozad from 'lozad';

export default {
  methods: {
    init() {
      const container = document.querySelector('.container');
      const beachBall = document.querySelector('.beach-ball');

      // Categorically exclude IE and Edge
      if (bowser.name === 'Internet Explorer' || bowser.name === 'Microsoft Edge') {
        container.classList.add('container--ie-edge');
        container.classList.remove('container--scrollable');
      }

      this.lazyLoadImages(container);
      this.calculateHeight(container);

      if (beachBall) {
        this.placeBeachBall(beachBall);
      }

      container.addEventListener('click', (event) => {
        if (event.target.className !== 'clickable') {
          event.preventDefault();

          // Don't place beach ball randomly when clicking on link
          if (beachBall) {
            this.placeBeachBall(beachBall);
          }
        }
      });

      container.addEventListener('touchstart', (event) => {
        if (event.target.className !== 'clickable') {
          event.preventDefault();

          // Don't place beach ball randomly when clicking on link
          if (beachBall) {
            this.placeBeachBall(beachBall);
          }
        }
      });

      window.addEventListener('orientationchange', () => {
        window.location.reload();
      });

      // Set style on body according to container type
      if (container.classList.contains('container--scrollable')) {
        document.body.style.setProperty('position', 'relative');
        document.body.style.setProperty('overflow', 'auto');
      } else {
        document.body.style.setProperty('position', 'fixed');
        document.body.style.setProperty('overflow', 'hidden');
      }
    },

    // Enter page through transition
    enter(container, done) {
      container.classList.add('container--ready');
      setTimeout(() => {
        done();
      }, 300);
    },

    // Leave page through transition
    leave(container, done) {
      container.classList.remove('container--ready');
      setTimeout(() => {
        done();
      }, 300);
    },

    // Lazy-load images
    lazyLoadImages(container) {
      const lazyLoadWrappers = container.querySelectorAll('[data-lazy-loaded]');

      lazyLoadWrappers.forEach((wrapper) => {
        const image = wrapper.querySelector('.image');
        const placeholder = wrapper.querySelector('.placeholder');
        const lazyLoadObserver = lozad(image);

        lazyLoadObserver.observe();

        image.addEventListener('load', () => {
          image.classList.add('image--ready');
          placeholder.classList.remove('placeholder--ready');
        });
      });
    },

    // Workaround for inconsistent height of mobile browsers
    calculateHeight(container) {
      document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
      container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
    },

    // Randomise numbers in range
    randomise(range) {
      return Math.floor(range * Math.random());
    },

    // Randomly place beach ball
    placeBeachBall(beachBall) {
      const randomX = this.randomise(document.body.clientWidth - beachBall.clientWidth);
      const randomY = this.randomise(document.body.clientHeight - beachBall.clientHeight);

      beachBall.style.left = `${randomX}px`; // eslint-disable-line no-param-reassign
      beachBall.style.top = `${randomY}px`; // eslint-disable-line no-param-reassign
    },
  },
};

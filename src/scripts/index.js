import lozad from 'lozad';

export default {
  methods: {
    init() {
      window.addEventListener('orientationchange', () => {
        window.location.reload();
      });

      const container = document.querySelector('.container');
      const beachBall = document.querySelector('.beach-ball');

      this.lazyLoadImages(container);
      this.setHeightAndScrollBehaviour(container, container.classList.contains('container--scrollable'));

      if (beachBall) {
        this.placeBeachBall(beachBall);

        container.addEventListener('click', (event) => {
          if (!event.target.classList.contains('clickable')) {
            event.preventDefault();
            this.placeBeachBall(beachBall);
          }
        });

        container.addEventListener('touchstart', (event) => {
          if (!event.target.classList.contains('clickable')) {
            event.preventDefault();
            this.placeBeachBall(beachBall);
          }
        });
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
      const lazyLoadWrappers = container.querySelectorAll('.lazy-loaded');

      lazyLoadWrappers.forEach((wrapper) => {
        const image = wrapper.querySelector('.image');
        const placeholder = wrapper.querySelector('.placeholder');
        const lazyLoadObserver = lozad(image);

        lazyLoadObserver.observe();

        image.addEventListener('load', () => {
          setTimeout(() => {
            image.classList.add('image--ready');
            placeholder.classList.remove('placeholder--ready');
          }, 1000);
        });
      });
    },

    // Workaround for inconsistent height of mobile browsers as well as scrollbable containers
    setHeightAndScrollBehaviour(container, scrollable) {
      if (scrollable) {
        container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
        document.body.style.setProperty('--windowHeight', '100%');
        document.body.style.setProperty('position', 'relative');
        document.body.style.setProperty('overflow', 'auto');
      } else {
        container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
        document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
        document.body.style.setProperty('position', 'fixed');
        document.body.style.setProperty('overflow', 'hidden');
      }
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

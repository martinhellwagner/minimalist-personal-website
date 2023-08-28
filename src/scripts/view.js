import 'lazysizes';

export default {
  methods: {
    init() {
      window.addEventListener('orientationchange', () => {
        window.location.reload();
      });

      const clientWidth = document.body.clientWidth; // eslint-disable-line prefer-destructuring
      const clientHeight = document.body.clientHeight; // eslint-disable-line prefer-destructuring

      const container = document.body.querySelector('.container');
      const beachBall = container.querySelector('.beach-ball');

      this.setHeightAndScrollBehaviour(container, container.classList.contains('container--scrollable'));

      if (beachBall) {
        this.placeBeachBall(beachBall, clientWidth, clientHeight);

        container.addEventListener('click', (event) => {
          if (!event.target.classList.contains('clickable')) {
            event.preventDefault();
            this.placeBeachBall(beachBall, clientWidth, clientHeight);
          }
        });

        container.addEventListener('touchstart', (event) => {
          if (!event.target.classList.contains('clickable')) {
            event.preventDefault();
            this.placeBeachBall(beachBall, clientWidth, clientHeight);
          }
        });
      }
    },

    // Enter page through transition
    enter(container, done) {
      container.querySelector('.content').classList.add('content--ready');

      const navigationIconMenu = container.querySelector('.navigation-icon--menu');
      const navigationIconClosing = container.querySelector('.navigation-icon--closing');

      if (navigationIconMenu) {
        navigationIconMenu.classList.add('navigation-icon--menuOpen');
      }

      if (navigationIconClosing) {
        navigationIconClosing.classList.add('navigation-icon--menuOpened');
      }

      setTimeout(() => {
        done();
      }, 300);
    },

    // Leave page through transition
    leave(container, done) {
      container.querySelector('.content').classList.remove('content--ready');

      const navigationIconMenu = container.querySelector('.navigation-icon--menu');
      const navigationIconClosing = container.querySelector('.navigation-icon--closing');

      if (navigationIconMenu) {
        navigationIconMenu.classList.remove('navigation-icon--menuOpen');
      }

      if (navigationIconClosing) {
        navigationIconClosing.classList.remove('navigation-icon--menuOpened');
      }

      setTimeout(() => {
        done();
      }, 300);
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
    placeBeachBall(beachBall, clientWidth, clientHeight) {
      const randomX = this.randomise(clientWidth - beachBall.clientWidth);
      const randomY = this.randomise(clientHeight - beachBall.clientHeight);

      beachBall.style.left = `${randomX}px`; // eslint-disable-line no-param-reassign
      beachBall.style.top = `${randomY}px`; // eslint-disable-line no-param-reassign
    },
  },
};

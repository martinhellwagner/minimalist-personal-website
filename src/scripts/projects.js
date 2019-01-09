import bowser from 'bowser';

export default {
  name: 'projects',

  mounted() {
    const container = document.querySelector('.container');

    // Categorically exclude IE and Edge
    if (bowser.name === 'Internet Explorer' || bowser.name === 'Microsoft Edge') {
      container.classList.add('container--ie-edge');
      container.classList.remove('container--scrollable');
    }

    this.calculateHeight();

    // Event listener
    window.addEventListener('orientationchange', () => {
      window.location.reload();
    });
  },

  methods: {
    // Workaround for inconsistent height of mobile browsers
    calculateHeight() {
      document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
    },
  },
};

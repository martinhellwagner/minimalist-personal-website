<!-- TEMPLATE -->
<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'app',

  mounted() {
    const app = document.querySelector('.app');
    const container = document.querySelector('.container');

    // Smoothly fade in content after all images are loaded
    this.onImagesLoaded(container, () => {
      app.classList.add('app--ready');
    });
  },

  methods: {
    // Check if images are loaded
    onImagesLoaded(container, event) {
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
};
</script>

<!-- STYLE-->
<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s linear;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

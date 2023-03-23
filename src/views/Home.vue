<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

    <div class="header">
      <span>Made with</span>
      <a href="https://open.spotify.com/album/7oD9oCCtFhg5RoLtMR5TKl" target="_blank" class="heart" aria-label="Open Spotify link">
        <img class="image clickable" src="/images/home/footer-heart.svg" alt="Heart">
      </a>

      <span>and</span>
      <a href="https://vuejs.org" target="_blank" class="vue" aria-label="Browse Vue docs">
        <img class="image clickable" src="/images/home/footer-vue.svg" alt="Vue">
      </a>
    </div>

    <div class="martin lazyload-wrapper">
      <img class="image lazyload" data-src="/images/home/martin.jpg" title="Martin Hellwagner">
      <div class="placeholder" style="background-color: #ffcb9e" />
    </div>

    <div class="description">
      <p class="margin-top-xlarge margin-bottom-none">
        <b>Hi, my name is Martin.</b>
      </p>
      <p class="margin-top-large margin-bottom-small">
        <!-- eslint-disable-next-line max-len -->
        I'm an experienced Full Stack Web Developer as well as DevOps Engineer by day and a passionate Liquid Drum & Bass DJ by night.
        <!-- eslint-disable-next-line max-len -->
        I'm currently based in <a class="clickable" href="https://www.google.com/maps/place/Linz,+Austria/@48.2950437,14.2573657,12z" target="_blank">Linz, Austria</a>.
      </p>
    </div>

    <div class="footer">
      <router-link :to="{ name: 'imprint' }" class="imprint clickable colored">
        Imprint
      </router-link>

      <router-link :to="{ name: 'privacy' }" class="privacy clickable colored">
        Privacy
      </router-link>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Home',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/home.scss";
</style>

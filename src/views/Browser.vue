<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <div class="description">
        <p class="margin-top-none margin-bottom-none">
          <b>Hi there.</b>
        </p>
        <p class="margin-top-large margin-bottom-none">
          It seems like you're using an old or poorly performing browser.
          <!-- eslint-disable-next-line max-len -->
          Why not treat yourself to the newest <a href="https://www.google.com/chrome" class="clickable" target="_blank">Chrome</a>
          <!-- eslint-disable-next-line max-len -->
          or <a href="https://www.mozilla.org/en-US" class="clickable" target="_blank">Firefox</a> and step into the future?
        </p>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Browser',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/base.scss";
</style>

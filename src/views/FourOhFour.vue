<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <!-- eslint-disable max-len -->
    <div class="description">
      <p>
        <b>Four-Oh-Four!</b>
      </p>
      <p>
        Unfortunately, this seems to be a dead end.<br>
        Why not go <router-link :to="{ name: 'home' }" class="clickable">back to the start</router-link>?
      </p>
    </div>

    <div class="description description--browser">
      <p>
        <b>Hi there.</b>
      </p>
      <p>
        It seems like you're using an old or poorly performing browser.
        Why not treat yourself to the newest <a href="https://www.google.com/chrome" class="clickable" target="_blank">Chrome</a>
        or <a href="https://www.mozilla.org/en-US" class="clickable" target="_blank">Firefox</a> and step into the future?
      </p>
    </div>
    <!-- eslint-enable max-len -->
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'FourOhFour',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>

<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <!-- eslint-disable max-len -->
    <div class="description">
      <b>Four-Oh-Four!</b>
      Unfortunately, this seems to be a dead end. Why not go <router-link :to="{ name: 'home' }">back to the start</router-link>?
    </div>
    <!-- eslint-enable max-len -->

    <div class="description description--browser">
      <b>Hi there.</b>
      It seems like you're using an old or poorly performing browser.
      Why not treat yourself to the newest <a href="https://www.google.com/chrome" target="_blank">Chrome</a>
      or <a href="https://www.mozilla.org/en-US" target="_blank">Firefox</a> and step into the future?
    </div>

  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'four-oh-four',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/base.scss";
</style>

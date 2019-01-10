<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="../assets/images/home/beach-ball.png">

    <!-- eslint-disable max-len -->

    <span class="description">
      <b>Four-Oh-Four!</b>
      Unfortunately, this seems to be a dead end. Why not go back to the <router-link :to="{ name: 'home' }">start</router-link>?
    </span>

    <span class="description description--browser">
      <b>Hi there.</b>
      It seems like you're using an old or poorly performing browser.
      Why not treat yourself to the newest <a href="https://www.google.com/chrome" target="_blank">Chrome</a>
      or <a href="https://www.mozilla.org/en-US" target="_blank">Firefox</a> and step into the future?
    </span>

    <!-- eslint-enable max-len -->
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
  @import "../assets/style.scss";
</style>

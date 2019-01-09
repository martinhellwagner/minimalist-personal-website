<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <span class="description">
      <router-link :to="{ name: 'home' }">Home</router-link>

      <img src="../images/projects/dynatrace.png" style="width: 600px">
      <img src="../images/projects/fredmansky.png" style="width: 600px">
      <img src="../images/projects/karriere-blog.png" style="width: 600px">
      <img src="../images/projects/karriere-hr.png" style="width: 600px">
      <img src="../images/projects/kusser.png" style="width: 600px">
      <img src="../images/projects/listentoleena.png" style="width: 600px">
      <img src="../images/projects/neubau-eyewear.png" style="width: 600px">
      <img src="../images/projects/talentor.png" style="width: 600px">
    </span>

    <span class="description description--browser">
      <b>Hi there.</b>
      It seems like you're using an old or poorly performing browser.
      Why not treat yourself to the newest <a href="https://www.google.com/chrome" target="_blank">Chrome</a>
      or <a href="https://www.mozilla.org/en-US" target="_blank">Firefox</a> and step into the future?
    </span>
  </div>
</template>

<!-- SCRIPT -->
<script>
  export default {
    mounted() {
      const beachBall = document.querySelector('.beach-ball');
      beachBall.style.opacity = 0;
    },
    destroyed() {
      const beachBall = document.querySelector('.beach-ball');
      beachBall.style.opacity = 1;
    }
  }
</script>

<!-- SCRIPT -->
<script src="../scripts/projects.js" />

<!-- STYLE -->
<style lang="scss">
  @import "../main.scss";
</style>

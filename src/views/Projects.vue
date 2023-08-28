<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <div class="description">
        <p class="margin-top-none margin-bottom-none">
          <b>Want to check out my work?</b>
        </p>

        <p class="margin-top-large margin-bottom-large">
          You'll find a list of all the projects I've recently been working on
          <a href="https://fredmansky.at/t/martin-hellwagner" class="clickable" target="_blank">right here</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Projects',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/base.scss";
</style>

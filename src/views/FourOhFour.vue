<!-- TEMPLATE -->
<template>
  <div class="container">
    <RouterLink :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </RouterLink>

    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <div class="description">
        <p class="margin-top-none margin-bottom-none">
          <b>Four-Oh-Four!</b>
        </p>
        <p class="margin-top-large margin-bottom-none">
          Unfortunately, this seems to be a dead end.<br>
          Why not choose another site?
        </p>
      </div>
    </div>
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
  @use "../styles/base.scss";
</style>

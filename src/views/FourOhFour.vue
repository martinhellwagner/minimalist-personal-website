<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="/images/beach-ball.png">

    <div class="description">
      <p class="margin-top-none margin-bottom-none">
        <b>Four-Oh-Four!</b>
      </p>
      <p class="margin-top-large margin-bottom-none">
        Unfortunately, this seems to be a dead end.<br>
        <!-- eslint-disable-next-line max-len -->
        Why not choose another site?
      </p>
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
  @import "../styles/base.scss";
</style>

<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <div class="description">
        <p class="margin-top-none margin-bottom-none">
          <b>Hi there.</b>
        </p>
        <p class="margin-top-large margin-bottom-none">
          Landscape mode on a mobile device isn't really the best way to enjoy content on the Internet, don't you think?<br>
          Please turn your device into portrait mode to view this website.
        </p>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Mode',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @use "../styles/base.scss";
</style>

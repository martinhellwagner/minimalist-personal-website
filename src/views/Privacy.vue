<!-- TEMPLATE -->
<template>
  <div class="container">
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <img class="beach-ball" src="/images/beach-ball.png">

    <div class="description">
      <p class="margin-top-none margin-bottom-none">
        <b>It's as simple as that...</b>
      </p>

      <p class="margin-top-large margin-bottom-none">
        This website doesn't collect, store or process any personal data whatsoever.
        Your data is your data, and will stay that way.
        No Google Analytics, no Facebook Pixel, nothing.
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Contact',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/contact.scss";
</style>

<!-- TEMPLATE -->
<template>
  <div class="container">
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <img class="beach-ball" src="/images/beach-ball.png">

    <div class="description margin-bottom-none">
      <p class="margin-top-none margin-bottom-none">
        <b>Media Owner</b>
      </p>

      <p class="margin-top-large margin-bottom-xlarge">
        Martin Hellwagner, MSc<br>
        Landstraße 58<br>
        4020 Linz, Austria<br>
        <!-- eslint-disable-next-line max-len -->
        <a href="mailto:martin.hellwagner@gmail.com?subject=Imprint" class="clickable" target="_blank">martin.hellwagner@gmail.com</a>
      </p>
    </div>

    <div class="description description--hidden margin-bottom-none">
      <p class="margin-top-xlarge margin-bottom-none">
        <b>Provider Information</b>
      </p>

      <p class="margin-top-large margin-bottom-none">
        <!-- eslint-disable-next-line max-len -->
        Due to the Austrian <i>§ 5 ECG (E-Commerce Gesetz)</i>, I am obligated to publicly share information about my business, which is found under
        <!-- eslint-disable-next-line max-len -->
        <a href="https://firmen.wko.at/martin-hellwagner%2c-msc/ober%c3%b6sterreich/?firmaid=63a43f0c-3742-4430-8d30-f566722a6045" class="clickable" target="_blank">this link</a>.
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Imprint',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/contact.scss";
</style>

<!-- TEMPLATE -->
<template>
  <div class="container">
    <RouterLink :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </RouterLink>

    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <div class="description margin-bottom-none">
        <p class="margin-top-none margin-bottom-none">
          <b>Media Owner</b>
        </p>

        <p class="margin-top-large margin-bottom-xlarge">
          Martin Hellwagner, MSc<br>
          <a href="mailto:martin.hellwagner@gmail.com?subject=Hi%20there" class="clickable" target="_blank">martin.hellwagner@gmail.com</a>
        </p>
      </div>

      <div class="description description--hidden margin-bottom-none">
        <p class="margin-top-xlarge margin-bottom-none">
          <b>Provider Information</b>
        </p>

        <p class="margin-top-large margin-bottom-none">
          Due to the Austrian <i>§ 5 ECG (E-Commerce Gesetz)</i>, I am obligated to publicly share information about my business, which is found under
          <a href="https://firmen.wko.at/martin-hellwagner%2c-msc/ober%c3%b6sterreich/?firmaid=63a43f0c-3742-4430-8d30-f566722a6045" class="clickable" target="_blank">this link</a>.
        </p>
      </div>
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
  @use "../styles/contact.scss";
</style>

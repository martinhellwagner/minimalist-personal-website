<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

    <div class="description margin-top-none margin-bottom-none">
      <p class="margin-top-none margin-bottom-none">
        <b>Let's get in touch!</b>
      </p>

      <p class="margin-top-large margin-bottom-none">
        <!-- eslint-disable-next-line max-len -->
        Whether it's an idea, an upcoming project or simply a nice chat – I'm always happy to talk! Just
        <!-- eslint-disable-next-line max-len -->
        <a href="mailto:martin.hellwagner@gmail.com?subject=Hi%20there" class="clickable" target="_blank">drop me a line</a>
        and I'll get back to you.
      </p>

      <p class="margin-bottom-medium">
        You can also reach out to me on my socials:
      </p>
    </div>

    <div class="icons">
      <!-- eslint-disable max-len -->
      <a href="https://www.instagram.com/martin.hellwagner" target="_blank" class="icon icon--first clickable lazyload-wrapper">
        <img class="image lazyload" data-src="/images/contact/icon-3.png" style="pointer-events: none;" title="Instagram">
        <div class="placeholder" style="background-color: #ff3a00; pointer-events: none;" />
      </a>
      <a href="https://www.linkedin.com/in/martinhellwagner" target="_blank" class="icon clickable lazyload-wrapper">
        <img class="image lazyload" data-src="/images/contact/icon-1.png" style="pointer-events: none;" title="LinkedIn">
        <div class="placeholder" style="background-color: #007ab9; pointer-events: none;" />
      </a>
      <a href="https://github.com/martinhellwagner" target="_blank" class="icon clickable lazyload-wrapper">
        <img class="image lazyload" data-src="/images/contact/icon-2.png" style="pointer-events: none;" title="GitHub">
        <div class="placeholder" style="background-color: #181616; pointer-events: none;" />
      </a>
      <a href="https://soundcloud.com/infrasonicsound" target="_blank" class="icon clickable lazyload-wrapper">
        <img class="image lazyload" data-src="/images/contact/icon-4.png" style="pointer-events: none;" title="SoundCloud">
        <div class="placeholder" style="background-color: #ff3a00; pointer-events: none;" />
      </a>
      <!-- eslint-enable max-len -->
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

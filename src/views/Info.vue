<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <div class="description">
      <p class="margin-top-xlarge margin-bottom-none">
        <b>Interested in learning more about me?</b>
      </p>

      <p class="margin-top-large margin-bottom-large">
        <!-- eslint-disable-next-line max-len -->
        You're welcome to check out <a href="/documents/Martin_Hellwagner_CV.pdf" class="clickable" target="_blank">my CV</a>
        and explore my skillset below.
      </p>

      <p class="margin-top-none margin-bottom-small">
        <i>Frontend</i>
      </p>
      <p class="margin-top-none margin-bottom-large">
        HTML, CSS (LESS, SASS), JavaScript (ES6, Vue.js, React, React Native)
      </p>

      <p class="margin-top-none margin-bottom-small">
        <i>Backend</i>
      </p>
      <p class="margin-top-none margin-bottom-large">
        <!-- eslint-disable-next-line max-len -->
        PHP (Laravel, Zend), CMS (Craft, Wordpress), Node.js, Databases (MySQL, MongoDB)
      </p>

      <p class="margin-top-none margin-bottom-small">
        <i>DevOps</i>
      </p>
      <p class="margin-top-none margin-bottom-xlarge">
        <!-- eslint-disable-next-line max-len -->
        Hosting (Hetzner, Google Cloud, AWS), Domains (AutoDNS, Variomedia), Deployment (Buddy, Jenkins)
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Info',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>

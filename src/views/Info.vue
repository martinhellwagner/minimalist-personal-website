<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <div class="description">
      <p><b>Interested in learning more about me?</b></p>
      <p class="margin-top-large">
        <!-- eslint-disable-next-line max-len -->
        You're welcome to check out <a href="/documents/Martin_Hellwagner_CV.pdf" class="clickable" target="_blank">my CV</a>
        and explore my skillset below.
      </p>

      <p class="margin-top-large">
        <i>Frontend</i><br>
        HTML, CSS (LESS, SASS), JavaScript (ES6, Vue.js, React, React Native)
      </p>

      <p class="margin-top-large">
        <i>Backend</i><br>
        <!-- eslint-disable-next-line max-len -->
        PHP (Laravel, Zend), CMS (Craft, Wordpress), Node.js, Databases (MySQL, MongoDB)
      </p>

      <p class="margin-top-large">
        <i>DevOps</i><br>
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

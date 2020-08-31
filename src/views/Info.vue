<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <div class="description description--small">
      <p><b>Interested in learning more about me?</b></p>
      <p class="margin-top-large">
        <!-- eslint-disable-next-line max-len -->
        You're welcome to check out <a href="/documents/Martin_Hellwagner_CV.pdf" class="clickable" target="_blank">my CV</a>
        and explore my skillset below.
      </p>
      <p class="margin-top-large">
        <!-- eslint-disable-next-line max-len -->
        <b>Frontend:</b> HTML, CSS (LESS, SASS), JavaScript (ES6, Vue.js, React)
      </p>
      <p class="margin-top-large">
        <!-- eslint-disable-next-line max-len -->
        <b>Backend:</b> PHP (Laravel, Zend), CMS (Craft, Wordpress), Node.js, Databases (MySQL, MongoDB)
      </p>
      <p class="margin-top-large">
        <!-- eslint-disable-next-line max-len -->
        <b>DevOps:</b> Hosting (Hetzner, Google Cloud, AWS), Domains (AutoDNS, Variomedia), Deployment (Buddy, Jenkins)
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

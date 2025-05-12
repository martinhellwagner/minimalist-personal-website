<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <RouterLink :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </RouterLink>

    <div class="content">
      <div class="description">
        <p class="margin-top-xlarge margin-bottom-none">
          <b>Interested in learning more about me?</b>
        </p>

        <p class="margin-top-large margin-bottom-large">
          You're welcome to check out <a href="/documents/Martin_Hellwagner_CV.pdf" class="clickable" target="_blank">my CV</a>
          and explore my skillset below:
        </p>

        <p class="margin-top-none margin-bottom-xsmall">
          <i>Frontend</i>
        </p>
        <p class="margin-top-none margin-bottom-large">
          HTML, CSS (LESS, SASS, Tailwind), JavaScript (ES6, Vue.js, React, React Native)
        </p>

        <p class="margin-top-none margin-bottom-xsmall">
          <i>Backend</i>
        </p>
        <p class="margin-top-none margin-bottom-large">
          PHP (Laravel, Zend), CMS (Craft, Wordpress), Node.js, Databases (MySQL, MongoDB)
        </p>

        <p class="margin-top-none margin-bottom-xsmall">
          <i>DevOps</i>
        </p>
        <p class="margin-top-none margin-bottom-xlarge">
          Hosting (Hetzner, Google Cloud, AWS), Domains (AutoDNS, Variomedia), Deployment (Buddy, Jenkins)
        </p>
      </div>
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
  @use "../styles/base.scss";
</style>

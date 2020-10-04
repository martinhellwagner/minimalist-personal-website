<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <div class="projects">
      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.bistum-passau.de" class="clickable colored" target="_blank">Bistum Passau</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>
        <img src="../images/projects/bistum-passau.png">
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.dynatrace.com" class="clickable colored" target="_blank">Dynatrace</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend</i>
        </p>
        <img src="../images/projects/dynatrace.png">
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.fredmansky.at" class="clickable colored" target="_blank">Fredmansky</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>
        <img src="../images/projects/fredmansky.png">
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.karriere.at/blog" class="clickable colored" target="_blank">karriere.at Blog</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, Backend</i>
        </p>
        <img src="../images/projects/karriere-blog.png">
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.karriere.at/hr" class="clickable colored" target="_blank">karriere.at HR</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, Backend</i>
        </p>
        <img src="../images/projects/karriere-hr.png">
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://talentor.com" class="clickable colored" target="_blank">Talentor</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>
        <img src="../images/projects/talentor.png">
      </div>
    </div>

    <div class="description description--browser">
      <b>Hi there.</b>
      It seems like you're using an old or poorly performing browser.
      Why not treat yourself to the newest <a href="https://www.google.com/chrome" target="_blank">Chrome</a>
      or <a href="https://www.mozilla.org/en-US" target="_blank">Firefox</a> and step into the future?
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Projects',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE -->
<style lang="scss">
  @import "../styles/projects.scss";
</style>

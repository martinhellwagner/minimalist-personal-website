<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <router-link :to="{ name: 'home' }" class="closing-wrapper">
      <div class="closing-icon"></div>
    </router-link>

    <div class="projects">
      <div class="project">
        <a href="https://fredmansky.at" target="_blank">
          <span class="description description--project">fredmansky.at</span>
          <img src="../images/projects/fredmansky.png">
        </a>
      </div>

      <div class="project">
        <a href="https://www.dynatrace.com" target="_blank">
          <span class="description description--project">dynatrace.com</span>
          <img src="../images/projects/dynatrace.png">
        </a>
      </div>

      <div class="project">
        <a href="https://neubau-eyewear.com" target="_blank">
          <span class="description description--project">neubau-eyewear.com</span>
          <img src="../images/projects/neubau-eyewear.png">
        </a>
      </div>

      <div class="project">
        <a href="https://www.karriere.at/blog" target="_blank">
          <span class="description description--project">karriere.at/blog</span>
          <img src="../images/projects/karriere-blog.png">
        </a>
      </div>

      <div class="project">
        <a href="https://www.karriere.at/hr" target="_blank">
          <span class="description description--project">karriere.at/hr</span>
          <img src="../images/projects/karriere-hr.png">
        </a>
      </div>

      <div class="project">
        <a href="https://listentoleena.com" target="_blank">
          <span class="description description--project">listentoleena.com</span>
          <img src="../images/projects/listentoleena.png">
        </a>
      </div>

      <div class="project">
        <a href="https://kusser.com" target="_blank">
          <span class="description description--project">kusser.com</span>
          <img src="../images/projects/kusser.png">
        </a>
      </div>

      <div class="project">
        <a href="https://talentor.com" target="_blank">
          <span class="description description--project">talentor.com</span>
          <img src="../images/projects/talentor.png">
        </a>
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
  name: 'projects',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE -->
<style lang="scss">
  @import "../styles/projects.scss";
</style>

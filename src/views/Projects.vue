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
        <div class="screenshot lazy-loaded">
          <!-- eslint-disable-next-line max-len -->
          <img class="image" height="auto" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%272000%27%20height%3D%271250%27%20style%3D%27background%3A%23d1bcaf%27%2F%3E" srcset="../images/projects/bistum-passau.png">
          <div class="placeholder placeholder--ready" style="background-color: #ffffff" />
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.dynatrace.com" class="clickable colored" target="_blank">Dynatrace</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend</i>
        </p>
        <div class="screenshot lazy-loaded">
          <img class="image" src="../images/projects/dynatrace.png">
          <div class="placeholder placeholder--ready" style="background-color: #ffffff" />
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.fredmansky.at" class="clickable colored" target="_blank">Fredmansky</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>
        <div class="screenshot lazy-loaded">
          <img class="image" src="../images/projects/fredmansky.png">
          <div class="placeholder placeholder--ready" style="background-color: #ffffff" />
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.karriere.at/blog" class="clickable colored" target="_blank">karriere.at Blog</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, Backend</i>
        </p>
        <div class="screenshot lazy-loaded">
          <img class="image" src="../images/projects/karriere-blog.png">
          <div class="placeholder placeholder--ready" style="background-color: #ffffff" />
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.karriere.at/hr" class="clickable colored" target="_blank">karriere.at HR</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, Backend</i>
        </p>
        <div class="screenshot lazy-loaded">
          <img class="image" src="../images/projects/karriere-hr.png">
          <div class="placeholder placeholder--ready" style="background-color: #ffffff" />
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://talentor.com" class="clickable colored" target="_blank">Talentor</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>
        <div class="screenshot lazy-loaded">
          <img class="image" src="../images/projects/talentor.png">
          <div class="placeholder placeholder--ready" style="background-color: #ffffff" />
        </div>
      </div>
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

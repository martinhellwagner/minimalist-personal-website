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

        <div class="screenshot lazyload-wrapper">
          <!-- eslint-disable max-len -->
          <img class="image lazyload"
               src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27686%27%20height%3D%27506%27%20style%3D%27background%3Atransparent%27%2F%3E"
               data-sizes="auto"
               data-srcset="/images/projects/bistum-passau.png 1x, /images/projects/bistum-passau_2x.png 2x">
          <!-- eslint-enable max-len -->
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.dynatrace.com" class="clickable colored" target="_blank">Dynatrace</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend</i>
        </p>

        <div class="screenshot lazyload-wrapper">
          <!-- eslint-disable max-len -->
          <img class="image lazyload"
               src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27686%27%20height%3D%27506%27%20style%3D%27background%3Atransparent%27%2F%3E"
               data-sizes="auto"
               data-srcset="/images/projects/dynatrace.png 1x, /images/projects/dynatrace.png 2x">
          <!-- eslint-enable max-len -->
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.fredmansky.at" class="clickable colored" target="_blank">Fredmansky</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>

        <div class="screenshot lazyload-wrapper">
          <!-- eslint-disable max-len -->
          <img class="image lazyload"
               src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27686%27%20height%3D%27506%27%20style%3D%27background%3Atransparent%27%2F%3E"
               data-sizes="auto"
               data-srcset="/images/projects/fredmansky.png 1x, /images/projects/fredmansky.png 2x">
          <!-- eslint-enable max-len -->
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.karriere.at/blog" class="clickable colored" target="_blank">karriere.at Blog</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, Backend</i>
        </p>

        <div class="screenshot lazyload-wrapper">
          <!-- eslint-disable max-len -->
          <img class="image lazyload"
               src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27686%27%20height%3D%27506%27%20style%3D%27background%3Atransparent%27%2F%3E"
               data-sizes="auto"
               data-srcset="/images/projects/karriere-blog.png 1x, /images/projects/karriere-blog_2x.png 2x">
          <!-- eslint-enable max-len -->
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://www.karriere.at/hr" class="clickable colored" target="_blank">karriere.at HR</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, Backend</i>
        </p>

        <div class="screenshot lazyload-wrapper">
          <!-- eslint-disable max-len -->
          <img class="image lazyload"
               src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27686%27%20height%3D%27506%27%20style%3D%27background%3Atransparent%27%2F%3E"
               data-sizes="auto"
               data-srcset="/images/projects/karriere-hr.png 1x, /images/projects/karriere-hr_2x.png 2x">
          <!-- eslint-enable max-len -->
        </div>
      </div>

      <div class="project">
        <p class="margin-top-none margin-bottom-none">
          <b><a href="https://talentor.com" class="clickable colored" target="_blank">Talentor</a></b>
        </p>
        <p class="margin-top-small">
          <i>Frontend, DevOps</i>
        </p>

        <div class="screenshot lazyload-wrapper">
          <!-- eslint-disable max-len -->
          <img class="image lazyload"
               src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27686%27%20height%3D%27506%27%20style%3D%27background%3Atransparent%27%2F%3E"
               data-sizes="auto"
               data-srcset="/images/projects/talentor.png 1x, /images/projects/talentor_2x.png 2x">
          <!-- eslint-enable max-len -->
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

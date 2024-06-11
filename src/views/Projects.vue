<!-- TEMPLATE -->
<template>
  <div class="container container--scrollable">
    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'menu' }" class="navigation-icon-wrapper clickable" aria-label="Go to menu">
      <div class="navigation-icon navigation-icon--menu clickable"></div>
    </router-link>

    <div class="content">
      <div class="projects">
        <div class="project margin-bottom-xxxlarge">
          <a href="https://www.bistum-passau.de" class="clickable colored" target="_blank">
            <p class="margin-top-none margin-bottom-none">
              <b>Bistum Passau</b>
            </p>
            <p class="margin-top-xsmall margin-bottom-small not-colored">
              <i>Frontend, Backend, DevOps</i>
            </p>

            <div class="screenshot lazyload-wrapper">
              <!-- eslint-disable max-len -->
              <img class="image lazyload" data-sizes="auto" data-srcset="/images/projects/bistum-passau.png 1x, /images/projects/bistum-passau_2x.png 2x">
              <div class="placeholder" style="background-color: #ffffff" />
              <!-- eslint-enable max-len -->
            </div>
          </a>
        </div>

        <div class="project margin-bottom-xxxlarge">
          <a href="https://mach-was-mit-sinn.at" class="clickable colored" target="_blank">
            <p class="margin-top-none margin-bottom-none">
              <b>Bundesministerium für Klimaschutz</b>
            </p>
            <p class="margin-top-xsmall margin-bottom-small not-colored">
              <i>Frontend, Backend, DevOps</i>
            </p>

            <div class="screenshot lazyload-wrapper">
              <!-- eslint-disable max-len -->
              <img class="image lazyload" data-sizes="auto" data-srcset="/images/projects/bmk.png 1x, /images/projects/bmk_2x.png 2x">
              <div class="placeholder" style="background-color: #ffffff" />
              <!-- eslint-enable max-len -->
            </div>
          </a>
        </div>

        <div class="project margin-bottom-xxxlarge">
          <a href="https://www.pohl.co.at" class="clickable colored" target="_blank">
            <p class="margin-top-none margin-bottom-none">
              <b>Pohl</b>
            </p>
            <p class="margin-top-xsmall margin-bottom-small not-colored">
              <i>Frontend, Backend, DevOps</i>
            </p>

            <div class="screenshot lazyload-wrapper">
              <!-- eslint-disable max-len -->
              <img class="image lazyload" data-sizes="auto" data-srcset="/images/projects/pohl.png 1x, /images/projects/pohl_2x.png 2x">
              <div class="placeholder" style="background-color: #ffffff" />
              <!-- eslint-enable max-len -->
            </div>
          </a>
        </div>

        <div class="project margin-bottom-xxxlarge">
          <a href="https://rotax-racing.com" class="clickable colored" target="_blank">
            <p class="margin-top-none margin-bottom-none">
              <b>Rotax Racing</b>
            </p>
            <p class="margin-top-xsmall margin-bottom-small not-colored">
              <i>DevOps</i>
            </p>

            <div class="screenshot lazyload-wrapper">
              <!-- eslint-disable max-len -->
              <img class="image lazyload" data-sizes="auto" data-srcset="/images/projects/rotax-racing.png 1x, /images/projects/rotax-racing_2x.png 2x">
              <div class="placeholder" style="background-color: #ffffff" />
              <!-- eslint-enable max-len -->
            </div>
          </a>
        </div>

        <div class="project margin-bottom-xxxlarge">
          <a href="https://sazun.net" class="clickable colored" target="_blank">
            <p class="margin-top-none margin-bottom-none">
              <b>Sazun</b>
            </p>
            <p class="margin-top-xsmall margin-bottom-small not-colored">
              <i>Backend, DevOps</i>
            </p>

            <div class="screenshot lazyload-wrapper">
              <!-- eslint-disable max-len -->
              <img class="image lazyload" data-sizes="auto" data-srcset="/images/projects/sazun.png 1x, /images/projects/sazun_2x.png 2x">
              <div class="placeholder" style="background-color: #ffffff" />
              <!-- eslint-enable max-len -->
            </div>
          </a>
        </div>

        <div class="project margin-bottom-xxxlarge">
          <a href="https://sksturm.at" class="clickable colored" target="_blank">
            <p class="margin-top-none margin-bottom-none">
              <b>Sturm Graz</b>
            </p>
            <p class="margin-top-xsmall margin-bottom-small not-colored">
              <i>Frontend, Backend, DevOps</i>
            </p>

            <div class="screenshot lazyload-wrapper">
              <!-- eslint-disable max-len -->
              <img class="image lazyload" data-sizes="auto" data-srcset="/images/projects/sturm-graz.png 1x, /images/projects/sturm-graz_2x.png 2x">
              <div class="placeholder" style="background-color: #ffffff" />
              <!-- eslint-enable max-len -->
            </div>
          </a>
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

<!-- STYLE-->
<style lang="scss">
  @import "../styles/projects.scss";
</style>

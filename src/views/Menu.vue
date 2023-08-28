<!-- TEMPLATE -->
<template>
  <div class="container">
    <a @click="$router.go(-1)" class="navigation-icon-wrapper clickable">
      <div class="navigation-icon navigation-icon--closing clickable"></div>
    </a>

    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <p class="margin-top-none margin-bottom-none">
        <router-link :to="{ name: 'home' }" class="navigation navigation--mobile clickable">
            Home
        </router-link>
      </p>

      <p class="margin-top-medium margin-bottom-none">
        <router-link :to="{ name: 'projects' }" class="navigation navigation--mobile clickable">
            Projects
        </router-link>
      </p>

      <p class="margin-top-medium margin-bottom-none">
        <router-link :to="{ name: 'info' }" class="navigation navigation--mobile clickable">
          Info
        </router-link>
      </p>

      <p class="margin-top-medium margin-bottom-medium">
        <router-link :to="{ name: 'contact' }" class="navigation navigation--mobile clickable">
            Contact
        </router-link>
      </p>

      <p class="margin-top-xlarge margin-bottom-none">
        <!-- eslint-disable-next-line max-len -->
        <router-link :to="{ name: 'imprint' }" class="navigation navigation--small navigation--mobile clickable">
            Imprint
        </router-link>
      </p>

      <p class="margin-top-medium margin-bottom-none">
        <!-- eslint-disable-next-line max-len -->
        <router-link :to="{ name: 'privacy' }" class="navigation navigation--small navigation--mobile clickable">
            Privacy
        </router-link>
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Menu',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/base.scss";
</style>

<!-- TEMPLATE -->
<template>
  <div class="container">
    <a @click="$router.go(-1)" class="navigation-icon-wrapper clickable">
      <div class="navigation-icon navigation-icon--closing clickable"></div>
    </a>

    <div class="content">
      <img class="beach-ball" src="/images/beach-ball.png" alt="Beach Ball">

      <p class="margin-top-none margin-bottom-none">
        <RouterLink :to="{ name: 'home' }" class="navigation navigation--mobile colored clickable">
            Home
        </RouterLink>
      </p>

      <p class="margin-top-medium margin-bottom-none">
        <RouterLink :to="{ name: 'projects' }" class="navigation navigation--mobile colored clickable">
            Projects
        </RouterLink>
      </p>

      <p class="margin-top-medium margin-bottom-none">
        <RouterLink :to="{ name: 'info' }" class="navigation navigation--mobile colored clickable">
          Info
        </RouterLink>
      </p>

      <p class="margin-top-medium margin-bottom-medium">
        <RouterLink :to="{ name: 'contact' }" class="navigation navigation--mobile colored clickable">
            Contact
        </RouterLink>
      </p>

      <p class="margin-top-xlarge margin-bottom-none">
        <RouterLink :to="{ name: 'imprint' }" class="navigation navigation--small navigation--mobile colored clickable">
            Imprint
        </RouterLink>
      </p>

      <p class="margin-top-medium margin-bottom-none">
        <RouterLink :to="{ name: 'privacy' }" class="navigation navigation--small navigation--mobile colored clickable">
            Privacy
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'HamburgerMenu',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @use "../styles/base.scss";
</style>

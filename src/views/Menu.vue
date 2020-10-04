<!-- TEMPLATE -->
<template>
  <div class="container">
    <p class="margin-top-none margin-bottom-none">
      <!-- eslint-disable-next-line max-len -->
      <transition name="transition" mode="out-in" appear v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
        <router-view></router-view>
      </transition>
    </p>

    <p class="margin-top-medium margin-bottom-none">
      <router-link :to="{ name: 'home' }" class="navigation navigation--mobile clickable">
        <b>Home</b>
      </router-link>
    </p>

    <p class="margin-top-medium margin-bottom-none">
      <router-link :to="{ name: 'projects' }" class="navigation navigation--mobile clickable">
        <b>Projects</b>
      </router-link>
    </p>

    <p class="margin-top-medium margin-bottom-none">
      <router-link :to="{ name: 'info' }" class="navigation navigation--mobile clickable">
        <b>Info</b>
      </router-link>
    </p>

    <p class="margin-top-medium margin-bottom-medium">
      <router-link :to="{ name: 'contact' }" class="navigation navigation--mobile clickable">
        <b>Contact</b>
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
  @import "../styles/contact.scss";
</style>

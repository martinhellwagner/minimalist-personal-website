<!-- TEMPLATE -->
<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<!-- SCRIPT -->
<script src="./assets/app.js" />

<!-- STYLE-->
<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s linear;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

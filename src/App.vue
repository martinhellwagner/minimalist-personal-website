<!-- TEMPLATE -->
<template>
  <div id="app" class="app">
    <!-- eslint-disable-next-line max-len -->
    <transition name="transition" mode="out-in" appear v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
      <router-view></router-view>
    </transition>
  </div>
</template>

<!-- SCRIPT -->
<script src="./scripts/app.js" />

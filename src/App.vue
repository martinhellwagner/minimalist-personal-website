<!-- TEMPLATE -->
<template>
  <div id="app" class="app">
    <!-- eslint-disable-next-line max-len -->
    <transition name="transition" mode="out-in" appear v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
      <router-view></router-view>
    </transition>

    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'home' }" class="navigation navigation--first navigation--top-left clickable colored">
      <b>Home</b>
    </router-link>

    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'projects' }" class="navigation navigation--top-right clickable colored">
      <b>Projects</b>
    </router-link>

    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'info' }" class="navigation navigation--bottom-left clickable colored">
      <b>Info</b>
    </router-link>

    <!-- eslint-disable-next-line max-len -->
    <router-link :to="{ name: 'contact' }" class="navigation navigation--bottom-right clickable colored">
      <b>Contact</b>
    </router-link>
  </div>
</template>

<!-- SCRIPT -->
<script src="./scripts/app.js" />

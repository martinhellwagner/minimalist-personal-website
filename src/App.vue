<!-- TEMPLATE -->
<template>
  <RouterView v-slot="{ Component }">
    <Transition mode="out-in" @enter="enter" @leave="leave" :css="false">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <RouterLink :to="{ name: 'home' }" class="navigation navigation--desktop navigation--first navigation--top-left clickable colored" :class="{ 'navigation--hidden': hideNav }">
    <b style="pointer-events: none;">Home</b>
  </RouterLink>

  <RouterLink :to="{ name: 'projects' }" class="navigation navigation--desktop navigation--top-right clickable colored" :class="{ 'navigation--hidden': hideNav }">
    <b style="pointer-events: none;">Projects</b>
  </RouterLink>

  <RouterLink :to="{ name: 'info' }" class="navigation navigation--desktop navigation--bottom-left clickable colored" :class="{ 'navigation--hidden': hideNav }">
    <b style="pointer-events: none;">Info</b>
  </RouterLink>

  <RouterLink :to="{ name: 'contact' }" class="navigation navigation--desktop navigation--bottom-right clickable colored" :class="{ 'navigation--hidden': hideNav }">
    <b style="pointer-events: none;">Contact</b>
  </RouterLink>
</template>

<!-- SCRIPT -->
<script src="./scripts/app.js" />

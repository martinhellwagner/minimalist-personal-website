<!-- Template -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- Script -->
<script>
import bowser from 'bowser';

export default {
  name: 'app',

  mounted() {
    const app = document.querySelector('#app');

    // Categorically exclude IE and Edge
    if (bowser.name === 'Internet Explorer' || bowser.name === 'Microsoft Edge') {
      app.classList.add('app--ie-edge');
    }
  },
};
</script>

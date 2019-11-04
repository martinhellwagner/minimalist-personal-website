<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <div class="martin lazy-loaded">
      <img class="image" src="../images/home/martin.jpg">
      <div class="placeholder placeholder--ready" style="background-color: #f0f0f0" />
    </div>

    <!-- eslint-disable max-len -->
    <div class="description">
      <span class="mandatory">
        <b>Hi, my name is Martin.</b> I'm an experienced Full Stack Web Developer by day and a passionate Liquid Drum & Bass DJ by night.
        I'm currently based in <a class="clickable" href="https://www.google.com/maps/place/Linz,+Austria/@48.2950437,14.2573657,12z" target="_blank">Linz, Austria</a>.
      </span>
      <!--
      <span class="optional">
        <br>If you're interested in what I do, have a look at some of the <router-link :to="{ name: 'projects' }">projects</router-link>
        that I'm involved in while working at
        <a class="clickable href="https://fredmansky.at" target="_blank">Fredmansk</a>
        <a class="clickable href="https://fredmansky.at" target="_blank" class="no-underline">y</a>.
      </span>
      -->
    </div>
    <!-- eslint-enable max-len -->

    <div class="description description--browser">
      <b>Hi there.</b>
      It seems like you're using an old or poorly performing browser.
      Why not treat yourself to the newest <a class="clickable" href="https://www.google.com/chrome" target="_blank">Chrome</a>
      or <a class="clickable" href="https://www.mozilla.org/en-US" target="_blank">Firefox</a> and step into the future?
    </div>

    <div class="icons">
      <a href="/documents/Martin_Hellwagner_CV.pdf" target="_blank" class="icon icon--first">
        <img class="clickable" src="../images/home/icon-1.svg" title="Curriculum Vitae">
      </a>
      <a href="mailto:martin.hellwagner@gmail.com?subject=Hi%20there" target="_blank" class="icon">
        <img class="clickable" src="../images/home/icon-2.png" title="Mail">
      </a>
      <a href="https://www.linkedin.com/in/martinhellwagner" target="_blank" class="icon">
        <img class="clickable" src="../images/home/icon-3.svg" title="Linkedin">
      </a>
      <a href="https://github.com/martinhellwagner" target="_blank" class="icon" width="80px" height="80px">
        <img class="clickable" src="../images/home/icon-4.svg" title="Github">
      </a>
      <a href="https://www.facebook.com/martin.hellwagner" target="_blank" class="icon">
        <img class="clickable" src="../images/home/icon-5.svg" title="Facebook (Martin Hellwagner)">
      </a>
      <a href="https://www.facebook.com/infrasonicsound" target="_blank" class="icon">
        <img class="clickable" src="../images/home/icon-5.svg" title="Facebook (Infrasonic)">
      </a>
      <a href="https://soundcloud.com/infrasonicsound" target="_blank" class="icon">
        <img class="clickable" src="../images/home/icon-6.svg" title="SoundCloud">
      </a>
      <a href="https://myconversationstation.tumblr.com" target="_blank" class="icon">
        <img class="clickable" src="../images/home/icon-7.svg" title="Tumblr">
      </a>
    </div>

    <div class="footer">
      <span>Made with</span>
      <a href="https://open.spotify.com/album/7oD9oCCtFhg5RoLtMR5TKl" target="_blank" class="heart">
        <img class="clickable" src="../images/home/footer-heart.svg">
      </a>
      <span>and</span>
      <a href="https://vuejs.org" target="_blank" class="vue">
        <img class="clickable" src="../images/home/footer-vue.svg">
      </a>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Home',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/home.scss";
</style>

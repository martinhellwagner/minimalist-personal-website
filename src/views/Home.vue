<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <img class="martin" src="../images/home/martin.jpg">

    <!-- eslint-disable max-len -->
    <div class="description">
      <span class="mandatory">
        <b>Hi, my name is Martin.</b> I'm an experienced Full Stack Web Developer by day and a passionate Liquid Drum & Bass DJ by night.
        I'm currently based in <a href="https://www.google.com/maps/place/Linz,+Austria/@48.2950437,14.2573657,12z" target="_blank">Linz, Austria</a>.
      </span>
      <span class="optional">
        <br>If you're interested in my work, have a look at some of the <router-link :to="{ name: 'projects' }">projects</router-link> that I'm involved in.
      </span>
    </div>
    <!-- eslint-enable max-len -->

    <div class="description description--browser">
      <b>Hi there.</b>
      It seems like you're using an old or poorly performing browser.
      Why not treat yourself to the newest <a href="https://www.google.com/chrome" target="_blank">Chrome</a>
      or <a href="https://www.mozilla.org/en-US" target="_blank">Firefox</a> and step into the future?
    </div>

    <div class="icons">
      <a href="/documents/Martin_Hellwagner_CV.pdf" target="_blank" class="icon icon--first">
        <img src="../images/home/icon-1.svg" title="Curriculum Vitae">
      </a>
      <a href="mailto:martin.hellwagner@gmail.com?subject=Hi%20there" target="_blank" class="icon">
        <img src="../images/home/icon-2.png" title="Mail">
      </a>
      <a href="https://www.linkedin.com/in/martinhellwagner" target="_blank" class="icon">
        <img src="../images/home/icon-3.svg" title="Linkedin">
      </a>
      <a href="https://github.com/martinhellwagner" target="_blank" class="icon" width="80px" height="80px">
        <img src="../images/home/icon-4.svg" title="Github">
      </a>
      <a href="https://www.facebook.com/martin.hellwagner" target="_blank" class="icon">
        <img src="../images/home/icon-5.svg" title="Facebook (Martin Hellwagner)">
      </a>
      <a href="https://www.facebook.com/heyinfrasonic" target="_blank" class="icon">
        <img src="../images/home/icon-5.svg" title="Facebook (Infrasonic)">
      </a>
      <a href="https://soundcloud.com/heyinfrasonic" target="_blank" class="icon">
        <img src="../images/home/icon-6.svg" title="SoundCloud">
      </a>
      <a href="https://myconversationstation.tumblr.com" target="_blank" class="icon">
        <img src="../images/home/icon-7.svg" title="Tumblr">
      </a>
    </div>

    <div class="footer">
      <span>Made with</span>
      <a href="https://www.jasonmraz.com/store/15712/know-lp?category=music/vinyl" target="_blank" class="heart">
        <img src="../images/home/footer-heart.svg">
      </a>
      <span>and</span>
      <a href="https://vuejs.org" target="_blank" class="vue">
        <img src="../images/home/footer-vue.svg">
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

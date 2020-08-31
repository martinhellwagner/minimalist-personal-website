<!-- TEMPLATE -->
<template>
  <div class="container">
    <img class="beach-ball" src="../images/home/beach-ball.png">

    <div class="description margin-bottom-none">
      <p class="margin-top-none margin-bottom-none">
        <b>Let's get in touch!</b>
      </p>
      <p class="margin-top-large margin-bottom-xlarge">
        <!-- eslint-disable-next-line max-len -->
        <a href="mailto:martin.hellwagner@gmail.com?subject=Hi%20there" class="clickable" target="_blank">Drop me a line</a>
        or reach out on my socials:
      </p>
    </div>

    <div class="icons">
      <a href="https://www.linkedin.com/in/martinhellwagner" target="_blank" class="icon icon--first">
        <img class="image clickable" src="../images/home/icon-1.svg" title="Linkedin">
        <div class="placeholder placeholder--ready" style="background-color: #007ab9" />
      </a>
      <a href="https://github.com/martinhellwagner" target="_blank" class="icon">
        <img class="image clickable" src="../images/home/icon-2.svg" title="Github">
        <div class="placeholder placeholder--ready" style="background-color: #181616" />
      </a>
      <a href="https://www.facebook.com/martin.hellwagner" target="_blank" class="icon">
        <!-- eslint-disable-next-line max-len -->
        <img class="image clickable" src="../images/home/icon-3.svg" title="Facebook (Martin Hellwagner)">
        <div class="placeholder placeholder--ready" style="background-color: #3a589b" />
      </a>
      <a href="https://www.facebook.com/infrasonicsound" target="_blank" class="icon">
        <img class="image clickable" src="../images/home/icon-3.svg" title="Facebook (Infrasonic)">
        <div class="placeholder placeholder--ready" style="background-color: #3a589b" />
      </a>
      <a href="https://soundcloud.com/infrasonicsound" target="_blank" class="icon">
        <img class="image clickable" src="../images/home/icon-4.svg" title="SoundCloud">
        <div class="placeholder placeholder--ready" style="background-color: #ff3a00" />
      </a>
      <a href="https://myconversationstation.tumblr.com" target="_blank" class="icon">
        <img class="image clickable" src="../images/home/icon-5.svg" title="Tumblr">
        <div class="placeholder placeholder--ready" style="background-color: #2a384a" />
      </a>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Contact',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/contact.scss";
</style>

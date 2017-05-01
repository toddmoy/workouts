<template type="html">
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
  export default {
    name: 'app'
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-size: calc(1em + 1vw);
    height: 100%;
    font-weight: 700;
  }

  .visually-hidden {
    border:0 !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px !important;
    overflow: hidden;
    padding:0 !important;
    position: absolute !important;
    width: 1px !important;
  }

  #app {
    font-family: Montserrat, 'Helvetica Neue', Helvetica, sans-serif;
    height: 100%;
    background-color: #011627;
  }

  .cardinal-layout {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px;
    text-align: center;
  }

  .cardinal-layout .header,
  .cardinal-layout .footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    justify-content: space-between;
    width: 100%;
  }

  .cardinal-layout .main {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
  }

  .cardinal-layout .main * + * {
    margin-top: calc(20px + 2vw);
  }

  .scrim {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .btn {
    align-self: center;
    background-color: white;
    border-radius: 100px;
    color: black;
    display: inline-block;
    padding: calc(20px + 1vw) calc(40px + 1vw);
    text-decoration: none;
    transition: all 0.1s ease-out;
  }

  .btn:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  .btn:active {
    transform: translateY(4px);
  }

  .icon-btn {
    opacity: 0.5;
    transition: all 0.1s ease-out;
    display: block;
  }

  .icon-btn img {
    width: 8vmin;
  }

  .icon-btn:hover {
    transform: scale3d(1.2, 1.2, 1.2);
    opacity: 1.0;
  }

  .icon-btn:active {
    transform: scale3d(1, 1, 1);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease-in-out;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
</style>

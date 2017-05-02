/**
 * Timer.vue
 *
 * Displays a pausable countdown timer, along with exercise metadata.
 * Implements vue-radial-progress.
 */


<template lang="html">
  <div class="cardinal-layout" style="color: #fff; background-color: #E2223B">
    <header class="header">
      <a href="#" v-on:click.stop="togglePaused" class="icon-btn">
        <img src="../assets/icons/icon-pause.svg" alt="pause" />
      </a>
      <router-link to="/" class="icon-btn">
        <img src="../assets/icons/icon-close.svg" alt="close" />
      </router-link>
    </header>

    <main class="main">
      <h1>Hang!</h1>
      <radial-progress-bar
        :diameter="320"
        :animateSpeed="1000"
        :completed-steps="completedSteps"
        :total-steps="totalSteps"
        :strokeWidth="40"
        startColor="#fff"
        stopColor="#fff"
        innerStrokeColor="rgba(255, 255, 255, 0.2)">
        <p class="radial-progress-container__number">{{ currentTime }}</p>
      </radial-progress-bar>
      <p>1 of 7</p>
    </main>

    <footer class="footer">
      <span>20º Sloper</span>
      <span>+20 lbs</span>
    </footer>
    <transition name="fade" mode="out-in">
      <div v-if="isPaused" class="scrim">
        <a href="#" v-on:click="togglePaused" class="btn">Resume</a>
      </div>
    </transition>
  </div>
</template>


////////////////////////////////////////////////////////////////////////////////


<script>
  import RadialProgressBar from 'vue-radial-progress/dist/vue-radial-progress.min.js'

  export default {
    name: 'timer',

    components: {
      RadialProgressBar
    },

    props: ['id'],

    data: function(){
      return ({
        completedSteps: 0,
        currentTime: 7,
        isPaused: false,
        totalSteps: 7
      })
    },

    methods: {
      togglePaused: function() {
        this.isPaused = !this.isPaused
      },

      handleKeypress: function(e) {
        const SPACEBAR = 32

        if(e.keyCode == SPACEBAR) {
          this.togglePaused()
        }
      },

      tick: function() {
        if (!this.isPaused) {
          this.currentTime > 0
            ? this.currentTime--
            : this.currentTime = 7

          this.completedSteps = 7 - this.currentTime
        }
      }
    },

    mounted() {
      window.setInterval(() => {
        this.tick();
      }, 1000)

      window.addEventListener("keypress", this.handleKeypress, false);
    }
  }
</script>


////////////////////////////////////////////////////////////////////////////////


<style>
  .radial-progress-container {
    margin: 0 !important;
    margin-top: calc(20px + 2vw) !important;
  }

  .radial-progress-bar {
    margin: 0 !important;
  }

  .radial-progress-container__number {
    font-size: calc(62px + 2vw);
  }
</style>

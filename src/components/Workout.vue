<template lang="html">
  <div class="cardinal-layout" v-bind:style="{ backgroundColor: workouts[id].color, color: '#fff' }">
    <header class="header">
      <router-link to="/" class="icon-btn">
        <img src="../assets/icons/icon-close.svg" alt="close" />
      </router-link>
    </header>


    <main class="main">
      <h1>{{ workouts[id].name }}</h1>
      <p>
        <span>{{ workouts[id].exercises.length }} exercises</span>
        <span class="dot" style="margin: auto 16px">•</span>
        <span>{{ workouts[id].duration }}</span>
      </p>
      <router-link :to="workouts[id].id + '/go'" class="btn" :style="{color: workouts[id].color}">Start</router-link>
    </main>

    <footer class="footer"></footer>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    name: 'workout',
    props: ['id'],
    computed: mapState([ 'workouts' ])
  }
</script>


<style scoped>
  .header {
    justify-content: flex-end;
  }
</style>

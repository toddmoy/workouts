/**
 * Workouts.vue
 *
 * Displays high-level information about a single workout.
 */

<template lang="html">
  <div class="cardinal-layout"
    v-bind:style="{ backgroundColor: workout.color, color: '#fff' }">
    <header class="header">
      <router-link to="/" class="icon-btn">
        <img src="../assets/icons/icon-close.svg" alt="close" />
      </router-link>
    </header>

    <main class="main">
      <h1>{{ workout.name }}</h1>
      <p>
        <span>{{ workout.exercises.length }} exercises</span>
        <span class="dot" style="margin: auto 16px">•</span>
        <span>{{ estimatedDurationInMins }} minutes</span>
      </p>
      <router-link :to="workout.id + '/go'"
        class="btn" :style="{ color: workout.color }">Start</router-link>
    </main>

    <footer class="footer"></footer>
  </div>
</template>


////////////////////////////////////////////////////////////////////////////////


<script>
  export default {
    name: 'workout',

    props: ['id'],

    computed: {
      workout() {
        return this.$store.state.workouts[this.id]
      },

      estimatedDurationInMins() {
        let totalDuration = 0
        let exerciseDuration = 0
        let exercise = {}
        let exercises = this.workout.exercises

        for (exercise of exercises) {
          exerciseDuration = 0
          exerciseDuration += parseFloat(exercise.restInSecs)
          exerciseDuration += parseFloat(exercise.durationInSecs)
          exerciseDuration *= parseFloat(exercise.reps)
          exerciseDuration *= parseFloat(exercise.sets)
          exerciseDuration += (parseFloat(exercise.sets) - 1) * this.workout.restBetweenSetsInSecs
          totalDuration += exerciseDuration
        }

        return Math.ceil(totalDuration / 60)
      }
    }
  }
</script>


////////////////////////////////////////////////////////////////////////////////


<style scoped>
  .header {
    justify-content: flex-end;
  }
</style>

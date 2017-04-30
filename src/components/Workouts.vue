<template lang="html">
  <div class="workouts-layout">
    <h1>Workouts</h1>
    <div class="carousel">
      <div v-for="workout in workouts" class="carousel-cell workout" :style="{backgroundColor: workout.color}">
        <p>{{ workout.name }}</p>
        <router-link :to="workout.id.toString()" class="btn" :style="{color: workout.color}">Go</router-link>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'
  import Flickity from 'flickity'

  export default {
    name: 'workouts',
    computed: mapState([ 'workouts' ]),
    mounted() {
      var flickity = new Flickity( '.carousel', {
        pageDots: true,
        contain: true,
        prevNextButtons: false
      })
    }
  }
</script>


<style>
  .workouts-layout {
    background-color: #011627;
    color: #fff;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 24px;
  }

  .workouts-layout * + * {
    margin-top: calc(20px + 2vw);
  }

  .workout {
    border-radius: 10px;
    background-color: #4990E2;
    color: #fff;
    text-decoration: none;
    text-align: center;
    width: calc(264px + 30vw);
    height: calc(264px + 30vh);
    padding: calc(40px + 2vw);
    margin: calc(16px + 0.5vw);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .flickity-page-dots {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  .flickity-enabled {
    outline-style: none;
  }

  .flickity-viewport {
    cursor: grab;
  }

  .flickity-viewport.is-pointer-down {
    cursor: grabbing;
  }

  .flickity-page-dots .dot {
    border: solid rgba(255, 255, 255, 0.5) 1px;
    border-radius: 10px;
    width: 12px;
    height: 12px;
    margin: 4px;
  }

  .flickity-page-dots .is-selected {
    background-color: #fff;
    border: solid #fff 1px;
  }
</style>

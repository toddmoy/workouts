import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    workouts: [
      { id: 0,
        name: "Max Hangs",
        color: "#4A90E2",
        restBetweenSetsInSecs: "180",
        exercises: [
          { name: "20º Sloper",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "Large Edge",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs"  },
          { name: "One Pad IMR",  durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs"  },
          { name: "One Pad Edge", durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs"  }
        ]
      }, {
        id: 1,
        name: "Hangboard Repeaters",
        color: "#E2954A",
        restBetweenSetsInSecs: "180",
        exercises: [
          { name: "20º Sloper",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "Large Edge",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad IMR",  durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad Edge", durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" }
        ]
      }, {
        id: 2,
        name: "4x4 Bouldering",
        color: "#775ACF",
        restBetweenSetsInSecs: "180",
        exercises: [
          { name: "20º Sloper",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "Large Edge",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad IMR",  durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad Edge", durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" }
        ]
      }, {
        id: 3,
        name: "ARCing",
        color: "#4A90E2",
        restBetweenSetsInSecs: "180",
        exercises: [
          { name: "20º Sloper",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "Large Edge",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad IMR",  durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad Edge", durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" }
        ]
      }, {
        id: 4,
        name: "Core",
        color: "#E2954A",
        restBetweenSetsInSecs: "180",
        exercises: [
          { name: "20º Sloper",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "Large Edge",   durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad IMR",  durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" },
          { name: "One Pad Edge", durationInSecs: "7", restInSecs: "3", reps: "6", sets: "3", weight: "+20 lbs" }
        ]
      }
    ]
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: {}
})

export default store

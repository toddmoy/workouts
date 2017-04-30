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
        agenda: "12 exercises",
        duration: "56 minutes",
        exercises: [
          { name: "Exercise 1" },
          { name: "Exercise 2" },
          { name: "Exercise 3" }
        ]
      }, {
        id: 1,
        name: "Hangboard Repeaters",
        color: "#E2954A",
        agenda: "12 exercises",
        duration: "56 minutes",
        exercises: [
          { name: "20º Sloper",   durationInSecs: "7", restInSecs: "3", reps: "3" },
          { name: "Large Edge",   durationInSecs: "7", restInSecs: "3", reps: "3" },
          { name: "One Pad IMR",  durationInSecs: "7", restInSecs: "3", reps: "3" },
          { name: "One Pad Edge", durationInSecs: "7", restInSecs: "3", reps: "3" }
        ]
      }, {
        id: 2,
        name: "4x4 Bouldering",
        color: "#775ACF",
        agenda: "3 sets",
        duration: "20 minutes",
        exercises: [
          { name: "Exercise 1" },
          { name: "Exercise 2" },
          { name: "Exercise 3" }
        ]
      }, {
        id: 3,
        name: "ARCing",
        color: "#4A90E2",
        agenda: "30 laps",
        duration: "30 minutes",
        exercises: [
          { name: "Exercise 1" },
          { name: "Exercise 2" },
          { name: "Exercise 3" },
          { name: "Exercise 4" }
        ]
      }, {
        id: 4,
        name: "Core",
        color: "#E2954A",
        agenda: "12 exercises",
        duration: "15 minutes",
        exercises: [
          { name: "Exercise 1" }
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

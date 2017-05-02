import Vue from 'vue'
import Router from 'vue-router'
import Workouts from '@/components/Workouts'
import Workout from '@/components/Workout'
import Timer from '@/components/Timer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Workouts },
    { path: '/:id', component: Workout, props: true },
    { path: '/:id/go', component: Timer, props: true }
  ]
})

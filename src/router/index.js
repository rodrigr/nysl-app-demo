import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../components/Schedule.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import('../components/Locations.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>  import('../components/Profile.vue')
  },
  {
    path: '/match-info/:index',
    name: 'Match-Info',
    component: () => import('../components/Match-Info.vue')
  },
  {
    path: '/chatroom/:id',
    name: 'Chatroom',
    component: () => import('../components/Chatroom.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

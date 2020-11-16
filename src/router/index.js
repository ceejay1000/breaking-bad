import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import More from "../views/More.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/:id",
    name: "More",
    component: More
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

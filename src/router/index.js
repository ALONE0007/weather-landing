import { createRouter, createWebHistory } from 'vue-router'


import test from '../components/test.vue'

const routes = [
  { path: '/testPage',name: 'Home',component: test},
  // سایر مسیرها
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

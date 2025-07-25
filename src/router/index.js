import { createRouter, createWebHistory } from 'vue-router'

import LandingPageResponsive from '../Landing-Page-Responsive.vue'
import TosPageResponsive from '../Tos-Page-Responsive.vue'
import shopPageResponsive from '../shop-page-responsive.vue'
import infoResponsive from '../info-page-responsive.vue'


const routes = [
  { path: '/', name: 'LandingPageResponsive', component: LandingPageResponsive },
  { path: '/tosPage', name: 'TosPageResponsive', component: TosPageResponsive },
  { path: '/shopPage', name: 'shopPageResponsive', component: shopPageResponsive },
  { path: '/infoPage', name: 'infoPageResponsive', component: infoResponsive },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

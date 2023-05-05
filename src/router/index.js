import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUp.vue'),
      children: [
        {
          path: 'byGoogle',
          name: 'ByGoogle',
          component: function() {
            return import('../components/ByGoogle.vue')
          }
        },
        {
          path: 'byFacebook',
          name: 'ByFacebook',
          component: function() {
            return import('../components/ByFB.vue')
          }
        }
      ]
    }
  ]
})

export default router

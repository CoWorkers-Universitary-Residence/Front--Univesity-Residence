import Vue from 'vue'
import VueRouter from 'vue-router'
import FreeViews from '../freeViews/FreeViews.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: FreeViews,
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('../freeViews/Login.vue')
          },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../freeViews/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../freeViews/Register.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('../authViews/AuthViews.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../authViews/Home.vue')
      },
      {
        path: 'rooms',
        name: 'Rooms',
        component: () => import('../authViews/Home.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

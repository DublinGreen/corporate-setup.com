import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'RootLogin',
    component: () => import( /* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import( /* webpackChunkName: "home" */ '../views/Dashboard.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import( /* webpackChunkName: "home" */ '../views/Signup.vue')
  },
  {
    path: '/ManageUsersCrud',
    name: 'ManageUsersCrud',
    component: () => import('../views/ManageUsersCrud.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
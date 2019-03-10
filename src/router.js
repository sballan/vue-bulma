import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/elements',
      name: 'elements',
      // route level code-splitting
      // this generates a separate chunk (elements.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "elements" */ './views/Elements.vue')
    },
    {
      path: '/heroView',
      name: 'heroView',
      // route level code-splitting
      // this generates a separate chunk (hero-view.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "heroView" */ './views/HeroView.vue')
    },
    {
      path: '/button',
      name: 'button',
      // route level code-splitting
      // this generates a separate chunk (button.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "button" */ './views/singles/Button.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (menu.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "menu" */ './views/singles/Menu.vue')
    },
  ]
})

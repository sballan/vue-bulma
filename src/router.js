import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
      path: '/explore',
      name: 'explore',
      component: () => import(/* webpackChunkName: "explore" */ './views/Explore.vue'),
      children: [
        {
          path: 'breadcrumb',
          name: 'breadcrumb',
          // route level code-splitting
          // this generates a separate chunk (breadcrumb.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "breadcrumb" */ './views/singles/Breadcrumb.vue')
        },
        {
          path: 'button',
          name: 'button',
          component: () => import(/* webpackChunkName: "button" */ './views/singles/Button.vue')
        },
        {
          path: 'menu',
          name: 'menu',
          component: () => import(/* webpackChunkName: "menu" */ './views/singles/Menu.vue')
        },
        {
          path: 'navbar',
          name: 'navbar',
          component: () => import(/* webpackChunkName: "navbar" */ './views/singles/Navbar.vue')
        },
      ]

    }
  ]
})

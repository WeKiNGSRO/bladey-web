import Vue from 'vue'
import Router from 'vue-router'
import LocalStorage from 'vue-localstorage'
import Head from 'vue-head'
import Buefy from 'buefy'

import DiscordOAuth from '../oauth/VueDiscordOAuth'

import Homepage from '../pages/Homepage'
import Dashboard from '../pages/Dashboard'
import LoginAuth from '../pages/LoginAuth'
import Contributors from '../pages/Contributors'
import ServerSelector from '../pages/ServerSelector'
import BackgroundShop from '../pages/BackgroundShop'
import NotFound from '../pages/NotFound'

Vue.use(Buefy, { defaultTooltipAnimated: true })
Vue.use(DiscordOAuth)
Vue.use(LocalStorage)
Vue.use(Head, { separator: '-', complement: 'Switchblade' })
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/auth',
      name: 'LoginAuth',
      component: LoginAuth
    },
    {
      path: '/contributors',
      name: 'Contributors',
      component: Contributors
    },
    {
      path: '/dashboard',
      name: 'Select a server',
      component: ServerSelector,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/:id',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/backgroundShop',
      name: 'BackgroundShop',
      component: BackgroundShop,
      meta: { requiresAuth: true }
    }
  ]
})

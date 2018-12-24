import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
      // component: require('@/components/LandingPage').default
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: require('page/index/welcome').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

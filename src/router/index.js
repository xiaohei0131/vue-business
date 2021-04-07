import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import G1PageOne from '@/pages/group1/PageOne'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  }, {
    path: '/group1/PageOne',
    component: G1PageOne
  }]
})

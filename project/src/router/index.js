import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import TestList from '@/view/TestList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/testList',
      name: 'testList',
      component: TestList
    }
  ]
})

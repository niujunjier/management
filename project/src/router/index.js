import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import TestList from '@/view/test/TestList'
import AddTest from '@/view/test/AddTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/testList',
      name: 'testList',
      component: TestList
    },
    {
      path: '/addTest',
      name: 'addTest',
      component: AddTest
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import TestList from '@/view/test/TestList'
import AddTest from '@/view/test/AddTest'
import InfoTest from '@/view/test/TestInfo'
import TestEdit from '@/view/test/TestEdit'

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
    },
    {
      path: '/infoTest',
      name: 'infoTest',
      component: InfoTest
    },
    {
      path: '/testEdit',
      name: 'testEdit',
      component: TestEdit
    }
  ]
})

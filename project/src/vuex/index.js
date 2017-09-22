import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
const state = {
  title: '欢迎页',
  batchData:[],
  searchData: {}
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
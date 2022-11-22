import { createStore } from 'vuex'
import toyModule from './modules/toy-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {
    
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    toyModule,
  },
})

export default store

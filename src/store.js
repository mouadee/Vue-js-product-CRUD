import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    price: '',
    name: '',
    items: [
      {id:'1', price: '435$', name: 'IPhone 4'},
      {id:'2', price: '730$', name: 'IPhone 7+'},
      {id:'3', price: '920$', name: 'IPhone 8S'}
    ]
  },
  getters: {
    items(state) {
      return state.items
    }
  },
  mutations: {
    ADD_PRODUCT(state) {
      const {id, price, name} = state
      state.items.push({id, price, name,})
    },
    SET_ID(state, payload) {
      state.id = payload
    },
    SET_PRICE(state, payload) {
      state.price = payload
    },
    SET_NAME(state, payload) {
      state.name = payload
    }
  }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NEW_ID: '',
    NEW_PRICE: '',
    NEW_NAME: '',
    items: [
        {id:'1', price: '435$', name: 'IPhone 4'},
        {id:'2', price: '730$', name: 'IPhone 7+'},
        {id:'3', price: '920$', name: 'IPhone 8S'}
        ]
  },
  mutations: {
    ADD_PRODUCT(state, payload) {
        state.items.push({
            id: payload.NEW_ID,
            price: payload.NEW_PRICE,
            name: payload.NEW_NAME,
        })
    }
  }
})

/*
*
*  state.items.push({
        id: state.NEW_ID,
        price: state.NEW_PRICE,
        name: state.NEW_NAME,
      })
*
*
*/
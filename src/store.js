import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NEW_ID: '',
    NEW_PRICE: '',
    NEW_NAME: '',
    items: [
        {id:'1', price: '435$', name: 'IPhone 4'}
    ]
    },
})

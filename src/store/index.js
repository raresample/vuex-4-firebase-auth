import { createStore } from 'vuex'

const store = createStore({
  state: {
    points: 0,
  },
  mutations: {
    updatePoints(state, payload) {
      state.points += payload
    }
  }
})

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

// export store
export default store
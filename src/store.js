import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tags: ["food", "sport"]
    },
    mutations: {
        UPDATE(state, tags) {
            state.tags = tags 
        }
    },
    actions: {
        updateTags: ({commit}, tags) => {
            commit('UPDATE', tags)
        }
    }
})

const state = {
    list: []
}

const actions = {
    pushMsg ({ commit }, data) {
        commit('updateMsgs', data)
    }
}

const mutations = {
    updateMsgs (state, data) {
        state.list.unshift(data)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
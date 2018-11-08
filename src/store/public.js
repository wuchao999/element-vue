import api from '../api/api.js'
const state = {
    loading: true,
    data: [],
    total: 0
}

const actions = {
    getData ({ commit }) {
        api.getData().then(res => {
            commit('updateData', res.data)
        })
    },
    add ({ commit, state }, form) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let total = state.total += 1
                commit('updateData', form)
                commit('updateTotal', total)
                resolve()
            }, 100)
        })
    },
    edit ({ commit }, form) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit('updateData', form)
                resolve()
            }, 100)
        })
    },
    delete ({ commit }, ids) {
        return new Promise((resolve, reject) => {
            // api.delete(ids).then(res => {
            //     resolve(res.data)
            // }).catch(err => {
            //     reject(err)
            // })
            let idsArr = []
            if (typeof ids === 'number') {
                idsArr.push(ids)
            } else {
                idsArr = ids.split(',').map(id => +id)
            }
            setTimeout(() => {
                commit('deleteData', idsArr)
                resolve()
            }, 100)
        })
    }
}


const mutations = {
    updateLoading (state, loading) {
        state.loading = loading
    },
    updateData (state, data) {
        if (data.id) {
            let arr = state.data.map(item => {
                if (item.id === data.id) {
                    item = data
                }
                return item
            })
            state.data = arr
        } else {
            data['id'] = state.total
            state.data.push(data)
        }
    },
    deleteData (state, ids) {
        ids.forEach(id => {
            state.data.forEach((item, index) => {
                if (id === item.id) {
                    state.data.splice(index, 1)
                    state.total -= 1
                }
            })
        })
    },
    updateTotal (state, total) {
        state.total = total
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

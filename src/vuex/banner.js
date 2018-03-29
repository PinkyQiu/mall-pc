import api from 'api'

const state = {
    list: []
}

const actions = {
    getBannerList({ commit }, params) {
        return api.getBannerList(params).then(res => {
            commit('SET_BANNER_LIST', res.data)
            return res.data
        })
    }
}

const mutations = {
    ['SET_BANNER_LIST'](state, list) {
        state.list = list
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}
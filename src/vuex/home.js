import api from 'api'
import * as types from './mutation-types'

const state = {
    hotList: [],
    newList: [],
    bannerList: []
}

const actions = {
    getHotList({ commit }, params) {
        api.getHotList(params).then(res => {
            commit('SET_HOT_LIST', res.data);
        })
    },
    getNewList({ commit }, params) {
        api.getNewList(params).then(res => {
            commit('SET_NEW_LIST', res.data);
        })
    },
    getBannerList({ commit }, params) {
        return api.getBannerList(params).then(res => {
            const list = res.list.filter(item => {
                return !!item.img
            })
            commit('SET_BANNER_LIST', list)
            return list
        })
    }
}

const mutations = {
    ['SET_HOT_LIST'](state, hotList) {
        state.hotList = hotList
    },
    ['SET_NEW_LIST'](state, newList) {
        state.newList = newList
    },
    ['SET_BANNER_LIST'](state, bannerList) {
        state.bannerList = bannerList
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}
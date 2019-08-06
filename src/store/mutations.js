import * as types from './mutation-types.js'

const mutations = {
    //侧边导航栏的移出移入
    [types.SET_NAV](state,payload) {
        state.isNavVisible = payload
    },
    //侧边导航栏的数据
    [types.SET_NAV_DATA](state,payload) {
        state.navData = payload
    }
}

export default mutations
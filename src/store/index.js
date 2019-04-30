import Vue from 'vue'
import Vuex from 'vuex'
import _$ from 'src/data/getData.js'
Vue.use(Vuex);

const state = {
  viewCount:0,
	listData:{},
  detailData:{},
  count: 0
}
const mutations = {
  VIEWCOUNT: (state)=>{
    state.viewCount++;
  },
	LISTDATA: (state, data)=>{
  	state.listData = data
    
  },
  DETAILDATA: (state,data)=>{
    state.detailData = data;
	},
  CHANGE_COUNT: (state)=>{
    state.count++;
  }
}
const actions = {
  getViewCount:({commit})=>{
    commit('VIEWCOUNT');
  },
	getList:({commit, state})=>{
    let param = {};
    _$.getData('listUrl', param, (data) => {
        commit('LISTDATA', data.data)
    }, () => {

    })
  },
  getDetail:({commit, state},param)=>{
      //let param = {};
      _$.getData('detailUrl', param, (data) => {
          commit('DETAILDATA', data.data)
      }, () => {

      })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
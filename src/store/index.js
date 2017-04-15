import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import session from './modules/session' //新闻mutation模块

Vue.use(Vuex); //安装store插件

export default new Vuex.Store({
  actions,
  getters,
  modules : {
		session
	},
	strict : true //严格的state模式,乱改会有警告
})

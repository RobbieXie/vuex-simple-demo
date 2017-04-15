import {
	LOG_IN,
  LOG_OUT
} from '../mutation-types'

const state = {
	userName: "xietiandi",
  userPassword: "930912"
}

const mutations = {
	[LOG_IN] (state, userName, userPassword){
		state.userName = userName;
		state.userPassword = userPassword;
	},
	[LOG_OUT] (state){
		state.userName = "";
    state.userPassword = "";
	}
}

export default {
	state,
	mutations
}

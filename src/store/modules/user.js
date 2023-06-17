import { getToken, setToken, removeToken } from '@/utils/auth'
// 状态
const state = {
  // 设置 token 为共享状态
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    // 将数据设置给 vuex
    state.token = token
    // 同步给缓存
    setToken(token)
  },
  removeToken(state) {
    // 将vuex的数据置空
    state.token = null
    // 同步到缓存
    removeToken()
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

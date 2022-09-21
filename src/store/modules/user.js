import { sysLoginAPI } from "@/api";
import { getToken } from "@/utils/auth";

export default {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    getToken(state, val) {
      state.token = val;
    },
  },
  actions: {
    async toLogin({ commit }, userInfo) {
      const res = await sysLoginAPI(userInfo);
      console.log(res);
      commit("getToken", res.data);
      // setToken(res.data);
    },
  },
  getters: {},
};

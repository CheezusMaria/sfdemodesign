import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: true,
    number: 10,
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
  },

  mutations: {
    setisAuth(state) {
      state.isAuth = false;
    },
  },

  actions: {
    test({ commit }) {
      commit("setisAuth");
    },
  },
  modules: {},
});

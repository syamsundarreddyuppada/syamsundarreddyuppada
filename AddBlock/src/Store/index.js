import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let uid = Math.ceil(Math.random() * 1000);

export default new Vuex.Store({
  state: {
    itemarr: [
      {
        id: uid,
        name: "",
        age: "",
      },
    ],
  },
  mutations: {
    add_Card_Block(state) {
      state.itemarr.push({
        id: Math.ceil(Math.random() * 1000),
        name: "",
        age: "",
      });
    },
    delete_Name_Block(state, data) {
      state.itemarr = state.itemarr.filter((item) => item.id !== data);
    },
  },

  actions: {
   
    addCardBlock({ commit }) {
      console.log("datacard");
      commit("add_Card_Block");
    },
    deleteNameBlock({ commit }, data) {
      console.log("action", data);
      commit("delete_Name_Block", data);
    },
  },
  getters: {
    getName: (state) => state.itemarr,
  },
  modules: {},
});

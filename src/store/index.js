import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forms: [],
  },
  actions: {
    async fetchForms(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const forms = await res.json();
     

      ctx.commit("updateForms", forms);
    },
  },
  mutations: {
    updateForms(state, forms) {
      state.forms = forms;
    },
},
  getters: {
    allForms(state) {
      return state.forms;
    },
  },
  modules: {},
});

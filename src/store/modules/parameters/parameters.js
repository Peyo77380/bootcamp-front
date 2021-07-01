import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        _id: "",
        name: "",
        role: "",
        email: "",
        token: "",
        paramsGlobal: []
    },
    mutations: {
        setParamsGlobal(state, paramsGlobal) {
            state.paramsGlobal = paramsGlobal;
        }
    },
    actions: {
        pushParamsGlobal({ commit }, params) {
            commit("setParamsGlobal", params);
        }
    },
    getters: {
        paramsGlobal: state => state.paramsGlobal,
        globalEmpty: state => {
            if (state.paramsGlobal.length === 0) return true;
            return false;
        }
    }
}

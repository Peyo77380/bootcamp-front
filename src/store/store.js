import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        paramsGlobal: [],
        isLogged: false
    },
    mutations: {
        setParamsGlobal(state, paramsGlobal) {
            state.paramsGlobal = paramsGlobal;
        },

        setLogged(state, isLogged) {
            state.isLogged = isLogged;
        }
    },
    getters: {
        paramsGlobal: state => state.paramsGlobal,
        globalEmpty: state => {
            if (state.paramsGlobal.length === 0) return true;
            return false;
        },
        isLogged: state => state.isLogged
    },
    actions: {
        pushParamsGlobal({ commit }, params) {
            commit("setParamsGlobal", params);
        }
    }
});

export default store;

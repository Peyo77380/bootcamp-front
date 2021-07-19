import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        isLogged: false
    },
    mutations: {
        setLogged(state, isLogged) {
            state.isLogged = isLogged;
        }
    },
    actions: {
    },
    getters: {
        isLogged: state => state.isLogged
    }
}
import Vue from "vue";
import Vuex from "vuex";
import paramsModule from "./modules/parameters/parameters";
import loginModule from "./modules/login/login";


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        parameters: paramsModule,
        login: loginModule
    },
    state: {
        
       
    },
    mutations: {
        

       
    },
    getters: {
        
     
    },
    actions: {
        
    }
});

export default store;

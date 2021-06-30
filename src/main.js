import Vue from "vue";
import "./plugins/vuetify";
import sweetAlert from "./plugins/sweetAlert";
import router from "./router";

import BootstrapVue from "bootstrap-vue";

import App from "./App";
import store from "./store/store";

import Default from "./Layout/Wrappers/baseLayout.vue";
import Pages from "./Layout/Wrappers/pagesLayout.vue";
import Apps from "./Layout/Wrappers/appLayout.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(sweetAlert);

Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);
Vue.component("apps-layout", Apps);

new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App }
});

import Vue from "vue";
import "./plugins/vuetify";
import sweetAlert from "./plugins/sweetAlert";
import router from "./router";
import { TimeAgo } from "vue2-timeago";
import CKEditor from "@ckeditor/ckeditor5-vue2";

import BootstrapVue from "bootstrap-vue";

import App from "./App";

import Default from "./Layout/Wrappers/baseLayout.vue";
import Pages from "./Layout/Wrappers/pagesLayout.vue";
import Apps from "./Layout/Wrappers/appLayout.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(sweetAlert);
Vue.use(TimeAgo, {
    name: "time-ago",
    locale: "fr",
    locales: {
        fr: require("date-fns/locale/fr")
    }
});
Vue.use(CKEditor);

Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);
Vue.component("apps-layout", Apps);
Vue.component("time-ago", TimeAgo);
new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
});

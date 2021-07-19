import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routes: [
        /**
         * ??????????????????
         * WHY ON A MASTER BRANCH???????!!!!!!!!!!!
         */
        {
            path: "/",
            name: "facturation_section",
            component: () => import("@/apps/facturation/index")
        },
        {
            path: "/add-facturation",
            name: "facturation_section_add",
            component: () =>
                import("@/apps/facturation/components/modalFactureadd.vue")
        },
        /**
         * TO MERGE LATER
         * ERROR OR MISSING SOME PART OF DEV
         */
        {
            path: "/crm/dash",
            name: "ref-LC-27",
            component: () => import("@/apps/tomerge/LC-27/index.vue")
        },
        {
            path: "/tomerge/custom-header",
            name: "ref-LC-163",
            component: () => import("@/apps/tomerge/custom-header/index.vue")
        }
    ]
});

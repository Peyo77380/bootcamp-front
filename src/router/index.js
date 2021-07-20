import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routes: [
        {
            /**
             * Change title on component.
             * Add to menu
             *  configuration :
             *    - Génériques
             * final check
             */
            path: "/configuration/",
            name: "config - params/key",
            component: () => import("@/apps/configuration/ParamsKeyValue")
        },

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
        /**
         * To finish
         */
        {
            path: "/tomerge/custom-header",
            name: "ref-LC-163",
            component: () => import("@/apps/tomerge/custom-header/index.vue")
        },
        /**
         * Missing some behavior
         */
        {
            path: "/email-service",
            name: "email-service",
            component: () => import("@/apps/tomerge/ms-customField/LC-30")
        },

        /**
         * Mixin not working.
         * Sweet alert not working
         * TEst all
         */
        {
            path: "/tomerge/LC-29",
            name: "Members",
            component: () => import("@/apps/tomerge/LC-29")
        },
        {
            path: "/tomerge/LC-29/components/EditList/:id",
            name: "EditList",
            component: () => import("@/apps/tomerge/LC-29/EditList.vue")
        },
        {
            path: "/tomerge/LC-29/Modal",
            name: "Modal",
            component: () => import("@/apps/tomerge/LC-29/Modal.vue")
        },

        /**
         * Missing some behavior
         * 
         */
        {
            path: "/tomerge/LC-166-RMC",
            name: "LC-166-RMC",
            component: () => import("@/apps/tomerge/LC-166-RMC/index.vue")
        },
        // Dashboards
        {
            path: "/LC-31-RMC",
            name: "LC-31-RMC",
            component: () => import("@/apps/LC-31-RMC/index.vue")
        },
    ]
});

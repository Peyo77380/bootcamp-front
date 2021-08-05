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
        {
            path: "/configuration/emails",
            name: "email-service",
            component: () => import("@/apps/configuration/emails")
        },
        {
            path: "/configuration/lists",
            name: "configuration - lists",
            component: () => import("@/apps/configuration/lists")
        },
        {
            path: "/configuration/lists/:id",
            name: "configuration - Edit list",
            component: () => import("@/apps/configuration/lists/EditList.vue")
        },
        {
            path: "/configuration/vatRates",
            name: "configuration - Vat Rates",
            component: () => import("@/apps/configuration/vatRates")
        },

        {
            path: "/configuration/payments",
            name: "configuration - Payments",
            component: () => import("@/apps/configuration/payments")
        },

        {
            path: "/configuration/faqs",
            name: "configuration - FAQs",
            component: () => import("@/apps/configuration/faqs")
        },
        {
            path: "/configuration/attributes",
            name: "configuration - Attributes",
            component: () => import("@/apps/configuration/attributes")
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
         * mixin not working
         * behavior on axios ?
         */

        /**
         * TO MERGE LATER
         * Mixin not working
         * Behavior on axios
         * Error on routes
         */
        {
            path: "/tomerge/buildings",
            name: "our-buildings",
            component: () =>
                import("@/apps/tomerge/LC-144/Buildings/all-buildings")
        },
        {
            path: "/tomerge/buildings/add",
            name: "add-building",
            component: () =>
                import("@/apps/tomerge/LC-144/Buildings/single-building")
        },
        {
            path: "/tomerge/buildings/show/:id",
            name: "show-building",
            component: () =>
                import("@/apps/tomerge/LC-144/Buildings/single-building")
        },
        {
            path: "/tomerge/buildings/edit/:id",
            name: "edit-building",
            component: () =>
                import("@/apps/tomerge/LC-144/Buildings/single-building")
        },
        

        // LC-142: Need axios + behaviors + dummy datas need to be deleted and replaced by real datas on most pages
        {
            path: "/room",
            name: "RoomList",
            component: () => import("@/apps/tomerge/lc-142/index")
        },
        {
            path: "/room/edit/:id",
            name: "RoomEdit",
            component: () =>
                import("@/apps/tomerge/lc-142/Components/add/index")
        },
        {
            path: "/room/view/:id",
            name: "RoomView",
            component: () =>
                import("@/apps/tomerge/lc-142/Components/add/index")
        },
        {
            path: "/room/add",
            name: "RoomAdd",
            component: () =>
                import("@/apps/tomerge/lc-142/Components/add/index")
        },
        /**
         * behavior don't working
         * update and add don't working
         *
         */
        // Dashboards
        {
            path: "/LC-31-RMC",
            name: "LC-31-RMC",
            component: () => import("@/apps/LC-31-RMC/index.vue")
        }
    ]
});

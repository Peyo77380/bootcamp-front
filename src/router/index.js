import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routes: [
        {
            path: "/buildings",
            name: "our-buildings",
            component: () => import("@/apps/buildings/all-buildings")
        },
        {
            path: "/buildings/add",
            name: "add-building",
            component: () => import("@/apps/buildings/single-building")
        },
        {
            path: "/buildings/show/:id",
            name: "show-building",
            component: () => import("@/apps/buildings/single-building")
        },
        {
            path: "/buildings/edit/:id",
            name: "edit-building",
            component: () => import("@/apps/buildings/single-building")
        },

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
         * no axios
         *
         */

        {
            path: "/wallCardSunglo-1",
            name: "wallCardSungloV1",
            component: () =>
                import("@/apps/tomerge/LC-173-JC/WallCard-sunglo-1")
        },
        {
            path: "/wallCardSunglo-2",
            name: "wallCardSungloV2",
            component: () =>
                import("@/apps/tomerge/LC-173-JC/WallCard-sunglo-2")
        },
        {
            path: "/wallCardSunglo-3",
            name: "wallCardSungloV3",
            component: () =>
                import("@/apps/tomerge/LC-173-JC/WallCard-sunglo-3")
        },
        {
            path: "/wallCardChocolate",
            name: "wallCardChocolate",
            component: () =>
                import("@/apps/tomerge/LC-173-JC/WallCard-chocolate")
        },
        {
            path: "/wallCardTradewind",
            name: "wallCardTradewind",
            component: () =>
                import("@/apps/tomerge/LC-173-JC/WallCard-tradewind")
        },
        {
            path: "/wallCardCorn",
            name: "wallCardCorn",
            component: () => import("@/apps/tomerge/LC-173-JC/WallCard-corn")
        },
        {
            path: "/wallCardMidnightBlue",
            name: "wallCardMidnightBlue",
            component: () =>
                import("@/apps/tomerge/LC-173-JC/WallCard-midnightBlue")
        },
        // {
        //     name: 'faq',
        //     path: '/LC-186',
        //     component: () => import('@/apps/tomerge/LC-186'),
        // },
        //     // Dashboards
        // {
        //     path: "/LC-31-RMC",
        //     name: "LC-31-RMC",
        //     component: () => import("@/apps/LC-31-RMC/index.vue")
        // },
     
// LC-180: Need axios + behaviors + dummy datas need to be deleted and replaced by real datas on most pages
// Components PageTitle ????
        {
            path: "/LC-180",
            name: "ProductServiceList",
            component: () => import("@/apps/tomerge/LC-180/index.vue")
        },

        // LC-187: 
// datas's room & dates available 
        // Need mixins
        {
            path: "/LC-180/:id",
            name: "EditProductService",
            props: true,
            component: () => import('@/apps/tomerge/LC-180/EditProductService'),
        },

        {
            path: "/LC-187",
            name: "calendar",
            component: () => import('@/apps/tomerge/LC-187'),
        },

                // LC-203: 
// datas's members 
        // Need mixins  
      
        {
            path: "/membres",
            name: "membres",
            component: () => import("@/apps/tomerge/LC-203-JC/Membres")
        },
        {
            path: "/societes",
            name: "societes",
            component: () => import("@/apps/tomerge/LC-203-JC/Societes")
        }
    ]
});

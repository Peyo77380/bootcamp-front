import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routes: [
        // Dashboards

        {
            path: "/",
            name: "analytics",
            component: () => import("@/apps/dash-exemple/Analytics")
        },
        {
            path     : '/wallCardSunglo-1',
            name     : 'wallCardSungloV1',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-sunglo-1')
        },
        {
            path     : '/wallCardSunglo-2',
            name     : 'wallCardSungloV2',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-sunglo-2')
        },
        {
            path     : '/wallCardSunglo-3',
            name     : 'wallCardSungloV3',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-sunglo-3')
        },
        {
            path     : '/wallCardChocolate',
            name     : 'wallCardChocolate',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-chocolate')
        },
        {
            path     : '/wallCardTradewind',
            name     : 'wallCardTradewind',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-tradewind')
        },
        {
            path     : '/wallCardCorn',
            name     : 'wallCardCorn',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-corn')
        },
        {
            path     : '/wallCardMidnightBlue',
            name     : 'wallCardMidnightBlue',
            component: () => import('@/apps/dash-exemple/LC-173-JC/WallCard-midnightBlue')
        }
    ]
});

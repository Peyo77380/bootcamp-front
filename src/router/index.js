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
            path: "/LC-180",
            name: "ProductServiceList",
            component: () => import("../apps/LC-180/index.vue")
        },
        {
            path: "/LC-180/:id",
            name: "EditProductService",
            props: true,
            component: () => import('@/apps/LC-180/EditProductService'),
        },


    ]
});

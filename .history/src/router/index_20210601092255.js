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
            path: "/LC-29",
            name: "Members",
            component: () => import('../apps/LC-29'),
        },

        {
            path: "/LC-29",
            name: "View",
            component: () => import('@/apps/LC-29/components/view'),
        },
        
    ]
});

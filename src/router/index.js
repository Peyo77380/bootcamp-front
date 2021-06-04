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
            path: "/LC-29/components/view",
            name: "View",
            component: () => import('@/apps/LC-29/components/view'),
        },
        {
            path: "/LC-29/components/EditList",
            name: "EditList",
            component: () => import('@/apps/LC-29/components/EditList'),
        },
        {
            path: "/LC-29/components/AddList",
            name: "AddList",
            component: () => import('@/apps/LC-29/components/AddList'),
        },
         {
            path: "/LC-29/components/EditActivity",
            name: "EditActivity",
            component: () => import('@/apps/LC-29/components/EditActivity'),
        },
        
        
    ]
});

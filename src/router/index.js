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
            path: "/buildings",
            name: "our-buildings",
            component: () => import("@/apps/LC-144/Buildings/all-buildings")
        },
        {
            path: "/add",
            name: "add-building",
            component: () => import("@/apps/LC-144/Buildings/single-building")
        },
        {
            path: "/show/:id",
            name: "show-building",
            component: () => import("@/apps/LC-144/Buildings/single-building")
        },
        {
            path: "/edit/:id",
            name: "edit-building",
            component: () => import("@/apps/LC-144/Buildings/single-building")
        }
    ]
});

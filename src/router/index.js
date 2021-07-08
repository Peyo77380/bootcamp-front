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
            path: "/our-buildings",
            name: "our-buildings",
            component: () => import("@/apps/LC-144/Buildings/all-buildings")
        },
        {
            path: "/add-building",
            name: "add-building",
            component: () => import("@/apps/LC-144/Buildings/add-building")
        },
        {
            path: "/show-building",
            name: "show-building",
            component: () => import("@/apps/LC-144/Buildings/single-building")
        },
        {
            path: "/edit-building",
            name: "edit-building",
            component: () => import("@/apps/LC-144/Buildings/edit-building")
        }
    ]
});

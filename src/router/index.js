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
            path: "/room",
            name: "room",
            component: () => import("@/apps/lc-142/index")
        },
        {
            path: "/room/edit:id",
            name: "room-edit",
            component: () => import("@/apps/lc-142/Components/edit/index")
        },
        {
            path: "/room/view:id",
            name: "room-view",
            component: () => import("@/apps/lc-142/Components/view/index")
        },
        {
            path: "/room/add",
            name: "room-add",
            component: () => import("@/apps/lc-142/Components/add/index")
        },
        {
            path: "/room/delete:id",
            name: "room-delete",
            component: () => import("@/apps/lc-142/Components/delete/index")
        }
    ]
});

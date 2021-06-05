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
            name: "RoomList",
            component: () => import("@/apps/lc-142/index")
        },
        {
            path: "/room/edit/:id",
            name: "RoomEdit",
            component: () => import("@/apps/lc-142/Components/edit/index")
        },
        {
            path: "/room/view/:id",
            name: "RoomDetails",
            component: () => import("@/apps/lc-142/Components/view/index")
        },
        {
            path: "/room/add",
            name: "RoomAdd",
            component: () => import("@/apps/lc-142/Components/add/index")
        }
    ]
});

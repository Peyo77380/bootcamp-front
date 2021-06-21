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
            path: "/LC-27",
            name: "LC-27",
            component: () => import("../apps/LC-27/index.vue")
        },
        {
            path: "/LC-163",
            name: "LC-163",
            component: () => import("../apps/LC-163/index.vue")
        },
    ]
});

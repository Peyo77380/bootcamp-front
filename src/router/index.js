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
            path: "/LC-31-RMC",
            name: "LC-31-RMC",
            component: () => import("@/apps/LC-31-RMC/index.vue")
        },
        {
            path: "/LC-166-RMC",
            name: "LC-166-RMC",
            component: () => import("@/apps/LC-166-RMC/index.vue")
        },
        {
            path: "/LC-164-RMC",
            name: "LC-164-RMC",
            component: () => import("@/apps/LC-164-RMC/index.vue")
        }
    ]
});

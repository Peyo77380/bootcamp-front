import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    routes: [
        // Dashboards

        // {
        //     path: "/",
        //     name: "analytics",
        //     component: () => import("@/apps/dash-exemple/Analytics")
        // },
        {
            path: "/",
            name: "facturation_section_add",
            component: () => import("@/apps/facturation/index")
        },
        {
            name: 'calendar',
            path: '/LC-187',
            component: () => import('../apps/LC-187'),
        }
    ]
});

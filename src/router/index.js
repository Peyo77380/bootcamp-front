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
            name: 'faq',
            path: '/LC-186',
            component: () => import('../apps/LC-186'),
        },

    ]
});

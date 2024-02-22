import * as VueRouter from "vue-router";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [{
        path: "/",
        component: () => import("@/views/HomeView.vue")
    }, {
        path: "/about",
        component: () => import("@/views/AboutView.vue")
    }]
});

export default router;
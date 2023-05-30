import Landing from "./components/Landing.vue";
import Form from "./components/Form.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Landing",
        component: Landing
    },
    {
        path: "/form",
        name: "Form",
        component: Form
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
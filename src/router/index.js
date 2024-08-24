import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/user",
      name: "users",
      component: () => import("@/views/UserPage.vue"),
    },
    {
      path: "/user/:name",
      name: "user",
      component: () => import("@/views/UserDetailPage.vue"),
    },
  ],
});

export default router;

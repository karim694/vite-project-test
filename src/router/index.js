import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

import LoginView from "@/views/LoginView.vue";

 import settingsRoute from "./settings.route";
 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
...settingsRoute,
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home ",
        layout: "default",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About ",
        layout: "blank",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: "Login ",
        layout: "blank",
      },
    },
  ],
  linkActiveClass: "vue-active-link",
});

router.afterEach((to) => {
  document.title = to.meta.title || "home";
});

export default router;

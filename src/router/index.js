import { createRouter, createWebHistory } from "vue-router";
import base from "@/router/base";
import internal from "@/router/internal";

const routes = [
  base,
  internal,
  {
    path: "/:pathMatch(.*)*",
    // redirect: '/error/404'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
});

// redirect to login page if session not authenticated
router.beforeEach((to, from, next) => {
  if (to.meta.rule !== "isPublic") {
    router.push({ name: "Homepage" }).then(() => {});
  } else {
    next();
  }
});

export default router;

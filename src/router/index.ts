// @ts-ignore
import { createWebHistory, createRouter } from "vue-router";
//import Home from "../views/Home.vue";
import TestOne from "../views/TestOne.vue";

const routes = [{ path: "/", component: TestOne }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Movie from "../pages/Movie.vue";
import Search from "../pages/Search.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: Movie,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

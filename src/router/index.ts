// Composables
import {
  createRouter,
  createWebHistory,
  RouteParams,
  RouteRecordRaw,
} from "vue-router";
import Home from "../pages/Home.vue";
import Movie from "../pages/Movie.vue";
import Search from "../pages/Search.vue";

type AppRouteRecord = Omit<RouteRecordRaw, "name" | "children"> & {
  name: string;
  children?: readonly RouteRecordRaw[];
};

type GetRouteName<T extends AppRouteRecord> = T extends {
  children: AppRouteRecord[];
}
  ? T["name"] | GetRouteNames<T["children"]>
  : T["name"];
type GetRouteNames<T extends readonly AppRouteRecord[]> = GetRouteName<
  T[number]
>;

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
] as const satisfies readonly AppRouteRecord[];

type TRoutes = typeof routes;
type TRoutesNames = GetRouteNames<TRoutes>;

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

type TRouteTo = {
  name: TRoutesNames;
  params?: RouteParams;
};

export const routeGuard = (to: TRouteTo) => {
  return to;
};

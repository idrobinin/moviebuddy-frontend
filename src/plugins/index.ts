// Plugins
import { App } from "vue";
import pinia from "../store/index.ts";
import router from "../router/index.ts";
import FloatingVue from "floating-vue";

export function registerPlugins(app: App) {
  app.use(FloatingVue).use(pinia).use(router);
}

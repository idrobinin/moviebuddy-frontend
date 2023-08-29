/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { App } from "vue";
import pinia from "../store/index.ts";
import router from "../router/index.ts";

export function registerPlugins(app: App) {
  app.use(pinia).use(router);
}

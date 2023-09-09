import { createApp } from "vue";
import "./style.css";
import "floating-vue/dist/style.css";
import App from "./App.vue";

const app = createApp(App);
// Plugins
import { registerPlugins } from "./plugins/index.ts";
registerPlugins(app);

app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { plugin, defaultConfig } from '@formkit/vue';
import {useFontawesome} from '@/plugins/fontawesome.js';
import "@/scss/custom.scss";

const app = createApp(App);
const {FontAwesomeIcon} = useFontawesome();
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");

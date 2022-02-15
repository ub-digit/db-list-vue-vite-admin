import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import {useFontawesome} from '@/plugins/fontawesome.js';

const app = createApp(App);
const {FontAwesomeIcon} = useFontawesome();
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
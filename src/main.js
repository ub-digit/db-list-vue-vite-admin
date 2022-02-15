import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faArrowLeft, faArrowRight, faTimes, faChevronDown, faChevronUp, faPlus, faMinus, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import {faSquare, faCheckSquare, faEdit} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowLeft, faArrowRight, faChevronDown, faChevronUp, faTimes, faPlus, faMinus, faSquare, faCheckSquare, faLock, faLockOpen, faEdit);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Countdown from "vue3-flip-countdown";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

createApp(App)
  .use(store)
  .use(router)
  .use(Countdown)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

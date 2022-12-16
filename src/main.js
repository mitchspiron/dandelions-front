import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Countdown from "vue3-flip-countdown";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import VueApexCharts from "vue3-apexcharts";

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

const optionsSweetalert = {
  confirmButtonColor: "#582456",
  confirmButtonText: "Fermer",
  allowEnterKey: false,
};

createApp(App)
  .use(VueSweetalert2, optionsSweetalert)
  .use(store)
  .use(router)
  .use(Countdown)
  .use(Toast)
  .use(VueAwesomePaginate)
  .use(VueApexCharts)
  .component("apexchart", VueApexCharts)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

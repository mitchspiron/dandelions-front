import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Countdown from "vue3-flip-countdown";

createApp(App).use(store).use(router).use(Countdown).mount("#app");

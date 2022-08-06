import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue3-carousel/dist/carousel.css";
import store from "./store/store";
// Popper
// Bootstrap
import * as bootstrap from "bootstrap/dist/js/bootstrap.min";

// import scss
import "@/assets/scss/main.scss";

createApp(App).use(store).use(router).use(bootstrap).mount("#app");

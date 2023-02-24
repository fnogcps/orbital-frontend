import {createApp} from "vue";
import axios from "axios";
import router from "./routes";
import App from "./App.vue";
import "./css/app.css";

createApp(App).use(router, axios).mount("#app");

import { createApp } from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import "uno.css";
import { setupSvgIcon } from "./assets/iconfont/index";
import "./assets/iconfont/iconfont.js";
const app = createApp(App);

setupSvgIcon(app);
app.mount("#app");

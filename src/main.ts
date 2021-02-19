import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton } from "element-plus";
// 样式文件
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ElButton)
  .mount("#app");

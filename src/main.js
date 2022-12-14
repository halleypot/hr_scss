import Vue from "vue";
// 抹平浏览器差异
/*
normalize.css：抹平浏览器差异
使用：
  1：下载： npm i normalize.css
  2:导入  import 'normalize.css/normalize.css'  
*/

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
// 引入 element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// 导入css
import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; //  引入 icon图标
import "@/permission"; // 引入导航守卫
// 引入 element-ui
import ElementUI from "element-ui";
// import "@/utils/elementUI.js";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// 如果当前环境是生产环境，就使用mock
// process.env.NODE_ENV读取当前环境 production代表生产环境  development代表开发环境
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});

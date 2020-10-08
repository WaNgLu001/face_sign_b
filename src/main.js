/*
 * @Author: your name
 * @Date: 2020-09-16 17:24:43
 * @LastEditTime: 2020-10-05 10:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './utils/element'
import './assets/golbal.css'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
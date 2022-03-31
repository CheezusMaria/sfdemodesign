import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import jquery from "jquery";
import { router } from "./router/index";
import { i18n } from "./i18n";
import store from "./store";
import { BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVueIcons);
// import VueYouTubeEmbed from "vue-youtube-embed";
// Vue.use(VueYouTubeEmbed);
// if you don't want install the component globally
// Vue.use(VueYouTubeEmbed, { global: false });
// if you want to install the component globally with a different name
// Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" });
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
window.$ = window.jQuery = jquery;
import "bootstrap";
new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount("#app");

import VueI18n from "vue-i18n";
import Vue from "vue";
import en from "./locales/en";
import tr from "./locales/tr";

Vue.use(VueI18n);

let defaultLanguage = "tr";

const messages = {
  en,
  tr,
};

if (localStorage.getItem("lang")) {
  defaultLanguage = localStorage.getItem("lang");
} else {
  localStorage.setItem("lang", "tr");
}

export const i18n = new VueI18n({
  locale: defaultLanguage,
  messages,
});

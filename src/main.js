import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import dictionary from "./plugins/dictionary";

import { createI18n } from "vue-i18n";
import themeMixin from './plugins/themeMixin.js';

const i18n = createI18n({
  messages: dictionary,
  locale: "EN",
});

import { Icon } from '@iconify/vue';

createApp(App).use(vuetify).use(vuetify).use(i18n).component('Icon', Icon).mixin(themeMixin).mount("#app");

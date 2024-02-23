import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronUp, faLink } from "@fortawesome/free-solid-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(faChevronUp);
library.add(faLink);

// Register the component globally
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});

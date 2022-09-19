import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $ga: any;
    $usergram: {
      sendUse: () => void;
      sendCopy: () => void;
    };
  }
}

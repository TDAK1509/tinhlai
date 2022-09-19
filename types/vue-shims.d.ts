import Vue from "vue";
import { Usergram } from "./Usergram";

declare module "vue/types/vue" {
  interface Vue {
    $ga: any;
    $usergram: Usergram;
  }
}

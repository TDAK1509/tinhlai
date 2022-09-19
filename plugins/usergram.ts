import Vue from "vue";
import { Usergram } from "@/types/Usergram";

const usergram = (window as any).usergram || [];

const $usergram: Usergram = {
  sendUse: () => {
    usergram.push(["send", "Ugo97x-1", "cv", "use"]);
  },

  sendCopy: () => {
    usergram.push(["send", "Ugo97x-1", "cv", "copy"]);
  },

  sendPageView: () => {
    usergram.push(["send", "Ugo97x-1", "pv"]);
  }
};

Vue.prototype.$usergram = $usergram;

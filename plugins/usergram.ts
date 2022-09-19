import Vue from "vue";

const usergram = (window as any).usergram || [];

Vue.prototype.$usergram = {
  sendUse: () => {
    usergram.push(["send", "Ugo97x-1", "cv", "use"]);
  },

  sendCopy: () => {
    usergram.push(["send", "Ugo97x-1", "cv", "copy"]);
  }
};

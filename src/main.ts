import Vue from "vue";
import { App } from "./components/App";
import { Route } from "./router/route";

Vue.config.productionTip = false;

new Vue({
  methods: {
    goTo<T extends Route<{}>>(route: T, params: T["options"]["params"] = {}) {
      this.$emit("goto", { route, params });
    }
  },
  render: h => h(App)
}).$mount("#app");

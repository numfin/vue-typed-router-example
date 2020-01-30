import Vue from "vue";
import style from "./App.module.css";
import { RouterView } from "@/router/RouterView";
import { Route } from "@/router/route";
import { PageBRoute } from "@/pages/PageB";
import { PageARoute } from "@/pages/PageA";

const pages: Route<{}>[] = [PageARoute, PageBRoute];

export const App = Vue.extend({
  name: "App",
  render() {
    return (
      <div class={style.hi}>
        <RouterView routes={pages} />
      </div>
    );
  }
});

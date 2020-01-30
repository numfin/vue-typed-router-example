import { Route } from "@/router/route";

export const RouteAParams = {
  param1: "",
  param2: ""
};

export const PageARoute = new Route({
  component: () => require("./PageA.component").PageA,
  url: "",
  params: RouteAParams
});

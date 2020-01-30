import { Route } from "@/router/route";

export const PageBRoute = new Route({
  component: () => require("./PageB.component").PageB,
  url: "pageb"
});

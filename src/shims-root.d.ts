import { Route } from "./router/route";

declare module "vue/types/vue" {
  interface Vue {
    goTo<T extends Route<{}>>(route: T, params: T["options"]["params"]): void;
  }
}

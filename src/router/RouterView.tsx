import { Route } from "./route";
import { componentFactory } from "vue-tsx-support";

type R = Record<string, string>;

function formatHref(path: string, query: string) {
  const queryPrefix = query.length ? "?" : "";
  const pathPrefix = path[0] === "/" ? "" : `/`;
  const url = new URL(
    `${location.origin}${pathPrefix}${path}${queryPrefix}${query}`
  );
  return url.href;
}

function formatQuery(params: R) {
  // convert {c: "some", a:1} -> a=2&c=coolo
  const search = new URLSearchParams(params ?? {});
  search.sort();
  return search.toString();
}

function getHistoryState(): Record<string, string> {
  const { state } = history;
  const validState = state && typeof state === "object";
  return validState ? state : {};
}

const RouterPlaceholder = componentFactory.create({
  render: h => h()
});

const mapper: Record<string, Route<R>> = {};

export const RouterView = componentFactory.create({
  name: "RouterView",
  props: {
    routes: {
      type: Array as () => Route<R>[],
      required: true
    }
  },
  data() {
    return {
      view: RouterPlaceholder
    };
  },
  created() {
    this.initRoutes(this.routes);
    this.bindEvents();
    this.setActiveView();
  },
  render() {
    const View = this.view;
    return <View />;
  },
  methods: {
    goTo<T extends Route<R>>(route: T, params: T["options"]["params"] = {}) {
      const pathNext = formatHref(route.path, formatQuery(params!));
      const pathBefore = formatHref(
        location.pathname,
        formatQuery(getHistoryState())
      );
      if (pathNext !== pathBefore) {
        history.pushState(params, "", pathNext);
        this.setRoute(route);
      }
    },
    initRoutes(routes?: Route<R>[]) {
      routes?.forEach(route => {
        mapper[route.path] = route;
        this.initRoutes(route.options.children);
      });
    },
    setRoute(route: Route<R>) {
      route.updateParams();
      this.view = route.options.component();
    },
    setActiveView() {
      const mapped = mapper[location.pathname];
      if (mapped) {
        return this.setRoute(mapped);
      }
      const firstRoute = this.routes[0];
      history.replaceState(null, "", formatHref(firstRoute.options.url, ""));
      this.setRoute(firstRoute);
    },
    bindEvents() {
      window.addEventListener("popstate", () => this.setActiveView());

      interface GotoEventParams {
        route: Route<{}>;
        params: Route<{}>["options"]["params"];
      }
      this.$root.$on("goto", (opts: GotoEventParams) => {
        this.goTo(opts.route, opts.params);
      });
    }
  }
});

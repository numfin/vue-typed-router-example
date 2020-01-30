import { componentFactory, modifiers, TsxComponent } from "vue-tsx-support";
import { Route } from "./route";

export function linkFactory<T extends Route<any>>(
  route: T
): TsxComponent<Vue, { params?: T["options"]["params"] }> {
  return componentFactory.create({
    name: "Link",
    props: {
      params: {
        type: Object as () => T["options"]["params"],
        default: () => ({})
      }
    },
    methods: {
      onLinkClick() {
        this.$root.goTo(route, this.params);
      }
    },
    render() {
      return (
        <a href={route.path} onClick={modifiers.prevent(this.onLinkClick)}>
          {this.$slots.default}
        </a>
      );
    }
  });
}

import { componentFactory } from "vue-tsx-support";
import { RouteAParams } from "@/pages/PageA";

export const PageAChild = componentFactory.create({
  name: "PageAChild",
  data() {
    return { RouteAParams };
  },
  render() {
    return (
      <div>
        Page A Child. Params:
        <br />1 = {RouteAParams.param1}
        <br />2 = {RouteAParams.param2}
      </div>
    );
  }
});

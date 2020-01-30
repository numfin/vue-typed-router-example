import { componentFactory } from "vue-tsx-support";
import { linkFactory } from "@/router/Link";
import { PageARoute } from "./PageA";
const PageALink = linkFactory(PageARoute);

export const PageB = componentFactory.create({
  name: "PageB",
  render() {
    return (
      <div>
        pageB
        <PageALink params={{ param1: "hi", param2: "there" }}>
          To Page A
        </PageALink>
      </div>
    );
  }
});

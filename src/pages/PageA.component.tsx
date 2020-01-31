import { componentFactory } from "vue-tsx-support";
import { PageAChild } from "@/components/PageAChild";
import { linkFactory } from "@/router/Link";
import { PageBRoute } from "./PageB";
import { PageARoute } from "./PageA";

const PageBLink = linkFactory(PageBRoute);
const PageALink = linkFactory(PageARoute);

export const PageA = componentFactory.create({
  name: "PageA",
  render() {
    return (
      <div>
        PageA
        <PageAChild />
        <PageALink params={{ param1: "test1", param2: "o" }}>
          Change param1
        </PageALink>
        <PageBLink>To Page B</PageBLink>
      </div>
    );
  }
});

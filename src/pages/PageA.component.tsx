import { componentFactory } from "vue-tsx-support";
import { PageAChild } from "@/components/PageAChild";
import { linkFactory } from "@/router/Link";
import { PageBRoute } from "./PageB";

const PageBLink = linkFactory(PageBRoute);
export const PageA = componentFactory.create({
  name: "PageA",
  render() {
    return (
      <div>
        PageA
        <PageAChild />
        <PageBLink>To Page B</PageBLink>
      </div>
    );
  }
});

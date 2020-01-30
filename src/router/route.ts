import { TsxComponent } from "vue-tsx-support";

export class Route<P extends Record<string, string>> {
  public prefix = "";

  constructor(
    public readonly options: {
      url: string;
      component: () => TsxComponent<Vue>;
      children?: Route<Record<string, string>>[];
      params?: P;
    }
  ) {
    this.initChildren();
  }

  updateParams() {
    const { searchParams } = new URL(location.href);
    const { params } = this.options;
    if (params) {
      Object.keys(params).forEach(param => {
        params[param as keyof P] = (searchParams.get(param) || "") as any;
      });
    }
  }

  get path() {
    return `${this.prefix}${this.options.url}/`;
  }

  private initChildren() {
    this.options.children?.forEach(child => {
      child.prefix = this.path;
    });
  }
}

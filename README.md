# vuetsx

# NOT FOR PRODUCTION USE

This example shows how to setup vue project with typescript.
But instead of just using typescript with vue this example go further and use types everywhere: from tsx to css modules and router.

> vue-router weight is 23kb which is huge and its not typed.

- Router is in `src/router/RouterView`
- New route created via:

```typescript
new Route(opts: RouteOptions)

interface RouteOptions {
  // url prefix. Ex: / or /project and in children /child
  // Router inject path prefixes in children routes
  url: string;
  // View component. Should be function with
  // require("").ImportName
  // because AView can require BRoute and BView can require ARoute
  // and you will get undefined
  component: () => TsxComponent<Vue>;
  // Array of children routes: [new Route(), new Route()]
  children?: Route<Record<string, string>>[];
  // Interface of query parameters
  params?: Record<string, string>;
}
```

> NOTE: you can't use parameters in url (e.g. `/url/:param1/other`). All parameters should be in query (e.g. `/url/other?param1=some`)

Router implemented with history.pushState() and history events. So evergreen only :)

Thats it!

P.S. take a look at `src/router/Link.tsx` to see how to use `vue-tsx-support` with generics.

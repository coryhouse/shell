# Module Federation with React

This repo contains a shell that consumes 2 remotes in separate repos:

- [Remote 1](https://github.com/coryhouse/remote-1)
- [Remote 2](https://github.com/coryhouse/remote-2)

## Concerns

- Coupling props and types

## Next Steps

1. Show release flow with breaking changes

## To Demo

## Already Demo'd

- [x] Demo - Show that passing a new prop doesn't break existing remotes (I've already proven this works fine)
- [x] Support running the remote without the shell displaying via a querystring, but still pass the shell's props to the remote
- [x] Add account selector and show that different links displays for different accounts
- [x] Reusable ShellContext for running remotes in isolation.
- [x] Show shell error fallback working when throwing error in remote 1
- [x] Show custom error fallback working when throwing in remote 2.
- [x] Show error reset working
- [x] Streamlined remote entry points
- [x] Using CRA as Remote
- [x] Unique entry for remote2 due to custom error boundary at root.
- [x] Show lazy loading remote's subroutes
- [x] Internationalization
- [x] Can omit React imports
- [x] Granular error boundaries
- [x] [Handle a remote failing elegantly](https://github.com/coryhouse/shell/issues/1)
- [x] Enhanced ErrorFallback component
- [x] List of items to publish via npm below

## TODO

- [ ] Fix this: Loading indicators only showing for first link
- [ ] Document converting CRA to be a remote
- [ ] Using NX as Remote
- [ ] Show shared fetching and caching
- [ ] Notifications
- [ ] Remote app framework
- [ ] Feature flagging
- [ ] Inter-app communication - Shell provide nav service?
- [ ] Extract lazy from config so it's just data and fetch before build
- [ ] Convert webpack config to TypeScript
- [ ] Read remote config in webpack config
- [ ] Implement remote registry.
- [ ] Each remote provides a manifest file that contains meta about its props and how to import it. Or, each remote's types be read or generated?
- [ ] Shared webpack/esbuild config
- [ ] Query example with caching
- [ ] https://github.com/originjs/vite-plugin-federation
- [ ] [ESBuild federation](https://github.com/jacob-ebey/esbuild-federation-example)

## Other key decisions

Key decisions
Mono vs poly repo -
Monorepo tooling (Turbo vs NX)
Routing
Shared libs - RDS, others?
Security
Data fetching
Deployment - one shell or multiple?
Error handling
Logging
Global state

## To publish in npm package

1. ShellContext (For running remotes in isolation against mocked shell props)
2. RemoteProps (and the associated child types)
3. eslint-config-fm-global
4.

## MF Challenges

- Shared libs can be hard to upgrade major versions.
- Can’t (easily) server render or use RSC
- Use caution when loading remotes since the network may fail

## Other architectures to consider

1. Cross-team monolith
2. [Use Astro](https://twitter.com/Daniel_Mantei/status/1670872690587213825)
3. [Use the platform - Use import maps instead of module federation](https://www.mercedes-benz.io/2023/01/05/you-might-not-need-module-federation-orchestrate-your-microfrontends-at-runtime-with-import-maps/)

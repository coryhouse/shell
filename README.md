# Module Federation with React

This repo contains a shell that consumes 2 remotes in separate repos:

- [Remote 1](https://github.com/coryhouse/remote-1)
- [Remote 2](https://github.com/coryhouse/remote-2)

## Concerns

- Coupling props and types

## Next Steps

1. Show release flow with breaking changes

## TODO

- [ ] Demo - Show that passing a new prop doesn't break existing remotes (I've already proven this works fine)
- [ ] Add account selector and show that different links displays for different accounts
- [ ] Support running the remote without the shell displaying, but still pass the shell's props to the remote
- [ ] Extract lazy from config so it's just data and fetch before build
- [ ] Convert webpack to TypeScript
- [ ] Read remote config in webpack config
- [ ] Implement remote registry.
- [ ] Eliminate need for importing React
- [ ] Unify remote props via common type
- [ ] Each remote provides a manifest file that contains meta about its props and how to import it. Or, each remote's types be read or generated?
- [ ] Shared webpack/esbuild config
- [ ] Query example with caching
- [ ] [ESBuild federation](https://github.com/jacob-ebey/esbuild-federation-example)

## MF Challenges

- Shared libs can be hard to upgrade major versions.
- Can’t (easily) server render or use RSC
- Use caution when loading remotes since the network may fail

## Other architectures to consider

1. Cross-team monolith
2. [Use Astro](https://twitter.com/Daniel_Mantei/status/1670872690587213825)
3. [Use the platform - Use import maps instead of module federation](https://www.mercedes-benz.io/2023/01/05/you-might-not-need-module-federation-orchestrate-your-microfrontends-at-runtime-with-import-maps/)

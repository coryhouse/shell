# Module Federation with React

This repo contains a shell that consumes 2 remotes in separate repos:

- [Remote 1](https://github.com/coryhouse/remote-1)
- [Remote 2](https://github.com/coryhouse/remote-2)

## TODO

- [ ] Eliminate need for importing React
- [ ] Unify remote props via common type
- [ ] Domain registry.
- [ ] Each remote provides a manifest file that contains meta about its props and how to import it. Or, each remote's types be read or generated?
- [ ] Shared webpack/esbuild config
- [ ] Query example with caching
- [ ] [ESBuild federation](https://github.com/jacob-ebey/esbuild-federation-example)

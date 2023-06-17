///<reference types="react" />

// TypeScript doesn't know what the remote module resolves to, so we must specify each remote's types.
// TODO: Can each remote's types be read or generated?
declare module "remote1/RemoteOne" {
  export default React.ComponentType<import("./types").RemoteProps>;
}

declare module "remote2/RemoteTwo" {
  export default React.ComponentType<import("./types").RemoteProps>;
}

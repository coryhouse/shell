///<reference types="react" />

// TypeScript doesn't know what the remote module resolves to, so specify the types here.
declare module "remote1/RemoteOne" {
  // TODO: Eliminate copy/pasted Remote props below
  export default React.ComponentType<{
    parentCount: number;
    nav: (url: string) => void;
  }>;
}

declare module "remote2/RemoteTwo" {
  // TODO: Eliminate copy/pasted Remote props below
  export default React.ComponentType<{
    parentCount: number;
    nav: (url: string) => void;
  }>;
}

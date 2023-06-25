// TODO: Publish this type via npm so it can used by each remote.
// This is the API that the shell enforces on each remote.
export type RemoteProps = {
  baseUrl: string;
  parentCount: number;
  urls: Url;
  user: User;
};

export type Url = Record<"about" | "home", string>;
export type User = { id: number; name: string };

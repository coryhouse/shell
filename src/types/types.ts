// TODO: Publish this type via npm so it can used by each remote.
// This is the API that the shell enforces on each remote.
export type RemoteProps = {
  baseUrl: string;
  shellCount: number;
  account: string;
  urls: Url;
  user: User;
  language: Language;
};

export type Url = Record<"about" | "home", string>;
export type User = { id: number; name: string };

export const languages = ["en", "es"] as const;
export type Language = (typeof languages)[number];

import { lazy } from "react";
import { RemoteProps } from "src/types/types";

// This type represents a single remote. It contains the metadata necessary for the shell to load the remote and display a link to it in the shell's navigation.
// In the real shell, this will be fetch from the shell DB.
export type Remote = {
  /** The link to the remote to display in the shell's navigation. */
  navLink: {
    // The text to display in the link.
    text: string;
    // The URL path to assign to the remote.
    path: string;
  };
  // Lazy load remotes so the initial page load only loads the necessary remotes.
  lazy: React.LazyExoticComponent<React.ComponentType<RemoteProps>>;
};

// In the real app:
// 1. Fetch this info from the shell DB.
// 2. Generate this array before startup so the lazy path is static.
export const remotes: Remote[] = [
  {
    navLink: {
      text: "Remote 1",
      path: "/remote1",
    },
    lazy: lazy(() => import("remote1/RemoteOne")),
  },
  {
    navLink: {
      text: "Remote 2",
      path: "/remote2",
    },
    lazy: lazy(() => import("remote2/RemoteTwo")),
  },
];

// export async function getRemotes(): Promise<Remote[]> {}

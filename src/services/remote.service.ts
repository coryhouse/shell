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
    // The order in which to display the link in the shell's navigation.
    order: number;
  };
  // Lazy load remotes so the initial page load only loads the necessary remotes.
  lazy: React.LazyExoticComponent<React.ComponentType<RemoteProps>>;
  // Unique identifier for the remote. Used in webpack config and as the first segment of the import path.
  key: string;
  // The remote's root component
  rootComponent: string;
  // The remote's entry point.
  remoteEntryUrl: string;
};

// In the real app:
// 1. Fetch this info from the shell DB.
// 2. Generate the array before startup so the lazy path is static.
export const remotes: Remote[] = [
  {
    navLink: {
      text: "Remote 1",
      path: "/remote1",
      order: 1,
    },
    key: "remote1",
    rootComponent: "RemoteOne",
    lazy: lazy(() => import("remote1/RemoteOne")),
    remoteEntryUrl:
      process.env.NODE_ENV === "production"
        ? "remote1@https://spotted-list.surge.sh/remoteEntry.js"
        : "remote1@http://localhost:3001/remoteEntry.js",
  },
  {
    navLink: {
      text: "Remote 2",
      path: "/remote2",
      order: 2,
    },
    key: "remote2",
    rootComponent: "RemoteTwo",
    lazy: lazy(() => import("remote2/RemoteTwo")),
    remoteEntryUrl:
      process.env.NODE_ENV === "production"
        ? "remote2@https://grey-whip.surge.sh/remoteEntry.js"
        : "remote2@http://localhost:3002/remoteEntry.js",
  },
];

// export async function getRemotes(): Promise<Remote[]> {}

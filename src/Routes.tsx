import { Route, Routes } from "react-router-dom";
import { remotes } from "./services/remote.service";
import { Suspense } from "react";
import { Language, User } from "./types/types";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

type RoutesProps = {
  count: number;
  account: string;
  urls: Record<"about" | "home", string>;
  user: User;
  language: Language;
};

export function ShellRoutes({
  count,
  account,
  urls,
  user,
  language,
}: RoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="about" element={<h2>About</h2>} />
      {remotes.map(({ navLink, lazy }) => {
        const LazyRemote = lazy;
        return (
          <Route
            key={navLink.path}
            path={navLink.path + "/*"}
            element={
              <ErrorBoundary
                fallbackRender={(props) => (
                  <ErrorFallback
                    {...props}
                    message={`Oops! ${navLink.text} is unavailable.`}
                    hardReloadWhenTryAgainIsClicked
                  />
                )}
              >
                <Suspense fallback="Loading...">
                  <LazyRemote
                    shellCount={count}
                    language={language}
                    account={account}
                    urls={urls}
                    user={user}
                    baseUrl={navLink.path}
                  />
                </Suspense>
              </ErrorBoundary>
            }
          />
        );
      })}
      <Route path="*" element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
}

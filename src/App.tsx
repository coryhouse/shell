import React, { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ShellLayout } from "./components/ShellLayout";
import { Url, User } from "./types/types";

// Lazy load remotes so the initial page load only loads immediately necessary remotes.
// TODO: Improve types
const RemoteOne = lazy(() => import("remote1/RemoteOne"));
const RemoteTwo = lazy(() => import("remote2/RemoteTwo"));

// TODO: Fetch these in real app.
const urls: Record<"about" | "home", string> = { about: "/about", home: "/" };
const user: User = { id: 1, name: "John Doe" };

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ShellLayout
              count={count}
              setCount={setCount}
              RemoteOne={
                <Suspense fallback="Loading...">
                  <RemoteOne parentCount={count} urls={urls} user={user} />
                </Suspense>
              }
              RemoteTwo={
                <Suspense fallback="Loading...">
                  <RemoteTwo parentCount={count} urls={urls} user={user} />
                </Suspense>
              }
            />
          }
        />

        {/* These routes support running each remote directly, without the shell visible, but with the shell's props still provided. */}
        <Route
          path="remote1/*"
          element={
            <Suspense fallback="Loading...">
              <RemoteOne parentCount={count} urls={urls} user={user} />
            </Suspense>
          }
        />
        <Route
          path="remote2/*"
          element={
            <Suspense fallback="Loading...">
              <RemoteTwo parentCount={count} urls={urls} user={user} />
            </Suspense>
          }
        />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  );
}

import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ShellLayout } from "./components/ShellLayout";

// Lazy load remotes so the initial page load only loads immediately necessary remotes.
const RemoteOne = lazy(() => import("remote1/RemoteOne"));
const RemoteTwo = lazy(() => import("remote2/RemoteTwo"));

export default function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

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
                  <RemoteOne parentCount={count} nav={navigate} />
                </Suspense>
              }
              RemoteTwo={
                <Suspense fallback="Loading...">
                  <RemoteTwo parentCount={count} nav={navigate} />
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
              <RemoteOne parentCount={count} nav={navigate} />
            </Suspense>
          }
        />
        <Route
          path="remote2/*"
          element={
            <Suspense fallback="Loading...">
              <RemoteTwo parentCount={count} nav={navigate} />
            </Suspense>
          }
        />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}
